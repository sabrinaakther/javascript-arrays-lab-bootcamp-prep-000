var kittens = ["Milo", "Otis", "Garfield"]; 
function kittens() {
    return kittens;
}
// Add your functions and code here
 
function destructivelyAppendKitten(n) {
    kittens.push(n);
    return kittens;
}

function destructivelyPrependKitten(n) {
    kittens.unshift(n) ;
    return kittens;
}
  
function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens;
}

function destructivelyRemoveFirstKitten() {
    kittens.shift();
    return kittens;
}



var appendKitten= function appendKitten(){
   appendKitten.push("Broom");
   return appendKitten;
}

kittens();
appendKitten();
  
