import { Component, OnInit } from '@angular/core';

interface PreguntasInterface {
	pregunta: string;
	si: number;
	no: number;
}

@Component({
	selector: 'app-directivas',
	templateUrl: './directivas.component.html',
	styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

	// ngClass
	isMayus;
	isUline;
	isBorde;
	isFondo;

	// ngFor
	preguntas: string[] = [
		"¿España ganará la Euro 2016?",
		"¿Hará sol el día de mi boda?",
		"¿Estás aprendiendo Angular 2 en DesarrolloWeb?",
		"¿Has hecho ya algún curso en EscuelaIT?"
	];
	preguntasObj = [
		{
			pregunta: "¿España ganará la Euro 2016?",
			si: 22,
			no: 95
		},
		{
			pregunta: "¿Estás aprendiendo Angular 2 en DesarrolloWeb??",
			si: 262,
			no: 3
		},
		{
			pregunta: "¿Has hecho ya algún curso en EscuelaIT??",
			si: 1026,
			no: 1
		}
	];
	preguntasObj2: PreguntasInterface[] = [
		{
			pregunta: "¿Te gusta usar interfaces?",
			si: 72,
			no: 6
		}
	];

	constructor() { }

	ngOnInit(): void {
	}

}
