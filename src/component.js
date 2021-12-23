import _ from "lodash";
import printMe from "./print.js";
function component() {
  let m = document.createElement("main");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.innerHTML = `Click me and check the console`;
  btn.onclick = printMe;
  m.appendChild(btn);
  m.append(p);
  p.textContent = _.join(["Hello", "webpack"], " ");
  return m;
}

export default component;
