import { DatabaseService } from './../database.service';
import { EventticketService } from './../eventticket.service';
import { EventTicketModel } from './eventticket.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buyeventticket',
  templateUrl: './buyeventticket.component.html',
  styleUrls: ['./buyeventticket.component.css']
})
export class BuyeventticketComponent implements OnInit{

// @ViewChild('row1') row1:ElementRef;
// @ViewChild('row2') row2:ElementRef;
// @ViewChild('row3') row3:ElementRef;
// @ViewChild('row4') row4:ElementRef;
// @ViewChild('row5') row5:ElementRef;
// @ViewChild('row6') row6:ElementRef;
// @ViewChild('row7') row7:ElementRef;
// @ViewChild('row8') row8:ElementRef;
// @ViewChild('row9') row9:ElementRef;
// @ViewChild('row10') row10:ElementRef;
// @ViewChild('row11') row11:ElementRef;
// @ViewChild('row12') row12:ElementRef;
// @ViewChild('row13') row13:ElementRef;
// @ViewChild('row14') row14:ElementRef;
@ViewChild('tickets') tickets:ElementRef;
 public context: CanvasRenderingContext2D;

   eventTicket1:EventTicketModel[] =[];
   eventTicket2:EventTicketModel[] =[];
   eventTicket3:EventTicketModel[] =[];
   eventTicket4:EventTicketModel[] =[];
   eventTicket5:EventTicketModel[] =[];
   eventTicket6:EventTicketModel[] =[];
   eventTicket7:EventTicketModel[] =[];
   eventTicket8:EventTicketModel[] =[];
   eventTicket9:EventTicketModel[] =[];
   eventTicket10:EventTicketModel[] =[];
   eventTicket11:EventTicketModel[] =[];
   eventTicket12:EventTicketModel[] =[];
   eventTicket13:EventTicketModel[] =[];
   eventTicket14:EventTicketModel[] =[];

//   row1canvas:HTMLCollection;
//   row2canvas:HTMLCollection;
//   row3canvas:HTMLCollection;
//   row4canvas:HTMLCollection;
//   row5canvas:HTMLCollection;
//   row6canvas:HTMLCollection;
//   row7canvas:HTMLCollection;
//   row8canvas:HTMLCollection;
//   row9canvas:HTMLCollection;
//   row10canvas:HTMLCollection;
//   row11canvas:HTMLCollection;
//   row12canvas:HTMLCollection;
//   row13canvas:HTMLCollection;
//   row14canvas:HTMLCollection;

  ticketCanvas:HTMLCollection;

   constructor(private eventTicketService:EventticketService,
               private databaseService:DatabaseService) { }

   ngOnInit() {
     this.eventTicketService.setAllEventTicketEmpty();
//     console.log(this.row1);
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
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicket().push(...tickets),
      (error) => console.log(error)
    )

