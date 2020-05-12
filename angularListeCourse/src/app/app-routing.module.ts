import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { MesListesComponent } from './mes-listes/mes-listes.component';
import { CreateListeComponent } from './create-liste/create-liste.component';
import { CreateListeNameComponent } from './create-liste-name/create-liste-name.component';
import { SingleListComponent } from './single-list/single-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';



const routes: Routes = [
  { path: '', component: MesListesComponent },
  { path: 'create-liste-name', component: CreateListeNameComponent },
  { path: 'create-liste', component: CreateListeComponent },
  {path: 'singleList/:id', component: SingleListComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'admin/foods-edits/:id', component: EditFoodComponent },
  {path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
