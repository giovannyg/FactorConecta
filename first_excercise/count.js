/**
 * Todo en JS es un objeto, se puede agregar un attributo a la función y actualizar la refenrecia de ese
 * atributo cada vez que se mande llamar.
 * .
 */
const count = function() {
  count.calls++;
  return count.calls;
};

count.calls = 0;

console.log(count());
console.log(count());
console.log(count());

(function() {
  setInterval(() => {
    console.log(count());
  }, 3000)
})();
