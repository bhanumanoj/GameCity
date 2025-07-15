import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  games;
amount;
constructor(private route: ActivatedRoute,private gs: ServiceService) {
route.params.subscribe((parameters)=>this.amount=parameters['amt'])
gs.getAll().subscribe((res)=>this.games=res)
 }
  ngOnInit() {
  }

}
