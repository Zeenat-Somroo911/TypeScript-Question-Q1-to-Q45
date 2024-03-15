// exercise 40

function make_album(artist: string, title: string, tracks?: number):{ artist: string, title: string, tracks?: number}{
    let album: { artist: string, title: string, tracks?: number} = {
        artist: artist,
        title:title
    };
    if (tracks  !== undefined){
       album.tracks = tracks;
    }
return album;
}
// make three dictionaries represnting different albums.
let album1 = make_album('ARTIST1', 'ARTIST1');
let album2 = make_album('ARTIST2', 'ARTIST2');
let album3 = make_album('ARTIST3','ARTIST3');

// PRINT IT
console.log(album1);
console.log(album2);
console.log(album3);