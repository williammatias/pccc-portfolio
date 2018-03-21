import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {NgModule} from "@angular/core";
import {TemplateComponent} from "./template/template.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
