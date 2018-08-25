import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './app/about-me/about-me.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { ContactMeComponent } from './app/contact-me/contact-me.component';
import { MySkillsComponent } from './app/my-skills/my-skills.component';
import { MyProjectsComponent } from './app/my-projects/my-projects.component';
import { InvolvementAchievementComponent } from './app/involvement-achievement/involvement-achievement.component';
const routes: Routes = [
    { path: '', component:  HomePageComponent},
    { path: 'About', component: AboutMeComponent },
    { path: 'Contact', component: ContactMeComponent},
    { path: 'Skills', component: MySkillsComponent },
    { path: 'Projects', component: MyProjectsComponent },
    { path:'InvolvementAndAchievement', component:InvolvementAchievementComponent}
   /*  , children: [
        { path: 'leaveMessage', component: LeaveMessageComponent }
    ]  */
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}