import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState('Samoyed');
  const [breeds, setBreeds] = useState([]);
  return (
    <div className="search-params">
      <h1>{location}</h1>
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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onBlur={(e) => setAnimal(e.target.value)}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
          <label htmlFor="breed">
            <select
              id="breed"
              value={breed}
              onBlur={(e) => setBreed(e.target.value)}
              onChange={(e) => setBreed(e.target.value)}
              disabled={!breeds.length}
            >
              <option>All</option>
              {breeds.map((breedStr) => (
                <option key={breedStr} value={breedStr}>
                  {breedStr}
                </option>
              ))}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
