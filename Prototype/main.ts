import { Pet, Pug, Beagle, PetAdoptionService } from './pets/index';

const pets = new PetAdoptionService();

pets.AddPet(new Pug('Alex'));
pets.AddPet(new Pug('Mini'));
pets.AddPet(new Pug('Nini'));

const adoptedPet = pets.createOne('Mini');

adoptedPet.setName('Milad');

pets.AddPet(adoptedPet.clone());
pets.AddPet(adoptedPet.clone());
pets.AddPet(adoptedPet.clone());
pets.AddPet(adoptedPet.clone());
pets.AddPet(new Beagle('Pizza'));

pets.getPets().forEach((pet: Pet) => console.log('pet: ', pet));
