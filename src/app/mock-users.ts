import { User } from './user';

export const USERS: User[] = [
  { transactionId: 12345678987654, name: 'Alex', sqlList: ['select * from test', 'delete from users where id = 1'] },
  { transactionId: 98345987655686, name: 'Peter', sqlList: ['select * from test', 'delete from users where id = 1'] },
  { transactionId: 23456789987654, name: 'Stefan', sqlList: ['select * from test', 'delete from users where id = 1'] },
  { transactionId: 87647382909878, name: 'Mario', sqlList: ['select * from test', 'delete from users where id = 1'] },
  { transactionId: 42938475657483, name: 'Philipp', sqlList: ['select * from test', 'delete from users where id = 1'] },
  { transactionId: 92832435909392, name: 'Thomas', sqlList: ['select * from test', 'delete from users where id = 1'] }
];
