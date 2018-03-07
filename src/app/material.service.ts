import { Injectable } from '@angular/core';
import { MATERIALS } from './mock-material';
import { Material } from './material';
import { Resource } from './resource';

@Injectable()
export class MaterialService {

	materials: Material[];

	constructor() {
		this.materials = MATERIALS;
	}

	getMaterials() {
		return this.materials;
	}

	incrementMaterial(name, amount) {
		var objIndex = this.materials.findIndex((obj => obj.name == name));
		this.materials[objIndex].amount = this.materials[objIndex].amount + amount;
	}

}
