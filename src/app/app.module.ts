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

//Services
import { ResourceService } from './resource.service';
import { PlayerService } from './player.service';


@NgModule({
  declarations: [
    AppComponent,
    FarmingComponent,
    ShopComponent,
    CraftingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule
  ],
  providers: [ 
	ResourceService,
	PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
