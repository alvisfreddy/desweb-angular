import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesService } from "./clientes.service";
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ItemClienteComponent } from './item-cliente/item-cliente.component';


@NgModule({
	declarations: [
		AltaClienteComponent,
		ListadoClientesComponent,
		ItemClienteComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		AltaClienteComponent,
		ListadoClientesComponent
	],
	providers: [
		ClientesService
	]
})
export class ClientesModule { }
