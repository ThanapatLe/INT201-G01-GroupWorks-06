import {products} from './product.js';
let icon = document.querySelector("#search-icon");
let form = document.querySelector('#form-search');
let btn_search = document.querySelector('#search');
let text = document.querySelector('#text-search');
icon.addEventListener("click", toggle);
btn_search.addEventListener("click",console.log(text.value));
let is_click = false;
function toggle() {
  is_click = !is_click;
  if (is_click) {
    form.setAttribute("class","visible");
  } else {
    form.setAttribute("class",'invisible');
  }
}
function search(text){
    if(text.length != 0){
        let item = products.filter((p)=> p.productName.toLowerCase().includes(text.toLowerCase()));
        console.log(item);
    }
    console.log(item);
}


