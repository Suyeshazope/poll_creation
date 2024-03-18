import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PollTypeOptionComponent } from './poll-type-option/poll-type-option.component';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ProfileComponent } from './profile/profile.component';
import { AvailablePollComponent } from './available-poll/available-poll.component';

export const routes: Routes = [
    {path: 'login', component : LoginComponent} ,
    {path: 'newuser' , component : NewUserComponent} ,
    {path: 'home', component : HomeComponent , children : [
        {path : 'polloption' , component : PollTypeOptionComponent , children : [
            {path : 'available-polls' , component : AvailablePollComponent}
        ] } ,
        {path : 'createpoll' , component : CreatePollComponent} ,
        {path : 'account',component : ProfileComponent} ,
        {path:'',redirectTo:'polloption',pathMatch:'full'},
    ]} ,
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
