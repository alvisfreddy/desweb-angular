import { Component, OnInit, OnDestroy } from '@angular/core';

import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-listado-clientes',
	templateUrl: './listado-clientes.component.html',
	styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

	clientes: Cliente[] = [];

	clientes$: Observable<Cliente[]>;

	clientesSubscription: Subscription;

	constructor(private clientesService: ClientesService) { }

	ngOnInit(): void {
		this.clientes$ = this.clientesService.getClientes$();
		this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
	}

	ngOnDestroy(): void {
		this.clientesSubscription.unsubscribe();
	}

	generarClientes(): void {
		this.clientesService.generarClientesDemo();
	}

	doBorrarCliente(cliente: Cliente) {
		this.clientesService.borrarCliente(cliente);
	}

}
