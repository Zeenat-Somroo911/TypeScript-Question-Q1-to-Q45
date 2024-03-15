// exercise 17 
//  initial guest list 
var guestlist = ["Areej", "Fazi", "Bilal", "Faiza", "Ali"];
// function to print invitation message
function printInvitation(guest) {
    console.log("\nAssalam u alaikum ".concat(guest, ",  \n we want to invite u on dinner, please join us!\nThank you"));
}
// function to print appology message
function printApology(guest) {
    console.log("\nSir/Madam ${guest},\nSorry, but we can't invite you in dinner.");
}
// invite initial guests
console.log("\nInitial GuestList:");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    printInvitation(guest);
}
// inform about the smaller dinner table
console.log("\nWe find a smaller dinning table, so invite only 2 guest");
// remove guest until only two names remain 
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    printApology(removedGuest);
}
// print invitation for remaning guest 
console.log("\nRemaning Guest:");
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    printInvitation(guest);
}
// remove the two guest names from list
guestlist.pop();
guestlist.pop();
// print the empty list 
console.log("\nEmpty Guest List:");
console.log(guestlist);
