import { DatabaseService } from './database.service';
import { EventModel } from './events/event.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventsService {

  private eventItems : EventModel[]=[
  ];

  private actualList:EventModel[];    //typed selected list

  private numOfEventList:EventModel[];

  private selectedItem:number;

  private lastThreeSelectedItem=new Array(0,1,2);

  constructor() { }

  getEvents() {
    return this.eventItems;
  }

  getEvent(index:number) {
    return this.eventItems[index];
  }

  getActualList() {
    return this.actualList;
  }

  getNumOfEventList(){
    return this.numOfEventList;
  }

  setSelectedItemIndex(num:number) {
    this.selectedItem=num;
  }

  getSelectedItemIndex() {
    return this.selectedItem;
  }

  setEventsFromType(type:string) {
    this.actualList=[];
    for(let i of this.eventItems) {
      if(i.eventType === type) {
        this.actualList.push(i);
      }
      if(this.actualList.length===20) {
        break;
      }
    }
  }

  setlastThreeSelectedItem(num:number) {
    let seged0=this.lastThreeSelectedItem[0];
    let seged1=this.lastThreeSelectedItem[1];
    this.lastThreeSelectedItem[0]=num;
    this.lastThreeSelectedItem[1]=seged0;
    this.lastThreeSelectedItem[2]=seged1;
  }
  
  getlastThreeSelectedItem() {
    return this.lastThreeSelectedItem;
  }

  last12EventItems:EventModel[]=[];

  setLast12Event(){
    this.last12EventItems=[];
    for(let i=this.eventItems.length-12;i<this.eventItems.length;i++){
      this.last12EventItems.push(this.eventItems[i]);
    }
  }

  getLast12Event(){
    return this.last12EventItems;
  }

}
