import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directivas',
	templateUrl: './directivas.component.html',
	styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

	isMayus;
	isUline;
	isBorde;
	isFondo;

	constructor() { }

	ngOnInit(): void {
	}

}
