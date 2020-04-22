import { Component, OnInit } from '@angular/core';
import { ClientesService } from "./../clientes.service";
import { Cliente, Grupo } from "./../cliente.model";


@Component({
	selector: 'app-alta-cliente',
	templateUrl: './alta-cliente.component.html',
	styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

	constructor(private clientesService: ClientesService) { }

	ngOnInit(): void {
	}

}
