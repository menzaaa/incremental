import { Material } from './material';
import { Resource } from './resource';

export const MATERIALS: Material[] = [
	{ 
		name: 'planks', 
		exp: 1, 
		requirements: [
			{ id: 1, name: 'wood', amount: 5, value: 0 }
			{ id: 2, name: 'stone', amount: 5, value: 0 }
		],
		value: 6,
		amount: 0
	}
]