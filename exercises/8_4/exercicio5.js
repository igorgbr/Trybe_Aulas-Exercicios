const assert = require('assert');

const greetPeople = (people) => {
   let newArray =[];
    for (let person in people) {
     let greeting = 'Hello ';
      newArray.push(greeting += people[person])
    }
  return newArray;
  };

  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepEqual(greetPeople(parameter), result);
