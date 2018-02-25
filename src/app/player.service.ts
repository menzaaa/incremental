import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

	players: Player[];

	constructor() {
		this.players = PLAYERS;
	}

	getPlayers(): Players[]{
		return this.players;
	}

}