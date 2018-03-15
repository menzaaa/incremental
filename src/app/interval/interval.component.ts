import { Component, OnInit } from '@angular/core';

import { Building } from '../building';
import { BuildingService } from '../building.service';

import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

import { Material } from '../material';
import { MaterialService } from '../material.service';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
	selector: 'app-interval',
	templateUrl: './interval.component.html',
	styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

	resources: Resource[];
	materials: Material[];
	buildings: Building[];
	player;

	constructor(
		private resourceService : ResourceService,
		private materialService: MaterialService,
		private buildingService : BuildingService,
		private playerService : PlayerService
	) { }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		this.materials = this.materialService.getMaterials();
		this.buildings = this.buildingService.getBuildings();
		this.player = this.playerService.getPlayer();
		this.buildingsInterval();
	}

	buildingsInterval() {
		for (var i = 0; i < this.buildings.length; ++i) {
			this.setResourceInterval(this.buildings[i].resource, this.buildings[i].lvl);
		}
	}

	setResourceInterval(resource, lvl) {
		setInterval(() => this.resourceService.incrementResource(resource, (1 * lvl)), 500)
		// setInterval()
	}


}
