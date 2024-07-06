// ------------------------ Ali Amirpoorsaeed      ----------------------- Vacumeproj

// console in inspect! Right-click on an empty area of the website or choose an element, and click on Inspect...

// [] The Empty array means the room is clean!  & [1382] The dirty room!

let rooms = [
    [5, 8, 9, 11, 2],
     [15, 51],
      [],
       [8],
        [0, 0]
    ];

function cleanRooms(rooms) {
  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    if (room.length === 0) {
      console.log(`Room ${i + 1} is clean!!`);
    } else {
      console.log(`Room ${i + 1} : [${room}] ` + `\n Room${i + 1} is dirty!`);
      console.log();
      console.log("VacuumCleaner starts...");
      rooms[i] = [];
      console.log(`Room${i + 1} after cleaning--> [${rooms[i]}]`);
    }
  }
}

cleanRooms(rooms);

swal({
  title: "Hi, I'm Ali Amirpoorsaeed!",
  text: "see project on console;)", 
  button: false,
  timer: 5000,
});
