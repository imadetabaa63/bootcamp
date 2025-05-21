//exercie 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};


console.log("Number of floors:", building.numberOfFloors);


console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);


const secondTenant = building.nameOfTenants[1]; 
const numberOfRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log("Second tenant:", secondTenant, "has", numberOfRooms, "rooms.");


const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent was increased to:", building.numberOfRoomsAndRent.dan[1]);
} else {
    console.log("Dan's rent remains the same:", danRent);
}
