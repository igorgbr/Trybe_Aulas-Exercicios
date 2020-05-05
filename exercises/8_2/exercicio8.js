const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  
const verifyPair = (obj, key, value) => {
  const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);
  
    return ((arrayKeys.includes(key)) && (arrayValues.includes(value))) ? true : false;
}

console.log(verifyPair(lesson3, 'numeroEstudantes', 10));