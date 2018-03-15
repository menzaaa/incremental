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
  }

  // TODO: add upgrades to building and autoclick multiplier
  createBuilding(name) {
    this.buildingService.createBuilding(name);
  }
}
