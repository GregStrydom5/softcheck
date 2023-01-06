import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LogoutComponent } from "../components/auth/logout/logout.component";
import { LoginComponent } from "../components/auth/login/page/login.component";
import { RegisterComponent } from "../components/auth/register/register.component";
import { ConnectSelectComponent } from "../components/connect-select/connect-select.component";
import { ImmerseSelectComponent } from "../components/immerse-select/immerse-select.component";
import { SectionDetailsComponent } from "../components/section-details/section-details.component";
import { IssuesViewComponent } from "../components/issues-view/issues-view.component";
import { UserComponent } from '../components/user/user.component';
import { CreateChecksheetComponent } from '../components/checksheet/create-checksheet/create-checksheet.component';
import { ViewChecksheetComponent } from '../components/checksheet/view-checksheet/view-checksheet.component';

import { AuthGuard } from '../services/auth.guard';
import { PlatformSelectComponent } from "../components/platform-select/platform-select.component";
import { TestImmerseLauncherComponent } from "../components/immersections/test-immerse-launcher/test-immerse-launcher.component";
import { AddSectionNoteComponent } from '../components/shared/add-section-note/add-section-note.component';
import { ViewConnectSectionNoteComponent } from "../components/shared/view-connect-section-note/view-connect-section-note.component";
import { SectionTemplateComponent } from '../components/shared/section-template/section-template.component';
import { ForgotpasswordComponent } from "../components/auth/forgotpassword/forgotpassword.component";

const routes: Routes = [
  { path: '', component: LoginComponent},

  // Welcome
  // { path: 'welcome', component: WelcomeComponent},

  // Auth
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },

  // Home
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  // Testing selection
  { path: 'test-checksheet/:id', component: PlatformSelectComponent, canActivate: [AuthGuard]},
  { path: 'connect-select/:id', component: ConnectSelectComponent, canActivate: [AuthGuard]},
  { path: 'immerse-select/:id', component: ImmerseSelectComponent, canActivate: [AuthGuard]},

  // Connect Sections
  { path: 'test-connect/:id/registration/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/companysetup/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/eventcreation/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/boothsetup/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/chatboxes/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/lobby/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/networking/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},
  { path: 'test-connect/:id/sessions/:num', component: SectionTemplateComponent, canActivate: [AuthGuard]},

  // Connect section notes
  { path: 'add-note/connectsection-test/:id', component: AddSectionNoteComponent, canActivate: [AuthGuard] },
  { path: 'view-notes/connectsection-test/:id', component: ViewConnectSectionNoteComponent, canActivate: [AuthGuard] },

  // Immerse sections
  { path: 'test-immerse-launcher', component: TestImmerseLauncherComponent, canActivate: [AuthGuard]},

  // Details
  { path: 'section-details', component: SectionDetailsComponent, canActivate: [AuthGuard]},

  // Issues
  { path: 'issues-view', component: IssuesViewComponent, canActivate: [AuthGuard]},

  // Profile
  { path: 'profile/:id', component: UserComponent, canActivate: [AuthGuard]},

  // Check sheet
  { path: 'create-checksheet', component: CreateChecksheetComponent, canActivate: [AuthGuard]},
  { path: 'view-checksheet/:id', component: ViewChecksheetComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
