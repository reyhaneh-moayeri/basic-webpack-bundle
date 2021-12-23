import style from "./style.scss";
import component from "./component.js";
import { shadowizard } from "shadowizardr";
document.body.append(component());

shadowizard({
  shadow_type: "soft",
  padding: true,
});
