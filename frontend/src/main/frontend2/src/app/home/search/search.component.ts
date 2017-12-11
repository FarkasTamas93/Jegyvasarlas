import { EventModel } from './../../events/event.model';
import { EventsService } from './../../events.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  theaterCounter:number;
  concertCounter:number;
  cinemaCounter:number;
  exhibitionCounter:number;
  circusCounter:number;

  theaterGenreCounter:number[];
  concertGenreCounter:number[];
  cinemaGenreCounter:number[];
  exhibitionGenreCounter:number[];
  circusGenreCounter:number[];

  townBudapest: boolean = false;
  townDebrecen: boolean = false;
  townGyor: boolean = false;
  townMiskolc: boolean = false;
  townSzeged: boolean = false;
  towns: { town: string, value: boolean }[];

  theatreVigszinhaz: boolean = false;
  theatreOpera: boolean = false;
  theatreMusical: boolean = false;
  theatreDrama: boolean = false;
  theatreBalett: boolean = false;
  theatres: { theatreGenre: string, value: boolean }[];

  concertPop: boolean = false;
  concertRock: boolean = false;
  concertHiphop: boolean = false;
  concertKomoly: boolean = false;
  concertElektro: boolean = false;
  concerts: { concertGenre: string, value: boolean }[];

  cinemaVigjatek: boolean = false;
  cinemaAkcio: boolean = false;
  cinemaAnimacio: boolean = false;
  cinemaHorror: boolean = false;
  cinemaRomantikus: boolean = false;
  cinemaKrimi: boolean = false;
  cinemas: { cinemaGenre: string, value: boolean }[];

  exhibitionTortenelmi: boolean = false;
  exhibitionSzepmuveszeti: boolean = false;
  exhibitionAllat: boolean = false;
  exhibitions: { exhibitionGenre: string, value: boolean }[];

  circusAllatcirkusz: boolean = false;
  circusAkrobatikusCirkusz: boolean = false;
  circusHagyomanyos: boolean = false;
  circuses: { circusGenre: string, value: boolean }[];

  eventItems: EventModel[] = []
  searchedItems: EventModel[] = [];

  constructor(private eventservice: EventsService) { }

  ngOnInit() {
    this.eventItems = this.eventservice.getEvents();
    this.searchedItems = this.eventservice.getEvents();
    this.searchedTypesCounter();
    // console.log(this.eventItems.length);
    // console.log("asd");
    // console.log(this.searchedItems);
  }

  searchedTypesCounter() {
    let theater:number=0;
    let concert:number=0;
    let cinema:number=0;
    let exhibition:number=0;
    let circus:number=0;
    let theaterVigszinhaz:number=0;
    for(let i=0;i<this.eventItems.length;i++){
      if(this.eventItems[i].eventType === "Színház") {
        theater++
        if(this.eventItems[i].eventGenre === "Vígszínház"){
          theaterVigszinhaz++;
        }
      }
      if(this.eventItems[i].eventType === "Koncert") {
        concert++
      }
      if(this.eventItems[i].eventType === "Mozi") {
        cinema++
      }
      if(this.eventItems[i].eventType === "Kiállítás") {
        exhibition++
      }
      if(this.eventItems[i].eventType === "Cirkusz") {
        circus++
      }
    }
  }
  
  search() {
    this.searchedItems = [];
    let searchedTowns: string[] = [];
    this.towns = [{ town: "Budapest", value: this.townBudapest }, { town: "Debrecen", value: this.townDebrecen }, { town: "Győr", value: this.townGyor }, { town: "Miskolc", value: this.townMiskolc }, { town: "Szeged", value: this.townSzeged }];
    for (let i = 0; i < this.towns.length; i++) {
      if (this.towns[i].value === true) {
        searchedTowns.push(this.towns[i].town);
      }
    }
    console.log(searchedTowns);

    let searchedCircusGenre: string[] = [];
    this.circuses = [{ circusGenre: "Állatcirkusz", value: this.circusAllatcirkusz }, { circusGenre: "Akrobatikuscirkusz", value: this.circusAkrobatikusCirkusz }, { circusGenre: "Hagyományos", value: this.circusHagyomanyos }];
    for (let i = 0; i < this.circuses.length; i++) {
      if (this.circuses[i].value === true) {
        searchedCircusGenre.push(this.circuses[i].circusGenre);
      }
    }
    console.log(searchedCircusGenre);

    let searchedExhibitionGenre: string[] = [];
    this.exhibitions = [{ exhibitionGenre: "Történelmi", value: this.exhibitionTortenelmi }, { exhibitionGenre: "Szépművészeti", value: this.exhibitionSzepmuveszeti }, { exhibitionGenre: "Állat", value: this.exhibitionAllat }];
    for (let i = 0; i < this.exhibitions.length; i++) {
      if (this.exhibitions[i].value === true) {
        searchedExhibitionGenre.push(this.exhibitions[i].exhibitionGenre);
      }
    }
    console.log(searchedExhibitionGenre);

    let searchedCinemaGenre: string[] = [];
    this.cinemas = [{ cinemaGenre: "Vígjáték", value: this.cinemaVigjatek }, { cinemaGenre: "Akció", value: this.cinemaAkcio }, { cinemaGenre: "Animáció", value: this.cinemaAnimacio }, { cinemaGenre: "Horror", value: this.cinemaHorror }, { cinemaGenre: "Romantikus", value: this.cinemaRomantikus }, { cinemaGenre: "Krimi", value: this.cinemaKrimi }];
    for (let i = 0; i < this.cinemas.length; i++) {
      if (this.cinemas[i].value === true) {
        searchedCinemaGenre.push(this.cinemas[i].cinemaGenre);
      }
    }
    console.log(searchedCinemaGenre);

    let searchedConcertGenre: string[] = [];
    this.concerts = [{ concertGenre: "Pop", value: this.concertPop }, { concertGenre: "Rock", value: this.concertRock }, { concertGenre: "Hip-hop", value: this.concertHiphop }, { concertGenre: "Komoly", value: this.concertKomoly }, { concertGenre: "Elektro", value: this.concertElektro }];
    for (let i = 0; i < this.concerts.length; i++) {
      if (this.concerts[i].value === true) {
        searchedConcertGenre.push(this.concerts[i].concertGenre);
      }
    }
    console.log(searchedConcertGenre);

    let searchedTheatreGenre: string[] = [];
    this.theatres = [{ theatreGenre: "Vígszínház", value: this.theatreVigszinhaz }, { theatreGenre: "Opera", value: this.theatreOpera }, { theatreGenre: "Musical", value: this.theatreMusical }, { theatreGenre: "Dráma", value: this.theatreDrama }, { theatreGenre: "Balett", value: this.theatreBalett }];
    for (let i = 0; i < this.theatres.length; i++) {
      if (this.theatres[i].value === true) {
        searchedTheatreGenre.push(this.theatres[i].theatreGenre);
      }
    }
    console.log(searchedTheatreGenre);
    
    //Még kell egy másik amihez nem kell várost néznünk
    for (let k = 0; k < searchedTowns.length; k++) {
      if (searchedTheatreGenre.length > 0) {
        for (let i = 0; i < searchedTheatreGenre.length; i++) {
          for (let j = 0; j < this.eventItems.length; j++) {
            if (this.eventItems[j].eventGenre === searchedTheatreGenre[i] && this.eventItems[j].town === searchedTowns[k]) {
              this.searchedItems.push(this.eventItems[j]);
            }
          }
        }
      }

      if (searchedConcertGenre.length > 0) {
        for (let i = 0; i < searchedConcertGenre.length; i++) {
          for (let j = 0; j < this.eventItems.length; j++) {
            if (this.eventItems[j].eventGenre === searchedConcertGenre[i] && this.eventItems[j].town === searchedTowns[k]) {
              this.searchedItems.push(this.eventItems[j]);
            }
          }
        }
      }

      if (searchedCinemaGenre.length > 0) {
        for (let i = 0; i < searchedCinemaGenre.length; i++) {
          for (let j = 0; j < this.eventItems.length; j++) {
            if (this.eventItems[j].eventGenre === searchedCinemaGenre[i] && this.eventItems[j].town === searchedTowns[k]) {
              this.searchedItems.push(this.eventItems[j]);
            }
          }
        }
      }

      if (searchedExhibitionGenre.length > 0) {
        for (let i = 0; i < searchedExhibitionGenre.length; i++) {
          for (let j = 0; j < this.eventItems.length; j++) {
            if (this.eventItems[j].eventGenre === searchedExhibitionGenre[i] && this.eventItems[j].town === searchedTowns[k]) {
              this.searchedItems.push(this.eventItems[j]);
            }
          }
        }
      }

      if (searchedCircusGenre.length > 0) {
        for (let i = 0; i < searchedCircusGenre.length; i++) {
          for (let j = 0; j < this.eventItems.length; j++) {
            if (this.eventItems[j].eventGenre === searchedCircusGenre[i] && this.eventItems[j].town === searchedTowns[k]) {
              this.searchedItems.push(this.eventItems[j]);
            }
          }
        }
      }
      //ezt ki kell javítani, hogy a csak város van és több akkor midnegyik város eventjét tegye bele
      // if(this.searchedItems.length === 0){
      //   for (let j = 0; j < this.eventItems.length; j++) {
      //     if (this.eventItems[j].town === searchedTowns[k]) {
      //       this.searchedItems.push(this.eventItems[j]);
      //     }
      //   }
      // }
    }
  }

  onSelectedItem(index:number) {
    this.eventservice.setSelectedItemIndex(index);
    console.log(index);
  }

  onThreeSelectedItem(index:number) {
    this.eventservice.setlastThreeSelectedItem(index);
    console.log(this.eventservice.getlastThreeSelectedItem());
  }

}
