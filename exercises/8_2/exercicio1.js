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

  const morningTurn = (novoObjeto, newKey, value) => {
      novoObjeto[newKey] = value;
      return novoObjeto;
  }

const newKey = 'turno';
const newValue = 'manhã';

  console.log(morningTurn(lesson2, newKey, newValue))
