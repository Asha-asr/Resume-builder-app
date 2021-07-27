import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ResumemanagerComponent } from './resumemanager/resumemanager.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';
import { BlogcreationComponent } from './blogcreation/blogcreation.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    MailboxComponent,
    ResumemanagerComponent,
    UsermanagerComponent,
    BlogcreationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
