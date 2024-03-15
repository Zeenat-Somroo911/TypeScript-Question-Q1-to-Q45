// exercise 17 
//  initial guest list 
let guestlist: string[] = ["Areej" , "Fazi" ,"Bilal" ,"Faiza" , "Ali"];
// function to print invitation message
function printInvitation(guest: string){
   console.log(`\nAssalam u alaikum ${guest},  \n we want to invite u on dinner, please join us!\nThank you`);

}
// function to print appology message
function printApology(guest:string){
    console.log("\nSir/Madam ${guest},\nSorry, but we can't invite you in dinner.");
}
// invite initial guests
console.log("\nInitial GuestList:");
for (let guest of guestlist){
    printInvitation(guest);
}
// inform about the smaller dinner table
console.log("\nWe find a smaller dinning table, so invite only 2 guest");
// remove guest until only two names remain 
while (guestlist.length > 2){
    let removedGuest = guestlist.pop() as string;
    printApology(removedGuest);
}
// print invitation for remaning guest 
console.log("\nRemaning Guest:");
for (let guest of guestlist){
    printInvitation(guest);
}
// remove the two guest names from list
guestlist.pop();
guestlist.pop();
// print the empty list 
console.log("\nEmpty Guest List:");
console.log(guestlist);
