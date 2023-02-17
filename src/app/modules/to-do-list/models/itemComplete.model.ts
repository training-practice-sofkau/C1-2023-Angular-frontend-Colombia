export class itemComplete {
  itemId: string;
  title: string;
  description: string;
  responsible: string;
  isCompleted: boolean;
  uidUser: string;
  indexDay: string;

  constructor(
    itemId: string,
    title: string,
    description: string,
    responsible: string,
    isCompleted: boolean,
    uidUser: string,
    indexDay: string
  ) {
    this.itemId = itemId;
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
    this.uidUser = uidUser;
    this.indexDay = indexDay;
  }
}