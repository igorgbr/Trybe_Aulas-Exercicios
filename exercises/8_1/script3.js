const mySkills = (frase) => {
    
    return `${frase}
    Minhas cinco habilidades são:
    ${skills.sort().join(', \n')} 
    #goTrybe`;
  };

const rep = nome => {
    const frase = `Tryber x aqui!
    Tudo bem?`;
    return mySkills(frase.replace('x', nome));
}

const skills = ['Javascript', 'HTML', 'CSS'];
let nome = 'igor';
console.log(rep(nome))
