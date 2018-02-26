import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { PlayerService } from '../player.service';
import { BuildingService } from '../building.service';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  buildings: Building[];
  player;

  constructor(private resourceService : ResourceService,
              private buildingService : BuildingService,
              private playerService   : PlayerService) { }

  ngOnInit() {
    this.buildings = this.buildingService.getBuildings();
    this.player = this.playerService.getPlayer();

    for (let i = 0; i < this.buildings.length; i++) {
      if(this.buildings[i].bought)
        this.autoFarm(this.buildings[i].resource);
    }
  }

  // TODO: add upgrades to building and autoclick multiplier
  makeBuilding(name, resource) {
    this.buildingService.makeBuilding(name);
    this.autoFarm(resource);
  }

  incrementResource(resource, amount) {
      this.resourceService.incrementResource(resource, amount);
  }

  autoFarm(resource) {
    setInterval(() => this.incrementResource(resource, 1), 1000);
  }

}
