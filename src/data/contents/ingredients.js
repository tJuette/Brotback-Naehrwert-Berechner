export default [
  ingridientConstructor('Weizenmehl', 10, 71, 1, 335),
  ingridientConstructor('Backprotein', 81, 3.8, 1.2, 165),
  ingridientConstructor('Quark', 12, 4, 0.4, 500),
  ingridientConstructor('Ei', 11.8, 1.5, 9.3, 0),
  ingridientConstructor('Backpulver', 0, 20, 0, 30),
]

function ingridientConstructor(name, eiweiss, kohlenhydrate, fett, gewicht) {
  return {
    name,
    eiweiss,
    kohlenhydrate,
    fett,
    gewicht,
  };
}
