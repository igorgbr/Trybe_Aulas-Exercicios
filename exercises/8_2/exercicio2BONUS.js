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
    numeroEstudantes: 13,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const lesson4 = {
    materia: 'Matemática',
    numeroEstudantes: 13,
    professor: 'Maria Clara',
    turno: 'noite',
  };



  const allLessons = Object.assign({},{lesson1, lesson2, lesson3, lesson4})
  const entries = Object.entries(allLessons);

var idx = 0;
  const numeroChaves = (objeto, idx) => {
  var chaves = Object.values(objeto)

    let relatorio = {};
    let arrayAulas = [];
    let totalAlunos = 0;
    for(i in chaves){
        if(chaves[i].professor == idx) {
            relatorio['professor'] = chaves[i].professor;
            arrayAulas.push(chaves[i].materia); 
            relatorio['aulas'] = arrayAulas;
            totalAlunos += chaves[i].numeroEstudantes;
            relatorio['estudantes'] = totalAlunos;
        }
    }
    return relatorio;
  }
  console.log(numeroChaves(allLessons, 'Carlos'));