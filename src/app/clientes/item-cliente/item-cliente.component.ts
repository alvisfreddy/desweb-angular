import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Cliente } from './../cliente.model';

@Component({
	selector: 'app-item-cliente',
	templateUrl: './item-cliente.component.html',
	styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

	@Input()
	cliente: Cliente;

	@Output()
	borrarCliente = new EventEmitter<Cliente>();

	constructor() { }

	ngOnInit(): void {
	}

	onBorrarCliente() {
		this.borrarCliente.emit(this.cliente);
	}

}
