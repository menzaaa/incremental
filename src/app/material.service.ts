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

	getMaterials(){
		return this.materials;
	}

}
