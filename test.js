// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === '') {
        delete collection[id][prop];
    } else {
        if (prop !== 'tracks') {
            collection[id][prop] = value;
        } else {
            collection[id].hasOwnProperty('tracks') ? collection[id].tracks.push(value) : collection[id].tracks = [value];
        }
    }
    return collection;
}

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");
console.log(collection)
