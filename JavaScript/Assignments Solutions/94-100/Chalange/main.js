document.body.style.background = "#EEE";
/**header Style */
let head = document.createElement("header");
let logo = document.createElement("div");
let list = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");

let logotxt = document.createTextNode("Badr");
let hometxt = document.createTextNode("Home");
let abouttxt = document.createTextNode("About");
let servicetxt = document.createTextNode("Service");
let concattxt = document.createTextNode("Concat");

about.appendChild(abouttxt);
service.appendChild(servicetxt);
contact.appendChild(concattxt);
logo.appendChild(logotxt);

home.appendChild(hometxt);
list.appendChild(home);
list.appendChild(about);
list.appendChild(service);
list.appendChild(contact);

head.style.cssText =
  "background-color: #FFF;  display: flex; justify-content: space-between; padding: 12px;";
list.style.cssText =
  "font-size: 12px; list-style-type: none; display: flex; justify-content: space-between; color: #AAA";

home.style.cssText = "margin-right: 8px; ";
about.style.cssText = "margin-right: 8px;";
service.style.cssText = "margin-right: 8px;";
contact.style.cssText = "margin-right: 8px;";

logo.style.cssText =
  "color: green; font-weight: bold; font-style: italic; font-size: 18px; margin-left: 10px";

head.appendChild(logo);
head.appendChild(list);

document.body.appendChild(head);

/*Content */
let content = document.createElement("div");
contact.className = "contetn";

/*Footer*/

let foot = document.createElement("footer");
let foottxt = document.createTextNode("Copyright 2023");
foot.appendChild(foottxt);

foot.style.cssText =
  "font-size: 15px; text-align: center; background-color: green;color:#FFF; padding: 8px; font-weight: bold; position: absolute; bottom: 0px; width: 100%";

document.body.appendChild(foot);
