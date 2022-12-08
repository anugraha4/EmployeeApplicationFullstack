import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    SearchEmpComponent,
    ViewEmpComponent,
    EditEmpComponent,
    DeleteEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
