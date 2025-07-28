import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CALENDAR_EVENT_REPOSITORY } from './constants/calendar-event.constants';
import { CalendarEvent } from './entity/calendar-event.entity';
import { v4 as uuidv4 } from 'uuid';
import { NagerApiService } from '../nager-api/nager-api.service';

@Injectable()
export class CalendarEventService {
  constructor(
    @Inject(CALENDAR_EVENT_REPOSITORY)
    private readonly calendarEventRepository: typeof CalendarEvent,
    private readonly nagerApiService: NagerApiService,
  ) {}

  async addHolidays(
    userId: string,
    countryCode: string,
    year: number,
    titlesToAdd?: string[],
  ) {
    let holidays;
    try {
      holidays = await this.nagerApiService.getPublicHolidays(
        year,
        countryCode,
      );
    } catch (error) {
      throw new NotFoundException(`Failed to fetch holidays: ${error.message}`);
    }

    const filtered = titlesToAdd?.length
      ? holidays.filter((h) => titlesToAdd.includes(h.localName))
      : holidays;

    const events = filtered.map((h) => ({
      id: uuidv4(),
      userId,
      title: h.localName,
      date: h.date,
    }));

    await this.calendarEventRepository.bulkCreate(events);

    return { added: events.length };
  }
}
