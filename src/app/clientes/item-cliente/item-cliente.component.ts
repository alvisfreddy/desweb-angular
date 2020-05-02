import { Component, OnInit, Input } from '@angular/core';

import { Cliente } from './../cliente.model';

@Component({
	selector: 'app-item-cliente',
	templateUrl: './item-cliente.component.html',
	styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

	@Input()
	cliente: Cliente;

	constructor() { }

	ngOnInit(): void {
	}

}
