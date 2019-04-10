import { SolicitudService } from './../solicitud.service';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../app-routing.module";
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

paises:any[];
constructor (private ServicioPaises:SolicitudService){}

ngOnInit() {
  
  this.ServicioPaises.getpaises().subscribe( data => {
    this.paises = data;
    console.log(this.paises);
  } )
}

}
