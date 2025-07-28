import { Body, Controller, Param, Post } from '@nestjs/common';
import { CalendarEventService } from './calendar-event.service';
import { AddHolidaysDto } from './dto/add-holidays.dto';

@Controller('users/:userId/calendar/holidays')
export class CalendarEventController {
  constructor(private readonly calendarEventService: CalendarEventService) {}

  @Post()
  addHolidays(@Param('userId') userId: string, @Body() body: AddHolidaysDto) {
    return this.calendarEventService.addHolidays(
      userId,
      body.countryCode,
      body.year,
      body.holidays,
    );
  }
}
