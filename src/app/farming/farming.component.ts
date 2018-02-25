import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
	selector: 'app-farming',
	templateUrl: './farming.component.html',
	styleUrls: ['./farming.component.css']
})
export class FarmingComponent implements OnInit {

	resources: Resource[];

	constructor(private resourceService: ResourceService) { }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		this.updateResources();
	}

	incrementResource(resource, amount) {
		this.resourceService.incrementResource(resource, amount);
	}

	updateResources() {
		setInterval(function(){
			
		}, 1000);
	}
}
