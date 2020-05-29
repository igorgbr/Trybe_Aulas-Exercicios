const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      return data.map((repo) => repo.name)
    });
}

console.log(getRepos('https://api.github.com/users/tryber/repos'))
// it('gets a list of repositories names', () => {
//   const url = 'https://api.github.com/users/tryber/repos';

//   return getRepos(url).then(result => {
//     expect(result).not.toContain('sd-01-week4-5-project-todo-list');
//     expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
//   });
// });
    
