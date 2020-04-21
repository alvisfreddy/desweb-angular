import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		MicomponenteComponent,
		DirectivasComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		MicomponenteComponent,
		DirectivasComponent
	]
})
export class MimoduloModule { }
