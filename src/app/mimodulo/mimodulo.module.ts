import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';		// Agregar para utilizar ngModel
import { MiservicioService } from './miservicio.service';
import { UsaservicioComponent } from './usaservicio/usaservicio.component';


@NgModule({
	declarations: [
		MicomponenteComponent,
		DirectivasComponent,
		UsaservicioComponent
	],
	imports: [
		CommonModule,
		FormsModule			// Agregar para utilizar ngModel
	],
	exports: [
		MicomponenteComponent,
		DirectivasComponent,
		UsaservicioComponent
	],
	providers: [
		MiservicioService
	]
})
export class MimoduloModule { }
