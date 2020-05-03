const mySkills = () => {
    const skills = ['Javascript', 'HTML', 'CSS'];
    return `
    Minhas cinco habilidades são:
    ${skills.sort().join(', \n')} 
    #goTrybe`;
  };

const rep = x => {
    const frase = `Tryber x aqui!
    Tudo bem?`;

    return mySkills(frase.replace('x', x));
}

const skills = ['Javascript', 'HTML', 'CSS'];
let x = 'igor';
console.log(rep(x))