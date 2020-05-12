import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../models/foods';
import { ListeCourseService } from '../services/listeCourse.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-create-liste',
  templateUrl: './create-liste.component.html',
  styleUrls: ['./create-liste.component.css']
})
export class CreateListeComponent implements OnInit {
 
  
  allFoods: Food[];
  tabData:Food[];
 
  nomListeActuel:String;
  compteur:number;
  tab1=[];
  tab2=[];
  tab3=[];
  
    constructor(private liseCourseService: ListeCourseService, private router: Router) { }
  
    ngOnInit(): void {
    
     this.liseCourseService
     .getFoods()
     .subscribe(data =>this.refresh(data))
     this.nomListeActuel=this.liseCourseService.nomListeActuel;
     this.tab1 = this.liseCourseService.tab1;
     this.tab2 = this.liseCourseService.tab2;
     this.tab3 = this.liseCourseService.tab3;
     this.compteur =this.liseCourseService.compteur;  
 
  }
  
  

  refresh(data)
    {
      
      this.liseCourseService.getFoods().subscribe(data =>{
        this.allFoods = data;
      });


      this.liseCourseService
      .getFoods()
      .subscribe(data=>{
        this.tabData =data;
    
      });
    }
  
    listeCreate(selectedOptions)
  {
    


  var ids = selectedOptions.map(so => so.value);


  var taille= ids.length

  if(this.compteur ==1)
  {


  for(let i of this.tabData)
  {
 
    
    for(var i2=0;i2<taille;i2++ )
    {
  

      if (i.nom == ids[i2] )
      {

       
        this.liseCourseService.listUseraJour1(i.nom,i.image);
        this.tab1 = this.liseCourseService.tab1;
      }
    }

  }
  this.liseCourseService.deleteListe(this.compteur);
 


}
if(this.compteur ==2)
  {


  for(let i of this.tabData)
  {
 
    
    for(var i2=0;i2<taille;i2++ )
    {
  

      if (i.nom == ids[i2] )
      {

       
        this.liseCourseService.listUseraJour2(i.nom,i.image);
       
      }
    }

  }
  this.liseCourseService.deleteListe(this.compteur);
 
}

if(this.compteur ==3)
  {


  for(let i of this.tabData)
  {
 
    
    for(var i2=0;i2<taille;i2++ )
    {
  

      if (i.nom == ids[i2] )
      {

       
        this.liseCourseService.listUseraJour3(i.nom,i.image);
        this.tab3 = this.liseCourseService.tab3;
      }
    }

  }
  this.liseCourseService.deleteListe(this.compteur);
}
 
    this.liseCourseService.compteurIncrementation();
    this.compteur = this.liseCourseService.compteur;

    this.router.navigate(['/'])
  
  }


  handleError(error) {
    console.error(error); 

    

  
}
}