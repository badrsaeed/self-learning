let choosen = 1;

let arr = [
  { title: "Osama", age: 38, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["python", "java"] },
  { title: "Sayed", age: 33, available: true, skills: ["C#", ".net"] },
];

if (choosen === 1) {
  [
    {
      title: t,
      age: a,
      available: av,
      skills: [, ls],
    },
  ] = arr;
  console.log(t);
  console.log(a);
  if (av === true) console.log("available");
  else console.log("not available");
  console.log(ls);
} else if (choosen === 2) {
  [
    ,
    {
      title: t,
      age: a,
      available: av,
      skills: [, ls],
    },
  ] = arr;
  console.log(t);
  console.log(a);
  if (av === true) console.log("available");
  else console.log("not available");
  console.log(ls);
} else {
  [
    ,
    ,
    {
      title: t,
      age: a,
      available: av,
      skills: [, ls],
    },
  ] = arr;
  console.log(t);
  console.log(a);
  if (av === true) console.log("available");
  else console.log("not available");
  console.log(ls);
}
