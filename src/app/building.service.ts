import { Injectable } from '@angular/core';
import { Building } from './building';
import { BUILDINGS } from './mock-buildings';
import { ResourceService } from './resource.service';

@Injectable()
export class BuildingService {

  buildings: Building[];

  constructor() {
    this.buildings = BUILDINGS;
  }

  getBuildings() {
    return this.buildings;
  }

  setBuildings(buildings): void {
    this.buildings = buildings;
  }

  // TODO: add cost to build
  createBuilding(name) {
    var objIndex = this.buildings.findIndex((obj => obj.name == name));
      if(this.buildings[objIndex].name == name)
        this.buildings[objIndex].bought = true;
  }


}
