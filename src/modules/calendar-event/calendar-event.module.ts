import { Module } from '@nestjs/common';
import { CalendarEventService } from './calendar-event.service';
import { CalendarEventController } from './calendar-event.controller';
import { CalendarEventProvider } from './entity/calendar-event.provider';
import { NagerApiModule } from '../nager-api/nager-api.module';

@Module({
  imports: [NagerApiModule],
  controllers: [CalendarEventController],
  providers: [CalendarEventService, ...CalendarEventProvider],
})
export class CalendarEventModule {}
