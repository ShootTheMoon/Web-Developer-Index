const body = document.body;

// Creating Elements
const CreateElement = (element = "div") => {
  document.createElement(element);
};

// Adding Element to DOM

// a) Append allows for addition of strings and elements
const Append = (content = "Append") => {
  body.append(content);
};

// b) Append Child does not allow for strings to be added
const AppendChild = (content = "Append Child", el = "h2") => {
  const element = document.createElement(el);
  element.textContent = content;
  body.appendChild(element);
};

// Modify Element Text

// b) Text Content: Text content refers to all text that is inside of the element regardless of css properties
const TextContent = (content = "Text Content", el = "h2") => {
  const element = document.createElement(el);
  element.textContent = content;
  body.append(element);
};

// a) Inner Text: Inner text refers to text that is only visible,just how it would appear on the website
const InnerText = (content = "Inner Text", el = "h2") => {
  const element = document.createElement(el);
  element.innerText = content;
  body.append(element);
};

// Modify Element Html

// Very dangerous to allow users to enter inner HTML
const InnerHtml = (content = "<h2>Inner Html</h2>", el = "div") => {
  const element = document.createElement(el);
  element.innerHTML = content;
  body.append(element);
};

// Remove Element

// a) using remove
const Remove = () => {
  const element = document.createElement("div");
  element.innerText = "Remove me";
  body.append(element);
  element.remove();
};

// b) using removeChild
const RemoveChild = () => {
  const element = document.createElement("div");
  element.innerText = "Remove me";
  body.append(element);
  body.removeChild(element);
};

// Add/Edit Element Attributes (e.g. title, id, class, ...)

// a) Using set attribute
const SetAttribute = (atr = "id", value = "set-attribute") => {
  const element = document.createElement("h2");
  element.innerText = "Set Attribute";
  element.setAttribute(atr, value);
  body.append(element);
};

// b) Using explicit method
const Attribute = (value = "attribute") => {
  const element = document.createElement("h2");
  element.innerText = "Attribute";
  element.id = value;
  body.append(element);
};

// Remove Element Attributes (e.g. title, id, class, ...)

const RemoveAttribute = () => {
  const element = document.createElement("h2");
  element.innerText = "Remove Attribute";
  element.id = "remove-attribute";
  body.append(element);
  element.removeAttribute("id");
};

// Add/Edit data attributes

const DataAttribute = (value = "data-attribute") => {
  const element = document.createElement("h2");
  element.innerText = "Add Data Attribute";
  body.append(element);
  // dataset is *important*
  element.dataset.add = value;
};

// Read data attribute

const ReadDataAttribute = (value = "data-attribute") => {
  const element = document.createElement("h2");
  element.innerText = "Before Read";
  body.append(element);
  element.dataset.read = value;
  element.innerText = element.dataset.read;
};

// Modify Class Properties

// Add class
const ClassAdd = () => {
  const element = document.createElement("h2");
  element.innerText = "Add Class";
  body.append(element);
  element.classList.add("add-class");
};

// Remove Class

const ClassRemove = () => {
  const element = document.createElement("h2");
  element.innerText = "Remove Class";
  element.classList.add("add-class");
  body.append(element);
  element.classList.remove("add-class");
};

// Toggle Class

const Toggle = () => {
  const element = document.createElement("h2");
  element.innerText = "Toggle Class";
  element.classList.toggle("toggle-class");
  body.append(element);
};

// Modify Style

const ModifyStyle = () => {
  const element = document.createElement("h2");
  element.innerText = "Modify Style";
  body.append(element);
  element.style.color = "red";
};

Append();
AppendChild();
TextContent();
InnerHtml();
Remove();
RemoveChild();
SetAttribute();
Attribute();
RemoveAttribute();
DataAttribute();
ReadDataAttribute();
ClassAdd();
ClassRemove();
Toggle();
ModifyStyle();
