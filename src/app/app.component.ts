import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	tituloPrincipal = 'Manual de Angular';

	tituloInicio = 'Hola Mundo en Angular !!!';

	adiosVisible = false;

	quien = 'Alvis';

	decirAdios() {
		this.adiosVisible = true;
	}

}
