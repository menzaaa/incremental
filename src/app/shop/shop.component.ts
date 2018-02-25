import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	resources: Resource[];
	player;

	sellValue;

	constructor(private resourceService: ResourceService, private playerService: PlayerService) {  }

	ngOnInit() {
		this.resources = this.resourceService.getResources();
		this.player = this.playerService.getPlayer();
	}

	sellResource(name, amount){
		if(this.resourceService.decrementResource(name, amount)){
			for (var i = 0; i < this.resources.length; ++i) {
				this.sellValue = (this.resources[i].name == name ? this.resources[i].value : 1)
			}
			this.playerService.incrementGold(this.sellValue);
		}
	}

}
