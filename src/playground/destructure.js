person = {
  name: 'Samuel',
  age: '33',
  location: {
    city: 'Lekki',
    temp: 26
  }
}

const {name, age} = person;

// Same as
const name = person.name;

const {name: firstName, age} = person;

// Same as
const firstName = person.name;

const { city, temp } = person.location;

// Default values in cases of undefined
const { wife: companion = 'Esohe', name } = person;