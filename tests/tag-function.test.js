function tagFunction(array,...args){
  console.info(array);
  console.info(args);
}

test("use tag function", () =>{
  const name = 'Arifal';

  tagFunction`Hello ${name}, how are you?`;
  tagFunction`Hello ${name}, see you later`;
});

test("tag function sql", () => {
  const name = 'Arifal';
  const age = 25;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});