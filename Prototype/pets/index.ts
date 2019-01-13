export { PetAdoptionService } from './PetAdoptionService';

export abstract class Pet {
	name: string;
	abstract getName(): string;
	abstract setName(name: string): void;
	abstract clone(): Pet;
}

export class Pug implements Pet {
	name: string = "pug";
	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	clone(): Pet {
		return new Pug(this.name);
	}
}

export class Beagle implements Pet {
	name: string = "beagle";
	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	clone(): Pet {
		return new Beagle(this.name);
	}
}

