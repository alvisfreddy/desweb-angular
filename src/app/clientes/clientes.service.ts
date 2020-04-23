import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
	providedIn: 'root'
})
export class ClientesService {

	private clientes: Cliente[];
	private grupos: Grupo[];

	constructor() {
		this.grupos = [
			{ id: 0, nombre: 'Sin definir' },
			{ id: 1, nombre: 'Activos' },
			{ id: 2, nombre: 'Inactivos' },
			{ id: 3, nombre: 'Deudores' }
		];
		this.clientes = [];
	}

	getGrupos(): Grupo[] {
		return this.grupos;
	}

	getClientes(): Cliente[] {
		return this.clientes;
	}

	agregarCliente(cliente: Cliente) {
		this.clientes.push(cliente);
	}

	nuevoCliente(): Cliente {
		return {
			id: this.clientes.length,
			nombre: '',
			ci: '',
			direccion: '',
			grupo: 0
		}
	}

	generarClientesDemo(): void {
		this.clientes.push({
			id: this.clientes.length,
			nombre: 'Alvis Tuna',
			ci: '112233',
			direccion: 'Calle A S/N',
			grupo: 1
		});
		this.clientes.push({
			id: this.clientes.length,
			nombre: 'Freddy Mamani',
			ci: '14253',
			direccion: 'Calle A S/N',
			grupo: 1
		});
	}

}
