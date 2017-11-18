import { DatabaseService } from './database.service';
import { EventModel } from './events/event.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventsService {

private eventItems : EventModel[]=[
    // new EventModel("http://pctrs.network.hu/clubpicture/1/4/9/2/_/kutyas_kepek_13_1492289_1211.jpg","A cím","15 év, 8 album, rengeteg koncert, videoklip és emlék – idén dupla albummal, februárban pedig Aréna koncerttel ünnepel a Kowalsky megaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","Debrecen","Csokonai szinhaz","2189-12-21","szinhaz","ulohely",9800),
    // new EventModel("http://kutyabarat.hu/images/content/800x500/363image_boo2.png","A cím2","Teszt most csak valamit irok hogy jo hosszu legyen mar ez az egesz ","Szeged","Csokonai szinhaz","2189-12-21","szinhaz","ulohely",9800),
    // new EventModel("http://www.erdekesvilag.hu/kepek/earl/zsembes-kutya-2.jpg","A cím3","Teszt2","Pecs","Csokonai szinhaz","2289-12-21","szinhaz","ulohely",19800),
    // new EventModel("http://www.szepnapom.hu/macskacica/cic/harom-macska.jpg","A cím4","Teszt3","Eger","Egér szinhaz","2189-12-21","szinhaz","ulohely",29800),
    // new EventModel("http://nlc.p3k.hu/data/cikk/17/161114/1.jpg","A cím4","Teszt4","Szobi","Kft szinhaz","2134-12-31","szinhaz","ulohely",39800),
    // new EventModel("http://static.origos.hu/s/img/i/1509/20150917mosolygo-macska.jpg","A cím5","Teszt5","Nádfudvar","Palacsinta szinhaz","2129-13-24","szinhaz","ulohely",49800),
    // new EventModel("http://www.enkedvencem.hu/wp-content/uploads/2016/08/20160728_enkedvencem_kutya_kviz_cikk1-1024x1024.jpg","A cím6","Teszt6", "Kecskemét","Telefon szinhaz","4183-12-21","szinhaz","ulohely",59800),
    // new EventModel("http://pctrs.network.hu/clubpicture/1/4/9/2/_/kutyas_kepek_13_1492289_1211.jpg","A cím","15 év, 8 album, rengeteg koncert, videoklip és emlék – idén dupla albummal, februárban pedig Aréna koncerttel ünnepel a Kowalsky megaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","Debrecen","Csokonai szinhaz","2189-12-21","szinhaz","ulohely",9800),
    // new EventModel("http://kutyabarat.hu/images/content/800x500/363image_boo2.png","A cím2","Teszt most csak valamit irok hogy jo hosszu legyen mar ez az egesz ","Szeged","Csokonai szinhaz","2189-12-21","szinhaz","ulohely",9800),
    // new EventModel("http://www.erdekesvilag.hu/kepek/earl/zsembes-kutya-2.jpg","A cím3","Teszt2","Pecs","Csokonai szinhaz","2289-12-21","szinhaz","ulohely",19800),
    // new EventModel("http://www.szepnapom.hu/macskacica/cic/harom-macska.jpg","A cím4","Teszt3","Eger","Egér szinhaz","2189-12-21","szinhaz","ulohely",29800),
    // new EventModel("http://nlc.p3k.hu/data/cikk/17/161114/1.jpg","A cím4","Teszt4","Szobi","Kft szinhaz","2134-12-31","szinhaz","ulohely",39800),
    // new EventModel("http://static.origos.hu/s/img/i/1509/20150917mosolygo-macska.jpg","A cím5","Teszt5","Nádfudvar","Palacsinta szinhaz","2129-13-24","szinhaz","ulohely",49800),
    // new EventModel("http://www.enkedvencem.hu/wp-content/uploads/2016/08/20160728_enkedvencem_kutya_kviz_cikk1-1024x1024.jpg","A cím6","Teszt6", "Kecskemét","Telefon szinhaz","4183-12-21","szinhaz","ulohely",59800),
];

  private actualList:EventModel[];

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
 
  setSelectedItemIndex(num:number) {
    this.selectedItem=num;
  }

  getSelectedItemIndex() {
    return this.selectedItem;
  }

  getEventsFromType(type:string) {
    this.actualList=[];
    for(let i of this.eventItems) {
      if(i.eventType === type) {
        this.actualList.push(i);
      }
      if(this.actualList.length===12) {
        break;
      }
    }
  }
//  setlastThreeSelectedItem(num:number) {
//    if(this.segedSumSelectedItem>2) {
//      let seged0=this.lastThreeSelectedItem[0];
//     let seged1=this.lastThreeSelectedItem[1];
//      let seged2=this.lastThreeSelectedItem[2];
//      this.lastThreeSelectedItem[0]=num;
//      this.lastThreeSelectedItem[1]=seged0;
//      this.lastThreeSelectedItem[2]=seged1;
//    }
//    if(this.segedSumSelectedItem<3){
//      this.lastThreeSelectedItem.push(num);
//      this.segedSumSelectedItem++;
//    }
//  }

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

}
