import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { DirectivasComponent } from './directivas/directivas.component';


@NgModule({
	declarations: [
		MicomponenteComponent,
		DirectivasComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MicomponenteComponent,
		DirectivasComponent
	]
})
export class MimoduloModule { }
