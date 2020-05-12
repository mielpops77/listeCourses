import { Component, OnInit } from '@angular/core';
import { ListeCourseService } from '../services/listeCourse.service';
@Component({
  selector: 'app-mes-listes',
  templateUrl: './mes-listes.component.html',
  styleUrls: ['./mes-listes.component.css']
})
export class MesListesComponent implements OnInit {
  nomListe=[];
  i:number=0;
  nbrArticleL1:number;
  nbrArticleL2:number;
  nbrArticleL3:number;
  compteurAchatLst1:number;
  compteurAchatLst2:number;
  compteurAchatLst3:number;
  

  constructor(private liseCourseService: ListeCourseService) { }

  ngOnInit(): void {

    this.nomListe=this.liseCourseService.listName;
    this.i= this.nomListe.length -1;
    this.nbrArticleL1 =this.liseCourseService.tab1.length;
    this.nbrArticleL2 =this.liseCourseService.tab2.length;
    this.nbrArticleL3 =this.liseCourseService.tab3.length;
    this.compteurAchatLst1=this.liseCourseService.compteurAchatLst1;
    this.compteurAchatLst2=this.liseCourseService.compteurAchatLst2;
    this.compteurAchatLst3=this.liseCourseService.compteurAchatLst3;
    
  }

  getColor()
  {
    if(this.nbrArticleL1 == this.compteurAchatLst1) {
      return 'green';
  

    } 
  }

  getColor2()
  {
    if(this.nbrArticleL2 == this.compteurAchatLst2) {
      return 'green';
  

    } 
  }

  getColor3()
  {
    if(this.nbrArticleL3 == this.compteurAchatLst3) {
      return 'green';
  

    } 
  }

}
