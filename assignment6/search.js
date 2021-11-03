
let icon = document.querySelector("#search");
let text = document.createElement("input");
text.setAttribute("type", "text");
let buttom = document.createElement("button");
buttom.innerHTML = "<i>OK</i>";
icon.after(text,buttom);
