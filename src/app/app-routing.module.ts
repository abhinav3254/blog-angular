import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { WriteContentComponent } from './write-content/write-content.component';

const routes: Routes = [
  {
    path: '',
    component: BlogContentComponent
  },
  {
    path: 'write',
    component: WriteContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
