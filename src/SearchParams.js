import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown(
    'Breed',
    'Samoyed',
    breeds
  );

  useEffect(() => {
    // pet.breeds('dog').then(console.log, console.error);
    setBreeds([]); // Clear out previous selections
    setBreed(''); // Clear out previous selections

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrs = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrs);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
