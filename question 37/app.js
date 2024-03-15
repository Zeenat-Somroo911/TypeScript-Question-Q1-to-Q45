// DEFAULT  VALUES IN MAKE_SHIRT
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I LOVE CODING"; }
    console.log('making a $ large t-shirt with the message $"coding is life" printed on it.');
}
make_shirt();
// DEFAULT LARGE AND MESSAGE.
make_shirt("medium");
// DEFAULT MESSAGE,MEDIUM SIZE
make_shirt("small", "DIVE INTO CODING");
// custom message small size
