import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaservicioComponent } from './usaservicio.component';

describe('UsaservicioComponent', () => {
	let component: UsaservicioComponent;
	let fixture: ComponentFixture<UsaservicioComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UsaservicioComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UsaservicioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
