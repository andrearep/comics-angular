import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ComicsComponent } from "./comics/comics.component";
import { LoginComponent } from "./login/login.component";
import { SettingComponent } from "./setting/setting.component";

const AppRoutes: Routes = [
  {path: '', redirectTo: 'comics', pathMatch: 'full'},
  {path: 'comics', component: ComicsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'setting', component: SettingComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
