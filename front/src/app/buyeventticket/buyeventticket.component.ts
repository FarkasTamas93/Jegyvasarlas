import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buyeventticket',
  templateUrl: './buyeventticket.component.html',
  styleUrls: ['./buyeventticket.component.css']
})
export class BuyeventticketComponent implements OnInit{

@ViewChild('row1') row1:ElementRef;
@ViewChild('row2') row2:ElementRef;
@ViewChild('row3') row3:ElementRef;
@ViewChild('row4') row4:ElementRef;
@ViewChild('row5') row5:ElementRef;
@ViewChild('row6') row6:ElementRef;
@ViewChild('row7') row7:ElementRef;
@ViewChild('row8') row8:ElementRef;
@ViewChild('row9') row9:ElementRef;
@ViewChild('row10') row10:ElementRef;
@ViewChild('row11') row11:ElementRef;
@ViewChild('row12') row12:ElementRef;
@ViewChild('row13') row13:ElementRef;
@ViewChild('row14') row14:ElementRef;

public context: CanvasRenderingContext2D;

  eventTicketTest =[
    {chair:1,row:1,sector:"valami"},
    {chair:2,row:1,sector:"valami"},
    {chair:3,row:1,sector:"valami"},
    {chair:4,row:1,sector:"valami"},
    {chair:5,row:1,sector:"valami"},
    {chair:6,row:1,sector:"valami"},
    {chair:7,row:1,sector:"valami"},
    {chair:8,row:1,sector:"valami"},
    {chair:9,row:1,sector:"valami"},
    {chair:10,row:1,sector:"valami"},
    {chair:11,row:1,sector:"valami"},
    {chair:12,row:1,sector:"valami"},
    {chair:13,row:1,sector:"valami"},
    {chair:14,row:1,sector:"valami"},
    {chair:15,row:1,sector:"valami"},
    {chair:16,row:1,sector:"valami"}
  ]
  eventTicketTest2 =[
    {chair:1,row:1,sector:"valami"},
    {chair:2,row:1,sector:"valami"},
    {chair:3,row:1,sector:"valami"},
    {chair:4,row:1,sector:"valami"},
    {chair:5,row:1,sector:"valami"},
    {chair:6,row:1,sector:"valami"},
    {chair:7,row:1,sector:"valami"},
    {chair:8,row:1,sector:"valami"},
    {chair:9,row:1,sector:"valami"},
    {chair:10,row:1,sector:"valami"},
    {chair:11,row:1,sector:"valami"},
    {chair:12,row:1,sector:"valami"},
    {chair:13,row:1,sector:"valami"},
    {chair:14,row:1,sector:"valami"},
    {chair:15,row:1,sector:"valami"},
    {chair:16,row:1,sector:"valami"},
    {chair:17,row:1,sector:"valami"}
  ]

  eventTicketTest3 =[
    {chair:1,row:1,sector:"valami"},
    {chair:2,row:1,sector:"valami"},
    {chair:3,row:1,sector:"valami"},
    {chair:4,row:1,sector:"valami"},
    {chair:5,row:1,sector:"valami"},
    {chair:6,row:1,sector:"valami"},
    {chair:7,row:1,sector:"valami"},
    {chair:8,row:1,sector:"valami"},
    {chair:9,row:1,sector:"valami"},
    {chair:10,row:1,sector:"valami"},
    {chair:11,row:1,sector:"valami"},
    {chair:12,row:1,sector:"valami"},
    {chair:13,row:1,sector:"valami"},
    {chair:14,row:1,sector:"valami"},
    {chair:15,row:1,sector:"valami"}
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let row1canvas = (<HTMLDivElement>this.row1.nativeElement).children;
    for(let i=0;i<row1canvas.length;i++){
      this.context = (<HTMLCanvasElement>row1canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row2canvas =(<HTMLDivElement>this.row2.nativeElement).children;
    for(let i=0;i<row2canvas.length;i++){
      this.context = (<HTMLCanvasElement>row2canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row3canvas =(<HTMLDivElement>this.row3.nativeElement).children;
    for(let i=0;i<row3canvas.length;i++){
      this.context = (<HTMLCanvasElement>row3canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row4canvas =(<HTMLDivElement>this.row4.nativeElement).children;
    for(let i=0;i<row4canvas.length;i++){
      this.context = (<HTMLCanvasElement>row4canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row5canvas =(<HTMLDivElement>this.row5.nativeElement).children;
    for(let i=0;i<row5canvas.length;i++){
      this.context = (<HTMLCanvasElement>row5canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row6canvas =(<HTMLDivElement>this.row6.nativeElement).children;
    for(let i=0;i<row6canvas.length;i++){
      this.context = (<HTMLCanvasElement>row6canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row7canvas =(<HTMLDivElement>this.row7.nativeElement).children;
    for(let i=0;i<row7canvas.length;i++){
      this.context = (<HTMLCanvasElement>row7canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row8canvas =(<HTMLDivElement>this.row8.nativeElement).children;
    for(let i=0;i<row8canvas.length;i++){
      this.context = (<HTMLCanvasElement>row8canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row9canvas =(<HTMLDivElement>this.row9.nativeElement).children;
    for(let i=0;i<row9canvas.length;i++){
      this.context = (<HTMLCanvasElement>row9canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row10canvas =(<HTMLDivElement>this.row10.nativeElement).children;
    for(let i=0;i<row10canvas.length;i++){
      this.context = (<HTMLCanvasElement>row10canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row11canvas =(<HTMLDivElement>this.row11.nativeElement).children;
    for(let i=0;i<row11canvas.length;i++){
      this.context = (<HTMLCanvasElement>row11canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row12canvas =(<HTMLDivElement>this.row12.nativeElement).children;
    for(let i=0;i<row12canvas.length;i++){
      this.context = (<HTMLCanvasElement>row12canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row13canvas =(<HTMLDivElement>this.row13.nativeElement).children;
    for(let i=0;i<row13canvas.length;i++){
      this.context = (<HTMLCanvasElement>row13canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
    let row14canvas =(<HTMLDivElement>this.row14.nativeElement).children;
    for(let i=0;i<row14canvas.length;i++){
      this.context = (<HTMLCanvasElement>row14canvas[i]).getContext('2d');
      this.context.font="13px Georgia";
      this.context.fillText(i.toString(),6,14);
    }
      console.log(this.row1);
  }
   
  Teszt(){
    console.log("Hello");
  }
}
