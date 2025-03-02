import { LinkedList } from "./logic.js";

const list = LinkedList();
list.prepend("Amr");
list.prepend("Ebrahim");
list.append("Belal");
list.append("Ahmed");
list.toString();
list.size();
console.log(list.at(3))