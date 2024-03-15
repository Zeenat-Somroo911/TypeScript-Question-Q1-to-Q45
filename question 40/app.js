// exercise 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// make three dictionaries represnting different albums.
var album1 = make_album('ARTIST1', 'ARTIST1');
var album2 = make_album('ARTIST2', 'ARTIST2');
var album3 = make_album('ARTIST3', 'ARTIST3');
// PRINT IT
console.log(album1);
console.log(album2);
console.log(album3);
