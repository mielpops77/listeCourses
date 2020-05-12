
import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Food } from 'src/app/models/foods';


@Injectable({
  providedIn: 'root'
})
export class ListeCourseService {
  baseUrl = "http://localhost:3500/api/v1/food"

  private foodCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }


  getFoods(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(`${this.baseUrl}/`);
  }

  getFoodsById(id): Observable<Food>{
    return this.httpClient.get<Food>(`${this.baseUrl}/${id}`);
  }

  deleteSingleFoodstById(id): Observable<Food[]>{
    return this.httpClient.delete<Food[]>(`${this.baseUrl}/${id}`);
  }

  
  deleteFoods(ids: string[]) {
    const allIds = ids.join(',');
    return this.httpClient.delete(`${this.baseUrl}/?ids=${allIds}`);
  }

  createFoods(food: Food) {
    return this.httpClient.post<Food>(this.baseUrl, food);
  }

  dispatchFoodsCreated(id: string) {
    this.foodCreated.next(id);
  }


  handleFoodsCreated() {
    return this.foodCreated.asObservable();
  }


  updateFoods(id: string, food: Food) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, food);
  }

  

  nomListeActuel:String;
  
  tab1=[   
    {
    nom:"baanane",
    url:"banoooe",
    achat:false
  }
];
  tab2=[   
    {
    nom:"baanane",
    url:"banoooe",
    achat:false
  }
];
  tab3=[  
    {
    nom:"baanane",
    url:"banoooe",
    achat:false
  }
] ;



compteur:number=1;
compteurAchatLst1:number=0;
compteurAchatLst2:number=0;
compteurAchatLst3:number=0;

compteurIncrementation()
{
  this.compteur++;
}

  listName = 
  [
    {
     
      index:0,
      name:'..'
    
    }
  ]

  listUseraJour1(a:string,b:string)
  {
    const tabe= 
        {
            nom: "..",
            url : "..",
            achat:false
            
          
        };

        tabe.nom = a;
        tabe.url = b;

        this.tab1.push(tabe);

  }

  listUseraJour2(a:string,b:string)
  {
    const tabe= 
        {
            nom: "..",
            url : "..",
            achat:false
        };

        tabe.nom = a;
        tabe.url = b;

        this.tab2.push(tabe);
        

        
  }



  listUseraJour3(a:string,b:string)
  {
    const tabe= 
        {
            nom: "..",
            url : "..",
            achat:false,
        };

        tabe.nom = a;
        tabe.url = b;

        this.tab3.push(tabe);
  }

  deleteListe(nbr:number)
  {
    if (nbr== 1)
    {
      this.tab1[0].nom =this.tab1[this.tab1.length-1].nom
      this.tab1[0].url =this.tab1[this.tab1.length-1].url
      this.tab1.splice(this.tab1.length-1);
     


    }
    if (nbr== 2)
    {
     
      this.tab2[0].nom =this.tab2[this.tab2.length-1].nom
      this.tab2[0].url =this.tab2[this.tab2.length-1].url
      this.tab2.splice(this.tab2.length-1);
      

    }
    if (nbr== 3)
    {
      this.tab3[0].nom =this.tab3[this.tab3.length-1].nom
      this.tab3[0].url =this.tab3[this.tab3.length-1].url
      this.tab3.splice(this.tab3.length-1);

    }
    
  }


 


  addListe(name:string)
  {
    const postObject= 
        {
            index:0,
            name : ".."
            
            
          
        };
        postObject.name = name;
        postObject.index = this.listName.length;
        this.listName.push(postObject);
        this.nomListeActuel = this.listName[postObject.index].name;
       
     


  }
}
