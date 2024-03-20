import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PollTypeOptionComponent } from './poll-type-option/poll-type-option.component';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ProfileComponent } from './profile/profile.component';
import { AvailablePollComponent } from './available-poll/available-poll.component';
import { VotingPollComponent } from './voting-poll/voting-poll.component';
import { UserCreatedPollsComponent } from './user-created-polls/user-created-polls.component';
import { PollStatisticsComponent } from './poll-statistics/poll-statistics.component';
import { VotedPollsComponent } from './voted-polls/voted-polls.component';
import { UpdatePollComponent } from './update-poll/update-poll.component';
import { ExpiredPollComponent } from './expired-poll/expired-poll.component';

export const routes: Routes = [
    {path: 'login', component : LoginComponent} ,
    {path: 'newuser' , component : NewUserComponent} ,
    {path: 'home', component : HomeComponent , children : [
        {path : 'polloption' , component : PollTypeOptionComponent , children : [
            {path : 'available-polls' , component : AvailablePollComponent} ,
            {path : 'created-polls',component : UserCreatedPollsComponent},
            {path : 'voted-polls',component : VotedPollsComponent}
        ] } ,
        {path : 'createpoll' , component : CreatePollComponent} ,
        {path : 'votingpoll' , component : VotingPollComponent} ,
        {path : 'updatepoll' , component : UpdatePollComponent} ,
        {path : 'expiredpoll' , component : ExpiredPollComponent} ,
        {path : 'account',component : ProfileComponent} ,
        {path : 'showStats' , component : PollStatisticsComponent} ,
        {path:'',redirectTo:'polloption',pathMatch:'full'},
    ]} ,
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
