import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';


@Component({
	selector: 'app-resourses',
	templateUrl: './resourses.component.html',
	styleUrls: ['./resourses.component.css']
})
export class ResoursesComponent implements OnInit {
	wood: Resource = {
		id: 1,
		name: 'Wood',
		amount: 1
	};

	woodAutoClicker = 1;

	farmWood() {
		this.wood.amount++;
	}

	updateResources() {
		setInterval(()=> {
			this.wood.amount++
		}, 1000);
	}

	constructor() { }

	ngOnInit() {
		this.updateResources();
		console.log();
	}

}
