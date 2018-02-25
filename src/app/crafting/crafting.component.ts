import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
	selector: 'app-crafting',
	templateUrl: './crafting.component.html',
	styleUrls: ['./crafting.component.css']
})
export class CraftingComponent implements OnInit {

	resources: Resource[];
	player;

	constructor(private resourceService: ResourceService, private playerService: PlayerService) { }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		this.player = this.playerService.getPlayer();
	}

}
