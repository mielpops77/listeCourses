import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { ListeCourseService } from '../services/listeCourse.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
  creationForm :FormGroup;

 
  

  constructor(private fb: FormBuilder,private liseCourseService: ListeCourseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    this.creationForm = this.fb.group({
      nom:'',
      image:''
    });
  }

  createFood(formDirective: FormGroupDirective)
  {
    if(this.creationForm.valid)
    {
      console.log(this.creationForm.value);
      this.liseCourseService
      .createFoods(this.creationForm.value)
      .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    console.log('OK handleSuccess - food created', data);
    this.creationForm.reset();  
    formDirective.resetForm();
    this.liseCourseService.dispatchFoodsCreated(data._id);

  }
  
  handleError(error) {
    console.log('KO handleError - food NOT created', error);
  }
    
  



}
