import { Resource } from './resource';

export class Material {
	name: string;
	exp: number;
	requirements: Resource[];
	value: number;
	amount: number;
}