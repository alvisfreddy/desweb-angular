import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
	providedIn: 'root'
})
export class ClientesService {

	private clientes: Cliente[];
	private grupos: Grupo[];

	constructor() {
		this.grupos = [
			{id: 0, nombre: 'Sin definir'},
			{id: 1, nombre: 'Activos' },
			{id: 2, nombre: 'Inactivos' },
			{id: 3, nombre: 'Deudores' }
		];
		this.clientes = [];
	}
}
