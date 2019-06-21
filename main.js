console.log('siema!');
const name='Robert';
const js='konsoli';
console.log(`Sie ma jestem ${name} witam
w ${js} Powodzenia 👍`);
const diary = document.querySelector('.diary__paragraf--js');
console.log(diary.innerHTML);
diary.innerHTML = `<strong>Sie ma</strong> jestem ${name} witam
w ${js} Powodzenia 👍`;
const paragraph = document.querySelectorAll('p');
console.log(paragraph);
console.log(paragraph[0]);