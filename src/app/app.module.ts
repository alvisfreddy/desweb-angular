import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

import { MimoduloModule } from './mimodulo/mimodulo.module';

@NgModule({
	declarations: [
		AppComponent,
		MiComponenteComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		MimoduloModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
