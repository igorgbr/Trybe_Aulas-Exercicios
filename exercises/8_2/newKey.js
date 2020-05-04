// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  

//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

let exemplo = (novoObjeto, novaChave, valor) => {
    novoObjeto[novaChave] = valor;

    const fullName = `${customer.firstName} ${customer.lastName}`
    let newKey = 'fullname';
    novoObjeto[newKey] = fullName

    return novoObjeto;

};

const customer = {
    firstName: 'Igor',
    age: 31,
    job: 'Enginner',
};

const newKey = 'lastName';
const surname = 'Giamoniano';

;
console.log(exemplo(customer, newKey, surname))