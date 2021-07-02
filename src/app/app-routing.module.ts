import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ElectionofficerComponent} from './electionofficer/electionofficer.component';
import {VoterComponent} from './voter/voter.component';
import {AdminComponent} from './admin/admin.component';
const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'electionofficer-page', component: ElectionofficerComponent},
  {path: 'voter-page', component: VoterComponent},
  {path: 'admin-page', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
