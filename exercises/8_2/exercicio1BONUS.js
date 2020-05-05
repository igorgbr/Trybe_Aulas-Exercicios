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

  const allLessons = Object.assign({},{lesson1, lesson2, lesson3})
  const entries = Object.entries(allLessons);

  const totalAlunos = (obj) => {

    let totalAlunos = 0;
    for(i in obj) {
      if (obj[i][1].materia == 'Matemática'){
          totalAlunos += obj[i][1].numeroEstudantes;
      }
    };
    return totalAlunos;
  }
  console.log(`Total: ${totalAlunos(entries)} alunos.`);



