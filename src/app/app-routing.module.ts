import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ServiciounoComponent } from './serviciouno/serviciouno.component';
import { ServiciodosComponent } from './serviciodos/serviciodos.component';
import { ServiciotresComponent } from './serviciotres/serviciotres.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'servicioUno', component: ServiciounoComponent},
  {path: 'servicioDos', component: ServiciodosComponent},
  {path: 'servicioTres', component: ServiciotresComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
