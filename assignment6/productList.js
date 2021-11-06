import { products } from "./product.js";

// let str = ""
const Pro = document.querySelector("#product");

function render(array){
  Pro.innerHTML = " ";
  const divOut = document.createElement("div");
  divOut.setAttribute("class","row");
  array.forEach(el => {
    let pic = document.createElement("img");	
  pic.setAttribute("src",el.img); 
//   pic.setAttribute("max-width","300px")
  // pic.setAttribute("class","card-img-top")
  
  let dic = document.createElement("div");
  dic.setAttribute("class","col-4")
  let pe = document.createElement("p");
  dic.setAttribute("class","card");
//   dic.setAttribute("style","width : 350px ");
//   dic.setAttribute("style","margin : 10px");


  pe.innerHTML = `ID: ${el.productId} <br>	
  Name: ${el.productName} <br>		
  Description: ${el.productDesc} <br>		
  Price: ${el.productPrice} <br>		
  Stock: ${el.stock}`;			
  
  divOut.appendChild(dic)
  dic.appendChild(pe);
  dic.insertBefore(pic,pe);
  Pro.appendChild(divOut);
  });
}
render(products);

export{render};