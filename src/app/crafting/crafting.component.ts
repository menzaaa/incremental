import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Material } from '../material';
import { MaterialService } from '../material.service';

@Component({
	selector: 'app-crafting',
	templateUrl: './crafting.component.html',
	styleUrls: ['./crafting.component.css']
})
export class CraftingComponent implements OnInit {

	resources: Resource[];
	player;
	materials: Material[];

	constructor(
		private resourceService: ResourceService,
		private playerService: PlayerService,
		private materialService: MaterialService
	) { }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		this.player = this.playerService.getPlayer();
		this.materials = this.materialService.getMaterials();
	}

	craftMaterial(name, amount) {
		var objIndex = this.materials.findIndex((obj => obj.name == name));
		let canCraft = true;
		for(let resource of this.materials[objIndex].requirements){
			if(!this.resourceService.hasResource(resource.name, resource.amount))
			{
				canCraft = false;
			}
		}
		if(canCraft)
		{
			for(let resource of this.materials[objIndex].requirements){
				this.resourceService.decrementResource(resource.name, resource.amount);
			}
			this.materialService.incrementMaterial(name, amount);
		}
	}
}
