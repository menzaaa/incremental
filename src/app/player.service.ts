import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

	players: Player[];

	constructor() {
		this.players = PLAYERS;
	}

	getPlayer(){
		return this.players[0];
	}

	incrementGold(amount) {
		this.players[0].gold = this.players[0].gold + amount;
	}

}