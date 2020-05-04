  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
 const listaHabilidades = (student) => {

    const arrayOfSkills = Object.keys(student);
    for (i in arrayOfSkills) {
        console.log(`${arrayOfSkills[i]}, Nivel: ${student[arrayOfSkills[i]]}`)
    }
    console.log(`\n`)
 }

 console.log(`Estudante 1`);
 listaHabilidades(student1);

 console.log(`Estudante 2`);
 listaHabilidades(student2);
