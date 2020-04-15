import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Hola Mundo en Angular !!!';

	titulo = 'Manual de Angular';

	visible = false;

	quien = 'Alvis';

	decirAdios() {
		this.visible = true;
	}

}
