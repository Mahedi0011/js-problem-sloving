const students = [
    {id:21, name:'Tamim'},
    {id:31, name:'Hasan'},
    {id:33, name:'Maya'},
    {id:40, name:'Salma'},
    {id:50, name:'Nayeem'}
];

const names = students.map( s => s.name);
const ids = students.map(i => i.id);
const bigger = students.filter(s => s.id> 30);
const biggerOne = students.find(s => s.id> 30);
console.log(biggerOne);