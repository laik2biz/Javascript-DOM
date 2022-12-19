import { strings, concatenate, temperateLiterals } from "./src/strings.js";
import { arrays, compareArrays, stringToArray } from "./src/arrays.js";
import { forLoop, indexOfAlphabetsArray } from "./src/loops.js";

document.title = "hackathon1";

const div1 = document.createElement("div");

document.body.prepend(div1);

div1.setAttribute("id", "maindiv");

div1.style.textAlign = 'center'

const butt = document.createElement("button");

butt.setAttribute("id", "pic");

butt.innerHTML = "Picture";

butt.addEventListener('click', () =>{
    document.getElementById('cycle11').style.display = 'block'
})

const div2 = document.createElement("div");

div1.after(div2);

div2.setAttribute("id", "secDiv");

const img = document.createElement("img");

div2.after(img);

img.setAttribute("id", "cycle11");

img.src = 'https://www.tn.gov/content/dam/tn/twra/images/mammals/eastern-grey-squirrel/eastern-grey-squirrel_750x500.jpg'

img.style.display = 'none'

img.style.margin = 'auto'

const header = document.createElement("h1");

div1.appendChild(header);

header.setAttribute("id", "head");

const title = document.createTextNode("Cycle11 Hackathon");

header.appendChild(title);

div1.appendChild(butt) = "center";

document.getElementById("head").style.textAlign = "center";

console.log(strings());

console.log(concatenate(strings()));

console.log(temperateLiterals());

let item = [1, 2, 3, 4];

console.log(arrays(item));

let param1 = [1, 2, 3, 4];

let param2 = [1, 2, 3, 4, 5];

console.log(compareArrays(param1, param2));

let alphStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

console.log(stringToArray(alphStr));

let alphString = stringToArray(alphStr);

console.log(alphString.toString());

console.log(forLoop(alphString));

const b = forLoop(alphString);

console.log(indexOfAlphabetsArray(b, alphString));
