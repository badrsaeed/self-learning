// scroll Example

//let btn = document.querySelector(".b");
// console.log(btn);
// btn.onclick = (e) => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// window.onscroll = (e) => {
//   if (window.scrollY < 1000) {
//     btn.style.display = "none";
//   }
//   if (window.scrollY >= 1000) {
//     btn.style.display = "block";
//   }
// };

//local Storage example

// //fetch items
// let lists = document.querySelectorAll("ul li");
// let main = document.querySelector(".main");

// //if ther a color in local storage
// if (window.localStorage.getItem("color")) {
//   //make backgreound of div by volor in local storage
//   main.style.backgroundColor = window.localStorage.color;

//   //remove ative class from all item
//   lists.forEach((li) => {
//     li.classList.remove("active");
//   });

//   //add active class at item with the same color in local storage
//   document
//     .querySelector(`[data-color = "${window.localStorage.color}"]`)
//     .classList.add("active");
// }

// //iterator at every li in ul
// lists.forEach((li) => {
//   //add event
//   li.addEventListener("click", (e) => {
//     //when i click remove all active class from all li element
//     lists.forEach((li) => {
//       li.classList.remove("active");
//     });

//     //add active class at clicked item
//     e.currentTarget.classList.add("active");

//     //store the new color at local storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);

//     //change the background of main div agter click
//     main.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

//Destructuring examples
// let arr = ["bad", "saeed", ["ali", "mohamed", ["hassan"]]];

// let [, , [a, , [b]]] = arr;
// console.log(a);
// console.log(b);
// let obj = {
//   name: "badr",
//   age: 25,
//   Skills: {
//     html: 70,
//     css: 80,
//   },
// };
// let {
//   name: n,
//   age: a,
//   Skills: { html: h, css: c },
// } = obj;

// const { html, css } = obj.Skills;
// console.log(`the html skills progress => ${html}`);
// console.log(`the CSS skills progress => ${css}`);

//function
// ShowDetails();

// function ShowDetails({ name: n, age, Skills: { html } } = obj) {
//   console.log(n);
//   console.log(age);
//   console.log(html);
// }

// let obj = {
//   name: "badr",
//   age: 25,
//   Skills: ["html", "Css", "javascript"],
//   address: {
//     egypt: "Cairo",
//     ksa: "Riyad",
//   },
// };
// let {
//   name: n,
//   age: a,
//   Skills: [html, css, javascript],
//   address: { egypt },
// } = obj;

// console.log(n);
// console.log(a);
// console.log(html);
// console.log(css);
// console.log(javascript);
// console.log(egypt);

// function execRecursively(fn, subject, _refs = new WeakSet()) {
//   // Avoid infinite recursion
//   if (_refs.has(subject)) {
//     return;
//   }
//   debugger;
//   fn(subject);
//   if (typeof subject === "object") {
//     _refs.add(subject);
//     for (const key in subject) {
//       execRecursively(fn, subject[key], _refs);
//     }
//     _refs.delete(subject);
//   }
// }

// const foo = {
//   foo: "Foo",
//   bar: {
//     bar: "Bar",
//   },
// };

// foo.bar.baz = foo; // Circular reference!
// execRecursively((obj) => console.log(obj), foo);

// console.log(Array.from("Badr", (l) => l + l));
// let arr = [10, 20, 30, 40, 50, "A", "B"];

// let check = arr.some((e) => e < 5);
// console.log(check);

// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   10: "Place 3",
//   40: "Place 4",
// };
// let minLocation = 15;
// let locKeys = Object.keys(locations);
// console.log(locKeys);

// let check = locKeys.every(function (e) {
//   return +e >= minLocation;
// });
// console.log(check);

// let reg = /([a-z]|[A-Z]|[1-9])@(gmail|outlock|yahoo).com/i;

// let inp = window.prompt();
// if (inp.match(reg)) console.log("Matched");
// else console.log("Not Matched");

// let str = "AaBbcdefG123!234%^%*";

// let reg = /[A-Z]/g;
// console.log(str.match(reg));

// let txt = "We Love J1v1Script 5t 61ll";
// console.log(txt.replace(/\d+/gi, "a"));

// let ma = "(1234) 567-8910";
// let re = /\(\d{4}\)\s{1}\d{3}-\d{4}/gi;
// console.log(ma.match(re));

// class User {
//   constructor(i, n) {
//     this.id = i;
//     this.name = n;
//   }

//   helloFunc() {
//     return `Heloo, ${this.name}`;
//   }
// }

// console.log(User.prototype);

// function* getNums() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = getNums();
// while (!generator.next().done) {
//   console.log(generator.next().value);
// }

// let a = 10,
//   b = "badr",
//   d = function () {
//     return `Hello badr`;
//   };

// export { a, b, d };

// const jsonObj = '{"useName":"Badr", "age":"24",}';
// console.log(jsonObj);

// let json = JSON.stringify(jsonObj);
// console.log(json);

// let jsonToObj = JSON.parse(json);

// console.log(jsonToObj);

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/badrsaeed/repos");
// req.send();

// console.log(req);

// req.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let jsDate = JSON.parse(this.responseText);
//     console.log(jsDate);
//     for (let i = 0; i < jsDate.length; i++) {
//       let div = document.createElement("div");
//       let text = document.createTextNode(jsDate[i]["name"]);
//       div.style.backgroundColor = "red";
//       div.appendChild(text);
//       document.body.appendChild(div);
//     }
//   }
// };

//promises

// let RetriveDate = (api) => {
//   return new Promise((resolove, rejected) => {
//     let req = new XMLHttpRequest();
//     req.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolove(JSON.parse(req.responseText));
//       } else {
//         rejected("Req Does not Complete");
//       }
//     };
//     req.open("GET", api);
//     req.send();
//   });
// };

// RetriveDate("https://api.github.com/users/badrsaeed/repos")
//   .then((result) => {
//     result.length = 5;
//     return result;
//   })
//   .then((result) => console.log(result[0].name));

// let p = new Promise((resolved, rejected) => {
//   let connect = false;
//   if (connect) {
//     resolved("Connection Occured ");
//   } else {
//     rejected(Error("Failed"));
//   }
// });
// console.log(p);
// p.then(
//   (resolvedValue) => {
//     console.log(`Good ${resolvedValue}`);
//   },
//   (rejecteddValue) => {
//     console.log(`Bad ${rejecteddValue}`);
//   }
// );

// fetch("https://api.github.com/users/badrsaeed/repos")
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     return data;
//   })
//   .then((cusomData) => console.log(cusomData[0].name));

// let first = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam First Promise");
//   }, 3000);
// });

// let seconed = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam Seconed Promise");
//   }, 1000);
// });

// let third = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam Third Promise");
//   }, 2000);
// });

// Promise.race([first, seconed, third]).then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(`Rejected ${rejected}`)
// );

function GetDate() {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log(JSON.parse(this.responseText));
    }
  };
  req.open("GET", "https://dummyjson.com/products/1", false);
  req.send();
}
GetDate();
