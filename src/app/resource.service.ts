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
		var objIndex = this.resources.findIndex((obj => obj.name == resource));
		this.resources[objIndex].amount = this.resources[objIndex].amount + amount;
	}

	decrementResource(resource, amount) {
		var objIndex = this.resources.findIndex((obj => obj.name == resource));
		if(this.resources[objIndex].amount >= amount){
			this.resources[objIndex].amount = this.resources[objIndex].amount - amount;
			return true;
		}else
		{
			//not enough resources
			return false;
		}
	}
}
