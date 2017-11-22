import { DatabaseService } from './../database.service';
import { EventticketService } from './../eventticket.service';
import { EventTicketModel } from './eventticket.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buyeventticket',
  templateUrl: './buyeventticket.component.html',
  styleUrls: ['./buyeventticket.component.css']
})
export class BuyeventticketComponent implements OnInit {

  @ViewChild('draw') draw: ElementRef;
  @ViewChild('tickets') tickets: ElementRef;
  public context: CanvasRenderingContext2D;

  eventTicket1: EventTicketModel[] = [];
  eventTicket2: EventTicketModel[] = [];
  eventTicket3: EventTicketModel[] = [];
  eventTicket4: EventTicketModel[] = [];
  eventTicket5: EventTicketModel[] = [];
  eventTicket6: EventTicketModel[] = [];
  eventTicket7: EventTicketModel[] = [];
  eventTicket8: EventTicketModel[] = [];
  eventTicket9: EventTicketModel[] = [];
  eventTicket10: EventTicketModel[] = [];
  eventTicket11: EventTicketModel[] = [];
  eventTicket12: EventTicketModel[] = [];
  eventTicket13: EventTicketModel[] = [];
  eventTicket14: EventTicketModel[] = [];

  ticketCanvas: HTMLCollection;


  constructor(private eventTicketService: EventticketService,
    private databaseService: DatabaseService) {
  }

  ngOnInit() {

    // console.log(this.row1);
    // this.databaseService.getTickets().subscribe(
    //   (tickets: EventTicketModel[]) =>{
    //     for(let i=0;i<tickets.length;i++){
    //       this.eventTicketService.getAllEventTicket().push(new EventTicketModel(tickets[i].chair,tickets[i].row,tickets[i].sector,tickets[i].reserved,tickets[i].price));
    //     }
    //   },
    //   (error) => console.log(error)
    // )
    // console.log("elsoben");
    // console.log(this.eventTicketService.getAllEventTicket());

    this.eventTicketService.setAllEventTicketEmpty();
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicket().push(...tickets),
      (error) => console.log(error)
    )

    setTimeout(() => {
      if (this.eventTicketService.getAllEventTicket().length === 0) {
        console.log("0 az erteke");
        this.eventTicketService.setAllEventTicketEmpty();
        this.databaseService.getTickets().subscribe(
          (tickets: any[]) => this.eventTicketService.getAllEventTicket().push(...tickets),
          (error) => console.log(error)
        )
      }
      this.eventTicketService.setEventTicketRows();
      this.eventTicket1 = this.eventTicketService.getEventTicketRow1();
      this.eventTicket2 = this.eventTicketService.getEventTicketRow2();
      this.eventTicket3 = this.eventTicketService.getEventTicketRow3();
      this.eventTicket4 = this.eventTicketService.getEventTicketRow4();
      this.eventTicket5 = this.eventTicketService.getEventTicketRow5();
      this.eventTicket6 = this.eventTicketService.getEventTicketRow6();
      this.eventTicket7 = this.eventTicketService.getEventTicketRow7();
      this.eventTicket8 = this.eventTicketService.getEventTicketRow8();
      this.eventTicket9 = this.eventTicketService.getEventTicketRow9();
      this.eventTicket10 = this.eventTicketService.getEventTicketRow10();
      this.eventTicket11 = this.eventTicketService.getEventTicketRow11();
      this.eventTicket12 = this.eventTicketService.getEventTicketRow12();
      this.eventTicket13 = this.eventTicketService.getEventTicketRow13();
      this.eventTicket14 = this.eventTicketService.getEventTicketRow14();
    }, 1000);

    //     console.log(this.eventTicket1);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let drawCanvas = this.draw.nativeElement;
      let drawContext = drawCanvas.getContext('2d');
      drawContext.font = "30px Verdana";
      drawContext.fillText("Szinpad",40,35);
  
      this.ticketCanvas = (<HTMLDivElement>this.tickets.nativeElement).children;
      for (let i = 0; i < this.ticketCanvas.length; i++) {
        let actualRow = this.ticketCanvas[i];
        for (let j = 0; j < actualRow.children.length; j++) {
          this.context = (<HTMLCanvasElement>actualRow.children[j]).getContext('2d');
          this.context.font = "13px Georgia";
          this.context.fillText((j + 1).toString(), 6, 14);
        }
      }
    }, 1500)

  }

  clickedTicket(row: number, chair: number) {
    console.log("Row:" + row + " " + "Chair" + chair);
    //   console.log(this.ticketCanvas[0].children[2].className="reserved");
    //    let clicked=this.eventTicketService.getClickedTickets().slice();
    //    this.eventTicketService.getClickedTickets().push({row:row,chair:chair});

    //    console.log(clicked);
    //    console.log(this.eventTicketService.getClickedTickets());
    //    for(let i=0;i<this.eventTicketService.getClickedTickets().length;i++){
    //      if(clicked[i].row===row && clicked[i].chair===chair ){
    //        this.eventTicketService.getClickedTickets().splice(i,1);
    //        console.log("Megegyezik");
    //      }
    //    }

    //    var index = myArray.indexOf(key, 0);
    //    if (index > -1) {
    //       myArray.splice(index, 1);
    //    }

    //      let index = this.eventTicketService.getClickedTickets().indexOf({row:1,chair:1});

/*    for (let i = 0; i < this.eventTicketService.getClickedTickets().length; i++) {
      if (this.eventTicketService.getClickedTickets()[i].row === row) {
        index1 = true;
        break;
      }
    }
    for (let i = 0; i < this.eventTicketService.getClickedTickets().length; i++) {
      if (this.eventTicketService.getClickedTickets()[i].chair === chair) {
        index2 = true;
        break;
      }
    }
    */
    let index1 = false;
    let index2 = false;
    let clickedTicketsIndex;

    for (let i = 0; i < this.eventTicketService.getClickedTickets().length; i++) {
      if (this.eventTicketService.getClickedTickets()[i].row === row) {
          index1 = true;
        if(this.eventTicketService.getClickedTickets()[i].chair === chair){
          index2 = true;
          clickedTicketsIndex=i;
        }
      }
    }

    if(index1 && index2) {
      this.eventTicketService.getClickedTickets().splice(clickedTicketsIndex, 1);
    }else{
      this.eventTicketService.getClickedTickets().push({row:row,chair:chair});
    }

    console.log(this.eventTicketService.getClickedTickets());
  }



  saveTickets() {
    this.databaseService.storeTickets(this.eventTicketService.getAllEventTicket()).subscribe((response) => console.log(response), (error) => console.log(error));
  }

  loadTickets() {
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicketTest().push(...tickets),
      (error) => console.log(error)
    )
    //   setTimeout(()=>{console.log(this.eventTicketService.getAllEventTicketTest());},500);

    console.log(this.eventTicketService.getAllEventTicketTest())
    console.log(this.eventTicketService.getAllEventTicketTest()[0]);
  }

  clickedTickets() {
    console.log(this.eventTicketService.getClickedTickets());
  }

  reserveTickets(){
    let tickets = this.eventTicketService.getAllEventTicket();
    for(let i=0;i<this.eventTicketService.getClickedTickets().length;i++) {
      let indexRow=this.eventTicketService.getClickedTickets()[i].row;
      let indexChair=this.eventTicketService.getClickedTickets()[i].chair;
      for(let k=0;k<tickets.length;k++){
        if(tickets[k].row === indexRow && tickets[k].chair===indexChair) {
          console.log("Bejott ide");
          console.log(k);
          tickets[k].reserved=true;
          break;
        }
      }
    }
    console.log(tickets);
  }

}
