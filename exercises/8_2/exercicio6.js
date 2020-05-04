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

  const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
  const totalAlunos = (obj) => {
    let total =0;
    for(i in allLessons){
      total += allLessons[i].numeroEstudantes;
    }
    return `Total de alunos: ${total}`;
  }

  console.log(totalAlunos(allLessons))