import { Pet } from "./index";

export class PetAdoptionService {
	private dogs: Array<Pet>;
	constructor() {
		this.dogs = [];
	}

	AddPet(dog: Pet) {
		this.dogs.push(dog);
	}

	getPets(): Array<Pet> {
		return this.dogs;
	}

	createOne(name?: string, idx?: number): Pet {
		const clonedPet = this.dogs.find(dog => dog.name === name);
		if(clonedPet){
			return clonedPet.clone();
		}
		return;
	}
}