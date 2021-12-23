import pic1 from "./pic1.jpg";
import _ from "lodash";
import style from "./main.css";
function component() {
  let m = document.createElement("main");
  let p = document.createElement("p");
  let img = document.createElement("img");
  m.append(p);
  p.textContent = _.join(["Hello", "webpack"], " ");
  m.append(img);
  img.src = pic1;
  img.alt = "snow pic";
  img.classList.add("shadowizard");
  return m;
}

export default component;
