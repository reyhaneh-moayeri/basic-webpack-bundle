import _ from "lodash";
import printMe from "./print.js";
function getComponent() {
  let m = document.createElement("main");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.innerHTML = `Click me and check the console`;
  btn.onclick = printMe;
  m.appendChild(btn);
  m.append(p);
  return import("lodash")
    .then(({ default: _ }) => {
      p.textContent = _.join(["Hello", "webpack"], " ");

      return m;
    })
    .catch((error) => "An error occurred while loading the component");
}
getComponent().then((component) => {
  document.body.appendChild(component);
});

export default component;
