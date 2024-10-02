/* Selectores 
getElement
    getElementByid -> Selecciona elemento por un id
    getElementByClassName -> Selecciona elemento por class
    getElementByTagName -> Selecciona elemento por nombre de etiqueta

querySelector -> Permite seleccionar por id, por clase y por etiqueta
querySelectorA11 -> Permite seleccionar por id, por clase y por etiqueta    
*/
console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

console.log(document.querySelector("form"))
console.log(document.querySelectorAll("form"))
