import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';
import { BlogcreationComponent } from './blogcreation/blogcreation.component';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ResumemanagerComponent } from './resumemanager/resumemanager.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';

const routes: Routes = [
                        {path:'', redirectTo: 'home', pathMatch: 'full'},
                        {path:'home',component:HomeComponent},
                        {path:'admin-dashboard',component:AdminDashboardComponent},
                        {path:'inbox',component:MailboxComponent},
                        {path:'manage-resumes',component:ResumemanagerComponent},
                        {path:'manage-users',component:UsermanagerComponent},
                        {path:'add-blog',component:BlogcreationComponent},

                      ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
