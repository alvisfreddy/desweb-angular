import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Hola Mundo en Angular !!!';

	titulo = 'Manual de Angular de DesarrolloWeb.com';

	visible = false;

	decirAdios() {
		this.visible = true;
	}
}
