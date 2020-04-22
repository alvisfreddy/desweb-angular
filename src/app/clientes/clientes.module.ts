import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ClientesService } from "./clientes.service";
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';


@NgModule({
	declarations: [AltaClienteComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	providers: [
		ClientesService
	]
})
export class ClientesModule { }
