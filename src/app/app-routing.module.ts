import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamOneComponent } from './exam-one/exam-one.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/exam-one' },
  { path: 'exam-one', component : ExamOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    ExamOneComponent
  ]
 }
