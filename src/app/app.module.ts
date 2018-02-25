import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ResourceService } from './resource.service';
import { PlayerService } from './player.service';
import { FarmingComponent } from './farming/farming.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmingComponent,
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
