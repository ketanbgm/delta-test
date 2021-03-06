import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthManager} from './authmanager';
import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { AccountingJsComponent } from './plugins/accounting-js';
import { AlertsComponent } from './notifications/alerts';
import { AngularCliComponent } from './documentation/angular-cli';
import { AnimationDelaysComponent } from './extras/animation-delays';
import { AvatarsComponent } from './extras/avatars';
import { BackdropsComponent } from './elements/backdrops';
import { BadgesComponent } from './ui-elements/badges';
import { BreadcrumbsComponent } from './ui-elements/breadcrumbs';
import { ButtonsComponent } from './ui-elements/buttons';
import { ChangelogComponent } from './documentation/changelog';
import { ChartistComponent } from './charts/chartist';
import { CodeStructureComponent } from './documentation/code-structure';
import { ComingSoonComponent } from './pages/coming-soon';
import { ContactUsComponent } from './pages/contact-us';
import { CreateAccountComponent } from './pages/create-account';
import { CreditsComponent } from './documentation/credits';
import { CustomizationComponent } from './documentation/customization';
import { DashboardComponent } from './dashboards/dashboard';
import { DatatableComponent } from './tables/datatable';
import { DefaultFormsComponent } from './forms/default-forms';
import { ValidationComponent } from './forms/validation';
import { StepsComponent } from './forms/steps';
import { DefaultTablesComponent } from './tables/default-tables';
import { DropdownsComponent } from './ui-elements/dropdowns';
import { EasyPieChartComponent } from './charts/easy-pie-chart';
import { EmptyPageComponent } from './pages/empty-page';
import { ErrorPageComponent } from './pages/error-page';
import { FileUploadsComponent } from './forms/file-uploads';
import { FlagsComponent } from './icons/flags';
import { FontAwesomeComponent } from './icons/font-awesome';
import { GoogleMapsComponent } from './maps/google-maps';
import { ImagesComponent } from './ui-elements/images';
import { InstallationComponent } from './documentation/installation';
import { IoniconsComponent } from './icons/ionicons';
import { JqueryTreegridComponent } from './tables/jquery-treegrid';
import { Jumbotron1Component } from './elements/jumbotron-1';
import { Jumbotron2Component } from './elements/jumbotron-2';
import { LayoutComponent } from './documentation/layout';
import { LeftSidebar1Component } from './elements/left-sidebar-1';
import { ListsComponent } from './ui-elements/lists';
import { LoginComponent } from './pages/login';
import { MaterialDesignIconsComponent } from './icons/material-design-icons';
import { ModalsComponent } from './notifications/modals';
import { MomentJsComponent } from './plugins/moment-js';
import { MorrisJsComponent } from './charts/morris-js';
import { Navbar1Component } from './elements/navbar-1';
import { Nvd3Component } from './charts/nvd3';
import { PaginationComponent } from './ui-elements/pagination';
import { PeityComponent } from './charts/peity';
import { PopoversComponent } from './notifications/popovers';
import { ProgressBarsComponent } from './ui-elements/progress-bars';
import { ResetPasswordComponent } from './pages/reset-password';
import { RightSidebar1Component } from './elements/right-sidebar-1';
import { SampleModalsComponent } from './elements/sample-modals';
import { SimpleLineIconsComponent } from './icons/simple-line-icons';
import { SlidersComponent } from './forms/sliders';
import { SocialMediaButtonsComponent } from './ui-elements/social-media-buttons';
import { StylesComponent } from './documentation/styles';
import { SubscribeComponent } from './pages/subscribe';
import { TableExportComponent } from './tables/table-export';
import { TabsComponent } from './ui-elements/tabs';
import { TooltipsComponent } from './notifications/tooltips';
import { TopNavigation1Component } from './elements/top-navigation-1';
import { TopNavigation2Component } from './elements/top-navigation-2';
import { TypographyComponent } from './ui-elements/typography';
import { UnderMaintenanceComponent } from './pages/under-maintenance';
import { UnlockAccountComponent } from './pages/unlock-account';
import { UserProfileComponent } from './pages/user-profile';
import { VectorMapsComponent } from './maps/vector-maps';
import { WeatherIconsComponent } from './icons/weather-icons';
import { CalendarComponent } from './apps/calendar';
import { SweetAlert2Component } from './notifications/sweet-alert-2';
import { ToastrComponent } from './notifications/toastr';
import { MyComponentComponent } from './my-component/my-component.component';
import  { AuthService } from './auth.service';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SweetAlert2Component,
    ToastrComponent,
    AccountingJsComponent,
    AlertsComponent,
    AngularCliComponent,
    AnimationDelaysComponent,
    AvatarsComponent,
    BackdropsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    ChangelogComponent,
    ChartistComponent,
    CodeStructureComponent,
    ComingSoonComponent,
    ContactUsComponent,
    CreateAccountComponent,
    CreditsComponent,
    CreditsComponent,
    CustomizationComponent,
    DashboardComponent,
    DatatableComponent,
    DefaultFormsComponent,
    ValidationComponent,
    StepsComponent,
    DefaultTablesComponent,
    DropdownsComponent,
    EasyPieChartComponent,
    EmptyPageComponent,
    ErrorPageComponent,
    FileUploadsComponent,
    FlagsComponent,
    FontAwesomeComponent,
    GoogleMapsComponent,
    ImagesComponent,
    InstallationComponent,
    IoniconsComponent,
    JqueryTreegridComponent,
    Jumbotron1Component,
    Jumbotron2Component,
    LayoutComponent,
    LeftSidebar1Component,
    ListsComponent,
    LoginComponent,
    MaterialDesignIconsComponent,
    ModalsComponent,
    MomentJsComponent,
    MorrisJsComponent,
    Navbar1Component,
    Nvd3Component,
    PaginationComponent,
    PeityComponent,
    PopoversComponent,
    ProgressBarsComponent,
    ResetPasswordComponent,
    RightSidebar1Component,
    SampleModalsComponent,
    SimpleLineIconsComponent,
    SlidersComponent,
    SocialMediaButtonsComponent,
    StylesComponent,
    SubscribeComponent,
    TableExportComponent,
    TabsComponent,
    TooltipsComponent,
    TopNavigation1Component,
    TopNavigation2Component,
    TypographyComponent,
    UnderMaintenanceComponent,
    UnlockAccountComponent,
    UserProfileComponent,
    VectorMapsComponent,
    WeatherIconsComponent,
    MyComponentComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'apps/dashboard', component: DashboardComponent ,canActivate: [AuthManager]},
      { path: 'apps/calendar', component: CalendarComponent, canActivate: [AuthManager] },
      { path: 'apps/list-user', component: ListUserComponent, canActivate: [AuthManager] },
      { path: 'notifications/sweet-alert-2', component: SweetAlert2Component },
      { path: 'notifications/toastr', component: ToastrComponent },
      { path: 'charts/chartist', component: ChartistComponent },
      { path: 'charts/easy-pie-chart', component: EasyPieChartComponent },
      { path: 'charts/morris-js', component: MorrisJsComponent },
      { path: 'charts/nvd3', component: Nvd3Component },
      { path: 'charts/peity', component: PeityComponent },
      // { path: 'dashboards/dashboard', component: DashboardComponent },
      { path: 'documentation/angular-cli', component: AngularCliComponent },
      { path: 'documentation/changelog', component: ChangelogComponent },
      { path: 'documentation/code-structure', component: CodeStructureComponent },
      { path: 'documentation/credits', component: CreditsComponent },
      { path: 'documentation/customization', component: CustomizationComponent },
      { path: 'documentation/installation', component: InstallationComponent },
      { path: 'documentation/layout', component: LayoutComponent },
      { path: 'documentation/styles', component: StylesComponent },
      { path: 'extras/animation-delays', component: AnimationDelaysComponent },
      { path: 'extras/avatars', component: AvatarsComponent },
      { path: 'forms/validation', component: ValidationComponent },
      { path: 'forms/steps', component: StepsComponent },
      { path: 'forms/default-forms', component: DefaultFormsComponent },
      { path: 'forms/file-uploads', component: FileUploadsComponent },
      { path: 'forms/sliders', component: SlidersComponent },
      { path: 'icons/flags', component: FlagsComponent },
      { path: 'icons/font-awesome', component: FontAwesomeComponent },
      { path: 'icons/ionicons', component: IoniconsComponent },
      { path: 'icons/material-design-icons', component: MaterialDesignIconsComponent },
      { path: 'icons/simple-line-icons', component: SimpleLineIconsComponent },
      { path: 'icons/weather-icons', component: WeatherIconsComponent },
      { path: 'maps/google-maps', component: GoogleMapsComponent },
      { path: 'maps/vector-maps', component: VectorMapsComponent },
      { path: 'notifications/alerts', component: AlertsComponent },
      { path: 'notifications/modals', component: ModalsComponent },
      { path: 'notifications/popovers', component: PopoversComponent },
      { path: 'notifications/tooltips', component: TooltipsComponent },
      { path: 'pages/coming-soon', component: ComingSoonComponent },
      { path: 'pages/contact-us', component: ContactUsComponent },
      { path: 'pages/create-account', component: CreateAccountComponent },
      { path: 'pages/empty-page', component: EmptyPageComponent },
      { path: 'pages/error-page', component: ErrorPageComponent },
      { path: '', component: LoginComponent },
      { path: 'pages/reset-password', component: ResetPasswordComponent, canActivate: [AuthManager] },
      { path: 'pages/subscribe', component: SubscribeComponent },
      { path: 'pages/under-maintenance', component: UnderMaintenanceComponent },
      { path: 'pages/unlock-account', component: UnlockAccountComponent },
      { path: 'pages/user-profile', component: UserProfileComponent, canActivate: [AuthManager]  },
      { path: 'plugins/accounting-js', component: AccountingJsComponent },
      { path: 'plugins/moment-js', component: MomentJsComponent },
      { path: 'tables/datatable', component: DatatableComponent },
      { path: 'tables/default-tables', component: DefaultTablesComponent },
      { path: 'tables/jquery-treegrid', component: JqueryTreegridComponent },
      { path: 'tables/table-export', component: TableExportComponent },
      { path: 'ui-elements/badges', component: BadgesComponent },
      { path: 'ui-elements/breadcrumbs', component: BreadcrumbsComponent },
      { path: 'ui-elements/buttons', component: ButtonsComponent },
      { path: 'ui-elements/dropdowns', component: DropdownsComponent },
      { path: 'ui-elements/images', component: ImagesComponent },
      { path: 'ui-elements/lists', component: ListsComponent },
      { path: 'ui-elements/pagination', component: PaginationComponent },
      { path: 'ui-elements/progress-bars', component: ProgressBarsComponent },
      { path: 'ui-elements/social-media-buttons', component: SocialMediaButtonsComponent },
      { path: 'ui-elements/tabs', component: TabsComponent },
      { path: 'ui-elements/typography', component: TypographyComponent },
      { path: '**', component: ErrorPageComponent },

      {path: '*path', component: ErrorPageComponent}
    ])
  ],
  providers: [GetDataService, AuthService, AuthManager],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
