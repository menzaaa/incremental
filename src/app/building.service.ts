import { Injectable } from '@angular/core';
import { Building } from './building';
import { BUILDINGS } from './mock-buildings'

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
    this.buildings =  buildings;
  }

  makeBuilding(name) {
    for (var i = 0; i < this.buildings.length; i++){
      if(this.buildings[i].name == name)
        this.buildings[i].bought = true;
    }
  }

}
