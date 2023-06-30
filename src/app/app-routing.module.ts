import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-entries', component: ViewEntriesComponent },
  { path: 'add-entry', component: AddEntryComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
