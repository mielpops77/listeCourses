import { Component, OnInit } from '@angular/core';
import { ListeCourseService } from '../services/listeCourse.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/foods';
@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnInit {
  id :String ;
  allFoods: Food[];
  
  tab1=[];
  tab2=[];
  tab3=[];

  
  
  



  constructor(private activatedRoute : ActivatedRoute ,private liseCourseService: ListeCourseService) 
  {}

  ngOnInit(): void {
    this.liseCourseService
   .getFoods()
   .subscribe(data =>this.refresh(data))
   this.tab1 = this.liseCourseService.tab1;
   this.tab2 = this.liseCourseService.tab2;
   this.tab3 = this.liseCourseService.tab3;    

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  refresh(data)
  {
    console.log('data', data)
    this.liseCourseService.getFoods().subscribe(data =>{
      this.allFoods = data;
    });
  }

  deleteFoods(selectedOptions)
{
const ids = selectedOptions.map(so => so.value);

if (ids.length===1)
{
  return this.liseCourseService
  .deleteSingleFoodstById(ids[0])
  .subscribe(data =>this.refresh(data),err=> this.handleError(err));
} else {
  return this.liseCourseService
  .deleteFoods(ids)
  .subscribe(data =>this.refresh(data),err=> this.handleError(err));
}

}

achatlst1(selectedOptions)
{
  var ids = selectedOptions.map(so => so.value);
 
    for(var i =0;i<this.liseCourseService.tab1.length;i++)
  {
    for(var j= 0;j<ids.length;j++)
    {
      if(this.liseCourseService.tab1[i].nom == ids[j])
      {
        if(this.liseCourseService.tab1[i].achat==false)
        {
          this.liseCourseService.tab1[i].achat=true;
          this.liseCourseService.compteurAchatLst1++
        }
      }
    }
  }

}
achatlst2(selectedOptions)
{
  var ids = selectedOptions.map(so => so.value);
 
    for(var i =0;i<this.liseCourseService.tab2.length;i++)
  {
    for(var j= 0;j<ids.length;j++)
    {
      if(this.liseCourseService.tab2[i].nom == ids[j])
      {
        if(this.liseCourseService.tab2[i].achat==false)
        {
          this.liseCourseService.tab2[i].achat=true;
          this.liseCourseService.compteurAchatLst2++;
        }
      }
    }
  }



}

achatlst3(selectedOptions)
{
  var ids = selectedOptions.map(so => so.value);
 
    for(var i =0;i<this.liseCourseService.tab3.length;i++)
  {
    for(var j= 0;j<ids.length;j++)
    {
      if(this.liseCourseService.tab3[i].nom == ids[j])
      {
        if(this.liseCourseService.tab3[i].achat==false)
        {
          this.liseCourseService.tab3[i].achat=true;
          this.liseCourseService.compteurAchatLst3++;
        }
      }
    }
  }
}









handleError(error) {
  console.error(error); 
}



}
