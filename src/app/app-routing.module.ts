import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
  {path:'',component:GameComponent},
  {path:'proceed/:amt', component:PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
