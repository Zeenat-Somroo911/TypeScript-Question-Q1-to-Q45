// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
var magicianNames = ["David", "Pen", "Harry", "Potter", "Teller"];
show_magicians(magicianNames);