     setTimeout(()=>{
      this.eventTicketService.setEventTicketRows();
      this.eventTicket1=this.eventTicketService.getEventTicketRow1();
      this.eventTicket2=this.eventTicketService.getEventTicketRow2();
      this.eventTicket3=this.eventTicketService.getEventTicketRow3();
      this.eventTicket4=this.eventTicketService.getEventTicketRow4();
      this.eventTicket5=this.eventTicketService.getEventTicketRow5();
      this.eventTicket6=this.eventTicketService.getEventTicketRow6();
      this.eventTicket7=this.eventTicketService.getEventTicketRow7();
      this.eventTicket8=this.eventTicketService.getEventTicketRow8();
      this.eventTicket9=this.eventTicketService.getEventTicketRow9();
      this.eventTicket10=this.eventTicketService.getEventTicketRow10();
      this.eventTicket11=this.eventTicketService.getEventTicketRow11();
      this.eventTicket12=this.eventTicketService.getEventTicketRow12();
      this.eventTicket13=this.eventTicketService.getEventTicketRow13();
      this.eventTicket14=this.eventTicketService.getEventTicketRow14();
      },300);
     
//     console.log(this.eventTicket1);
   }

   ngAfterViewInit() {
    setTimeout(()=>{
      this.ticketCanvas =(<HTMLDivElement>this.tickets.nativeElement).children;
      for(let i=0;i<this.ticketCanvas.length;i++){
        let actualRow=this.ticketCanvas[i];
        for(let j=0;j<actualRow.children.length;j++){
          this.context=(<HTMLCanvasElement>actualRow.children[j]).getContext('2d');
          this.context.font="13px Georgia";
          this.context.fillText((j+1).toString(),6,14);}
        }
      },600)
 //       console.log(actualRow);
 //       this.context=(<HTMLCanvasElement>actualRow).getContext('2d');
 //       this.context.font="13px Georgia";
 //       this.context.fillText(i.toString(),6,14);
      
    //  for(let i=0;i<this.ticketCanvas.length;i++){
    //    this.context = (<HTMLCanvasElement>this.ticketCanvas[i]).getContext('2d');
    //    this.context.font="13px Georgia";
    //    this.context.fillText(i.toString(),6,14);
    // }
//     console.log(this.tickets);
//     console.log(this.ticketCanvas);
//     this.row1canvas = (<HTMLDivElement>this.row1.nativeElement).children;
//     for(let i=0;i<this.row1canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row1canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row2canvas =(<HTMLDivElement>this.row2.nativeElement).children;
//     for(let i=0;i<this.row2canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row2canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row3canvas =(<HTMLDivElement>this.row3.nativeElement).children;
//     for(let i=0;i<this.row3canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row3canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row4canvas =(<HTMLDivElement>this.row4.nativeElement).children;
//     for(let i=0;i<this.row4canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row4canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row5canvas =(<HTMLDivElement>this.row5.nativeElement).children;
//     for(let i=0;i<this.row5canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row5canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row6canvas =(<HTMLDivElement>this.row6.nativeElement).children;
//     for(let i=0;i<this.row6canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row6canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row7canvas =(<HTMLDivElement>this.row7.nativeElement).children;
//     for(let i=0;i<this.row7canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row7canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row8canvas =(<HTMLDivElement>this.row8.nativeElement).children;
//     for(let i=0;i<this.row8canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row8canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row9canvas =(<HTMLDivElement>this.row9.nativeElement).children;
//     for(let i=0;i<this.row9canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row9canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row10canvas =(<HTMLDivElement>this.row10.nativeElement).children;
//     for(let i=0;i<this.row10canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row10canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row11canvas =(<HTMLDivElement>this.row11.nativeElement).children;
//     for(let i=0;i<this.row11canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row11canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row12canvas =(<HTMLDivElement>this.row12.nativeElement).children;
//     for(let i=0;i<this.row12canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row12canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row13canvas =(<HTMLDivElement>this.row13.nativeElement).children;
//     for(let i=0;i<this.row13canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row13canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//     this.row14canvas =(<HTMLDivElement>this.row14.nativeElement).children;
//     for(let i=0;i<this.row14canvas.length;i++){
//       this.context = (<HTMLCanvasElement>this.row14canvas[i]).getContext('2d');
//       this.context.font="13px Georgia";
//       this.context.fillText(i.toString(),6,14);
//     }
//       console.log(this.row1);
//   }
    }
    
   Teszt(row:number,chair:number){
     console.log("Row:"+ row + " " +"Chair"+chair);
   }

   saveTickets(){
//     console.log(this.eventTicketService.getAllEventTicket());
       this.databaseService.storeTickets(this.eventTicketService.getAllEventTicket()).subscribe((response) => console.log(response),(error) =>console.log(error));
   }

   loadTickets(){
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicketTest().push(...tickets),
      (error) => console.log(error)
    )
 //   setTimeout(()=>{console.log(this.eventTicketService.getAllEventTicketTest());},500);

    console.log(this.eventTicketService.getAllEventTicketTest())
    console.log(this.eventTicketService.getAllEventTicketTest()[0]);
   }
  
}
