import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ClientesService {

	private clientes: Cliente[];
	private grupos: Grupo[];

	private clientes$ = new Subject<Cliente[]>();

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

	getClientes$(): Observable<Cliente[]> {
		return this.clientes$.asObservable();
	}

	agregarCliente(cliente: Cliente) {
		this.clientes.push(cliente);
		this.clientes$.next(this.clientes);
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

	borrarCliente(cliente: Cliente): void {
		for (let i = 0; i < this.clientes.length; i++) {
			if( cliente === this.clientes[i]) {
				this.clientes.splice(i, 1);
				break;
			}
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
		this.clientes$.next(this.clientes);
	}

}
