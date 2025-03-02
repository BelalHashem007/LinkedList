import { LinkedList } from "./logic.js";

const list = LinkedList();
list.prepend("Amr");
list.prepend("Ebrahim");
list.append("Belal");
list.append("Ahmed");
list.toString();
console.log(list.size());
//console.log(list.contains("1"));
console.log(list.find("Belal"));
console.log(list.at(2))
