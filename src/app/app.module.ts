import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ServiciounoComponent } from './serviciouno/serviciouno.component';
import { ServiciodosComponent } from './serviciodos/serviciodos.component';
import { ServiciotresComponent } from './serviciotres/serviciotres.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ServiciocuatroComponent } from './serviciocuatro/serviciocuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ServiciounoComponent,
    ServiciodosComponent,
    ServiciotresComponent,
    NosotrosComponent,
    ContactanosComponent,
    ServiciocuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
