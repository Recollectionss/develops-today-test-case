import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'calendar_events', timestamps: false })
export class CalendarEvent extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  userId: string;

  @Column
  title: string;

  @Column
  date: string;
}
