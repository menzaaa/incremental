import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { RESOURCES } from '../mock-resources';
import { ResourceService } from '../resource.service';


@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

	// woodAutoClicker = 1;

	// incrementWood($amount){
	// 	//increment wood
	// }

	// updateResources() {
	// 	setInterval(()=> {
	// 		this.wood.amount = this.wood.amount + this.woodAutoClicker
	// 	}, 1000);
	// }
	resources: Resource[];
	wood;

	constructor(private resourceService: ResourceService) { }

	getResources(): void {
		this.resources = this.resourceService.getResources();
	}

	setResources(): void {
		this.resourceService.setResources(this.resources);
	}

	findResources(name) {
		return this.resources.filter(resource => resource.name === name)[0];
	}

	ngOnInit() {
		this.getResources();
		this.wood = this.findResources('wood');
		console.log(this.wood);
		//this.resources.filter(resource => resource.name === name)[0] = 'stone';
		//console.log(this.resources.filter(resource => resource['wood'] === 'wood')[0]);
		// this.updateResources();
	}

}