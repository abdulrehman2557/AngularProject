import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';
import { SettingComponent } from './setting/setting.component';
import { BubbleComponent } from './bubble/bubble.component';
import { WhyAngularComponent } from './why-angular/why-angular.component';


export const routes: Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"about", component:AboutComponent
    },
    {
        path:"projects", component:ProjectsComponent
    },
    {
        path:"articles", component:ArticlesComponent,
        children:[
           
            {path: "bubble",component:BubbleComponent},
            {path:"whyangula", component:WhyAngularComponent}
        ]

    },
    {
        path:"settings", component:SettingComponent
    }
];
