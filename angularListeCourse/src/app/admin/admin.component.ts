import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../models/foods';
import { ListeCourseService } from '../services/listeCourse.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


allFoods: Food[];
tab=[  
  {
    nom:"carotte",
    image:" http://www.fondation-louisbonduelle.org/wp-content/uploads/2016/10/carotte_222805396.png"
  }
];




  constructor(private fb: FormBuilder,private liseCourseService: ListeCourseService) { }

  ngOnInit(): void {

   this.liseCourseService
   .getFoods()
   .subscribe(data =>this.refresh(data));

   this.liseCourseService.handleFoodsCreated().subscribe(data => {
     console.log('AdminComponent received', data);
     this.refresh(data);
   });



    
  
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

test()
{
  
  
  var a = this.fb.group({
    nom:"carotte",
    image:"http://www.fondation-louisbonduelle.org/wp-content/uploads/2016/10/carotte_222805396.png"
  });

  this.liseCourseService
  .createFoods(a.value);


}


handleSuccess(data) {
  console.log('ok aliment ajouté', data); 
}
handleError(error) {
  console.error(error); 
}






}

