import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ Router} from '@angular/router';

import { Food } from '../models/foods';
import { ListeCourseService } from '../services/listeCourse.service';
import { FormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  foodsId: string;
  foods: Food;
  formDirective: FormGroupDirective;
  
  test:string;

  constructor(private fb: FormBuilder, private liseCourseService: ListeCourseService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.foodsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.liseCourseService.getFoodsById(this.foodsId)
      .subscribe(data => {
        this.foods = data;
      }, 
      error => console.error(error));
  }

 

  updateFoods() {

 

    const editedFood = this.foods;
    this.liseCourseService
    .updateFoods(this.foodsId, editedFood)
    .subscribe(data => this.handleSuccess(data), error => this.handleError(error));

 

  }

  handleSuccess(data) {
    console.log('OK handleSuccess - food updated', data);
    this.router.navigate(['/admin']);
    this.formDirective.reset();
    this.formDirective.resetForm();
    this.liseCourseService.dispatchFoodsCreated(data._id);
  
  }
  
  handleError(error) {
    console.log('KO handleError - food NOT updated', error);
  }  
}
