import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ClientesService } from "./clientes.service";
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


@NgModule({
	declarations: [
		AltaClienteComponent,
		ListadoClientesComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		AltaClienteComponent
	],
	providers: [
		ClientesService
	]
})
export class ClientesModule { }
