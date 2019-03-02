import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThingOverviewComponent } from './components/thing-overview/thing-overview.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'thing-list', component: ThingOverviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ThingOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
