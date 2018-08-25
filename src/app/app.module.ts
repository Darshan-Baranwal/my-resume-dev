import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeaveMessageComponent } from './leave-message/leave-message.component';
import { InvolvementAchievementComponent } from './involvement-achievement/involvement-achievement.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core'
import * as Charts from 'fusioncharts/fusioncharts.charts';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactMeComponent,
    MyProjectsComponent,
    MySkillsComponent,
    HomePageComponent,
    LeaveMessageComponent,
    InvolvementAchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
