
export class EventTicketModel {
    public chair: number;
    public row: number;
    public sector: string;   
    public reserved: boolean;
    public price: number;

    constructor(chair: number,row: number, sector: string , reserved: boolean,price: number) {
      this.chair = chair;
      this.row = row;
      this.sector = sector;   
      this.reserved=reserved;
      this.price=price;

    }

}
  