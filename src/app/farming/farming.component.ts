import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
	selector: 'app-farming',
	templateUrl: './farming.component.html',
	styleUrls: ['./farming.component.css']
})
export class FarmingComponent implements OnInit {

	resources: Resource[];
	players: Player[];

	constructor(private resourceService: ResourceService, private playerService: PlayerService) { }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		//take first player
		this.players = this.playerService.getPlayers();
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
