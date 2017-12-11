import { EventticketService } from './eventticket.service';
import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  clicked=false;

  @Input() clickedEventIndex:{row:number,chair:number,reserved:boolean};

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef:ElementRef,
              private eventticketService:EventticketService) {}

//  reservedTickets = 

  @HostListener('click') mouseclick() {
    console.log(this.elRef);
    if(this.clickedEventIndex.reserved==false){
      this.clicked=!this.clicked;
      if(this.clicked===true){
        this.backgroundColor = '#ffa500';
      }else{
        this.backgroundColor = '#3cb371';
      }
    }
    
    
  }
//  @HostListener('mouseover') mouseover(eventData: Event) {
//    
//  }
}
