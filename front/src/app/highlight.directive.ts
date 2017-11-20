import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  clicked=false;

  @HostBinding('style.backgroundColor') backgroundColor: string= 'dimgray';

  constructor() { }

  @HostListener('click') mouseclick(eventData: Event) {
    this.clicked=!this.clicked;
    if(this.clicked===true){
      this.backgroundColor = 'green';
    }else{
      this.backgroundColor = 'dimgray';
    }
    
  }
//  @HostListener('mouseover') mouseover(eventData: Event) {
//    
//  }
}
