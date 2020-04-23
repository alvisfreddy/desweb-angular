import { Component, OnInit } from '@angular/core';

import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

import { Observable } from 'rxjs';

@Component({
	selector: 'app-listado-clientes',
	templateUrl: './listado-clientes.component.html',
	styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

	clientes: Cliente[];

	clientes$: Observable<Cliente[]>;

	constructor(private clientesService: ClientesService) { }

	ngOnInit(): void {
		this.clientes$ = this.clientesService.getClientes$();
		this.clientes$.subscribe(clientes => this.clientes = clientes);
	}

	generarClientes(): void {
		this.clientesService.generarClientesDemo();
	}

}
