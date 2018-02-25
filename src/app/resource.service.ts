import { Injectable } from '@angular/core';
import { RESOURCES } from './mock-resources';
import { Resource } from './resource';

@Injectable()
export class ResourceService {

	resources: Resource[];

	constructor() {
		this.resources = RESOURCES;
	}

	getResources(): Resource[] {
		return this.resources;
	}

	setResources(resources): void {
		this.resources = resources;
	}

	incrementResource(resource, amount) {
		for (var i = 0; i < this.resources.length; ++i) {
			if(this.resources[i].name == resource)
				this.resources[i].amount = this.resources[i].amount + amount;
		}
	}


}
