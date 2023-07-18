
// //2
// let i = document.images;
// for(let h = 0; h < i.length; h++)
// {
//     i[h].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     i[h].setAttribute("alt", "Elzero logo");

// console.log(i[0]);
// }

// 3


// let ins = document.querySelector("[name = 'dollar']");
// let outs = document.querySelector(".result");
// console.log(ins);
// console.log(outs);

// ins.onchange = function(e) {
//     let result = ins.value * 15.6;
//     console.log(ins.value);
//     outs.textContent = `{${ins.value}} USD Dollar = {${result}}};`
// };

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// console.log(one);
// console.log(two);

// let str = one.innerHTML;
// one.innerHTML = two.innerHTML;
// two.innerHTML = str;

// let tit = one.title;
// one.title = two.title;
// two.title = tit;

// 5
// let imgs = document.images;
// console.log(imgs);
// for(let i = 0; i < imgs.length; i++)
// {
//     if(imgs[i].hasAttribute("alt"))
//     {
//         imgs[i].setAttribute("alt", "old");
//     }
//     else
//     {
//         imgs[i].setAttribute("alt", "Elzero New");
//     }
// }

let forms = document.forms[0];
console.log(forms);

let number = document.querySelector("[name = 'elements']");
let text = document.querySelector("[name = 'texts']");
let type = document.querySelector("[name = 'type']");
console.log(number);
console.log(text);
console.log(type.value);

type.onchange = (e) => {
    console.log(type.value);   
};

let create = document.querySelector("[name = 'create']");
console.log(create);
create.onclick = function (e) {
    // for(let i = 0; i < )
    e.preventDefault();
};


