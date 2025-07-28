import { CALENDAR_EVENT_REPOSITORY } from '../constants/calendar-event.constants';
import { CalendarEvent } from './calendar-event.entity';

export const CalendarEventProvider = [
  {
    provide: CALENDAR_EVENT_REPOSITORY,
    useValue: CalendarEvent,
  },
];
