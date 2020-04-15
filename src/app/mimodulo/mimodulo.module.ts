import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';


@NgModule({
	declarations: [
		MicomponenteComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MicomponenteComponent
	]
})
export class MimoduloModule { }
