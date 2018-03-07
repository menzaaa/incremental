import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';


//Components
import { AppComponent } from './app.component';
import { FarmingComponent } from './farming/farming.component';
import { ShopComponent } from './shop/shop.component';
import { CraftingComponent } from './crafting/crafting.component';
import { BuildingComponent } from './building/building.component';

//Services
import { ResourceService } from './resource.service';
import { PlayerService } from './player.service';
import { MaterialService } from './material.service';
import { BuildingService } from './building.service';


@NgModule({
  declarations: [
    AppComponent,
    FarmingComponent,
    ShopComponent,
    CraftingComponent,
    BuildingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule
  ],
  providers: [
	ResourceService,
	PlayerService,
  MaterialService,
  BuildingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
