import { Component, OnInit } from '@angular/core';
import { MiservicioService } from "../miservicio.service";

@Component({
	selector: 'app-usaservicio',
	templateUrl: './usaservicio.component.html',
	styleUrls: ['./usaservicio.component.css']
})
export class UsaservicioComponent implements OnInit {

	constructor(public miservicio: MiservicioService) { }

	ngOnInit(): void {
		console.log( this.miservicio );
	}

}
