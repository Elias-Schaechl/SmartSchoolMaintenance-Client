import { ConfigService } from './services/config.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThingOverviewComponent } from './components/thing-overview/thing-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogViewComponent } from './components/log-view/log-view.component';
import { ThingDetailComponent } from './components/thing-detail/thing-detail.component';
import { APP_INITIALIZER } from '@angular/core';



const appRoutes: Routes = [
  { path: 'thing-list', component: ThingOverviewComponent },
  { path: 'log-view', component: LogViewComponent },
  { path: 'thing-detail', component: ThingDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ThingOverviewComponent,
    LogViewComponent,
    ThingDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.load(),
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
