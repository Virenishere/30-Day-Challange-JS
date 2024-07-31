import {person} from "./module.js"
debugger
const outputEle = document.getElementById("output");

const result = person("Test");

outputEle.innerText = result;