import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/auth/login/page/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChecksheetComponent } from './components/checksheet/checksheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConnectSelectComponent } from './components/connect-select/connect-select.component';
import { ImmerseSelectComponent } from './components/immerse-select/immerse-select.component';
import { IssuesViewComponent } from './components/issues-view/issues-view.component';
import { NavbarComponent } from './components/ui/shared/navbar/navbar.component';
import { RoutingModule } from './routing/routing.module';

import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";

import { LogoutComponent } from './components/auth/logout/logout.component';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { appReducer } from "./app.reducer";
import { SectionDetailsComponent } from './components/section-details/section-details.component';
import { SectionTitleComponent } from './components/section-details/section-title/section-title.component';
import { SectionRowsComponent } from './components/section-details/section-rows/section-rows.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "../environments/environment";
import { SectionButtonsComponent } from './components/section-details/section-buttons/section-buttons.component';
import { UploaderComponent } from './components/ui/shared/uploader/uploader.component';
import { DashboardMonthRowsComponent } from './components/dashboard/dashboard-month-rows/dashboard-month-rows.component';
import { SectionDetailsInfoDialogComponent } from './components/section-details/section-details-info-dialog/section-details-info-dialog.component';
import { DashboardChecksheetDetailsComponent } from './components/dashboard/dashboard-checksheet-details/dashboard-checksheet-details.component';

import { MaterialModule } from "./material.module";
import { CreateChecksheetComponent } from './components/checksheet/create-checksheet/create-checksheet.component';
import { EditChecksheetComponent } from './components/checksheet/edit-checksheet/edit-checksheet.component';
import { DeleteChecksheetComponent } from './components/checksheet/delete-checksheet/delete-checksheet.component';
import { UserSheetsviewComponent } from './components/user/user-sheetsview/user-sheetsview.component';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatSelectModule } from "@angular/material/select";
import { ViewChecksheetComponent } from './components/checksheet/view-checksheet/view-checksheet.component';
import { DashboardSelectComponent } from './components/dashboard/dashboard-select/dashboard-select.component';
import { PlatformSelectComponent } from './components/platform-select/platform-select.component';
import { TestImmerseLauncherComponent } from './components/immersections/test-immerse-launcher/test-immerse-launcher.component';
import { TestConnectRegistrationComponent } from './components/connectsections/test-connect-registration/test-connect-registration.component';
import { SectionTemplateComponent } from './components/shared/section-template/section-template.component';
import { SectionTemplateImmerseComponent } from './components/shared/section-template-immerse/section-template-immerse.component';
import { AddSectionNoteComponent } from './components/shared/add-section-note/add-section-note.component';
import { ViewConnectSectionNoteComponent } from './components/shared/view-connect-section-note/view-connect-section-note.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChecksheetComponent,
    ConnectSelectComponent,
    ImmerseSelectComponent,
    IssuesViewComponent,
    NavbarComponent,
    LogoutComponent,
    SectionDetailsComponent,
    SectionTitleComponent,
    SectionRowsComponent,
    SectionButtonsComponent,
    UploaderComponent,
    DashboardMonthRowsComponent,
    SectionDetailsInfoDialogComponent,
    DashboardChecksheetDetailsComponent,
    CreateChecksheetComponent,
    EditChecksheetComponent,
    DeleteChecksheetComponent,
    UserSheetsviewComponent,
    ViewChecksheetComponent,
    DashboardSelectComponent,
    PlatformSelectComponent,
    TestImmerseLauncherComponent,
    TestConnectRegistrationComponent,
    SectionTemplateComponent,
    SectionTemplateImmerseComponent,
    AddSectionNoteComponent,
    ViewConnectSectionNoteComponent,
    ForgotpasswordComponent,
  ],
    imports: [
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        FlexModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ui: appReducer}),
        HttpClientModule,
        MatSelectModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatCheckboxModule
    ],
  // providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [DashboardSelectComponent]
})
export class AppModule { }
