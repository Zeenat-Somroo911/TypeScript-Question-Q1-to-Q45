// DEFAULT  VALUES IN MAKE_SHIRT

function make_shirt(size: string = "large", message: string = "I LOVE CODING"){
    console.log('making a $ large t-shirt with the message $"coding is life" printed on it.');
}
make_shirt();
// DEFAULT LARGE AND MESSAGE.
make_shirt("medium");
// DEFAULT MESSAGE,MEDIUM SIZE
make_shirt("small", "DIVE INTO CODING");
// custom message small size
