
export class EventModel {
    public eventIndex: number;
    public imagePath: string;
    public title: string;   
    public description: string;
    public town: string;
    public address:string;
    public time: string;
    public eventType: string;
    public eventGenre: string;
    public ticketType: string[];
    public ticketPrice: number[];
  
    constructor(imagePath: string,title: string, desc: string , town: string,address: string, time: string ,eventType: string,eventGenre: string,ticketType:string[],ticketPrice : number[]) {
      this.imagePath = imagePath;
      this.title = title;
      this.description = desc;   
      this.town=town;
      this.address=address;  
      this.time = time;
      this.eventType=eventType;
      this.eventGenre=eventGenre;
      this.ticketType=ticketType;
      this.ticketPrice = ticketPrice;
    }

}
  