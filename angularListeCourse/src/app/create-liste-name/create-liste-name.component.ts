import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListeCourseService } from '../services/listeCourse.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-create-liste-name',
  templateUrl: './create-liste-name.component.html',
  styleUrls: ['./create-liste-name.component.css']
})
export class CreateListeNameComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private liseCourseService: ListeCourseService, private router: Router) { }

  listesName: any[];
 
 

  ngOnInit() {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      listeName: [],                   // Crée une instance de FormControl
                     
    });
    this.listesName = this.liseCourseService.listName;



  }

  login() {

    const listeName = this.loginForm.value['listeName'];
    
    this.liseCourseService.addListe(listeName);
    console.log('Données du formulaireeeeee...', this.listesName[1]);
    this.router.navigate(['/create-liste'])
    
   
  }

  
}
