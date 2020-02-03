// boardState.js

// array of space objects:
// e.g. board[0] is "Go"

//  TODO: differentiate property tile objects from generic tile objects
//  (one should be a subclass of the other)

/*
 *   board array of tile objects (ordered by actual board location)
 */

const board = [
    {
      spaceID: "Go",
      propertyGroup: null,
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: 0,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null, // length-6 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],
      isProperty: false
    },

    {
      spaceID: "MediterraneanAvenue",
      propertyGroup: "brown",
      spaceIDAsHTML: "Mediterranean<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 6000,
      mortgageValue: 3000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [2000, 10000, 30000, 90000, 160000, 250000], // length-6 array of rent prices
      pricePerHouse: 50000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "CommunityChestSouth",
      propertyGroup: "",
      monopolyTrigger: null,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "BalticAvenue",
      propertyGroup: "brown",
      spaceIDAsHTML: "Baltic<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 60000,
      mortgageValue: 30000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [4000, 20000, 60000, 180000, 320000, 450000], // length-6 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "IncomeTax",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "ReadingRailroad",
      propertyGroup: "railroad",
      spaceIDAsHTML: "Reading<br>Railroad",
      bgImage: "images/railroad_south.jpeg",
      monopolyTrigger: null,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 100000,
      owner: "no owner",
      structures: null,
      rentValues: [25000, 50000, 100000, 200000], // length-6 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "OrientalAvenue",
      propertyGroup: "lightblue",
      spaceIDAsHTML: "Oriental<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 100000,
      mortgageValue: 50000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [6000, 30000, 90000, 270000, 400000, 550000], // length-6 array of rent prices
      pricePerHouse: 50000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ChanceSouth",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null,
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "VermontAvenue",
      propertyGroup: "lightblue",
      spaceIDAsHTML: "Vermont<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 100000,
      mortgageValue: 50000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [6000, 30000, 90000, 270000, 400000, 550000], // length-6 array of rent prices
      pricePerHouse: 50000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ConnecticutAvenue",
      propertyGroup: "lightblue",
      spaceIDAsHTML: "Connecticut<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 120000,
      mortgageValue: 60000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [8000, 40000, 100000, 300000, 450000, 600000], // length-6 array of rent prices
      pricePerHouse: 50000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "Jail",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "StCharlesPlace",
      propertyGroup: "purple",
      spaceIDAsHTML: "St.Charles<br>Place",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 140000,
      mortgageValue: 70000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [10000, 50000, 150000, 450000, 625000, 750000], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ElectricCompany",
      propertyGroup: "Utilities",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 150000,
      mortgageValue: 0,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-6 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "StatesAvenue",
      propertyGroup: "purple",
      spaceIDAsHTML: "States<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 140000,
      mortgageValue: 70000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [10000, 50000, 150000, 450000, 625000, 725000], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "VirginiaAvenue",
      propertyGroup: "purple",
      spaceIDAsHTML: "Virginia<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 160000,
      mortgageValue: 80000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [12000, 60000, 180000, 500000, 700000, 900000], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "PennsylvaniaRailroad",
      propertyGroup: "railroad",
      spaceIDAsHTML: "Pennsylvania<br>Railroad",
      bgImage: "images/railroad_south.jpeg",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 100000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [25000, 50000, 100000, 200000],
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "StJamesPlace",
      propertyGroup: "orange",
      spaceIDAsHTML: "St.James<br>Place",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 180000,
      mortgageValue: 90000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [14000, 70000, 200000, 550000, 750000, 950000 ], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "CommunityChestWest",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "TennesseeAvenue",
      spaceIDAsHTML: "Tennessee<br>Avenue",
      propertyGroup: "orange",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 180000,
      mortgageValue: 90000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [14000, 70000, 200000, 550000, 750000, 950000], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "NewYorkAvenue",
      spaceIDAsHTML: "New York<br>Avenue",
      propertyGroup: "orange",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 100000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [16000, 80000, 220000, 600000, 800000, 1000000], // length-6 array of rent prices
      pricePerHouse: 100000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "FreeParking",
      propertyGroup: null,
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,
      rentValues: [, , , , , ], // length-6 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "KentuckyAvenue",
      spaceIDAsHTML: "Kentucky<br>Avenue",
      propertyGroup: "red",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 220000,
      mortgageValue: 110000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [18000, 90000, 250000, 700000, 875000, 1050000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ChanceNorth",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "IndianaAvenue",
      spaceIDAsHTML: "Indiana<br>Avenue",
      propertyGroup: "red",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 220000,
      mortgageValue: 110000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [18000, 90000, 250000, 700000, 875000, 1050000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "IllinoisAvenue",
      spaceIDAsHTML: "Illinois<br>Avenue",
      propertyGroup: "red",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 240000,
      mortgageValue: 120000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [20000, 100000, 300000, 750000, 925000, 1100000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "BORailroad",
      propertyGroup: "railroad",
      spaceIDAsHTML: "B & O<br>Railroad",
      bgImage: "images/railroad_south.jpeg",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 100000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [25000, 50000, 100000, 200000 ], // length-6 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "AtlanticAvenue",
      spaceIDAsHTML: "Atlantic<br>Avenue",
      propertyGroup: "yellow",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 260000,
      mortgageValue: 130000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [22000, 110000, 330000, 800000, 975000, 1150000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "VentnorAvenue",
      spaceIDAsHTML: "Ventnor<br>Avenue",
      propertyGroup: "yellow",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 260000,
      mortgageValue: 130000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [22000, 110000, 330000, 800000, 975000, 1150000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "WaterWorks",
      propertyGroup: "Utilities",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 150000,
      mortgageValue: 75000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [4000, 10000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "MarvinGardens",
      spaceIDAsHTML: "Marvin<br>Gardens",
      propertyGroup: "yellow",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 280000,
      mortgageValue: 140000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [24000, 120000, 360000, 850000, 1025000, 1200000], // length-6 array of rent prices
      pricePerHouse: 150000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "GoToJail",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "PacificAvenue",
      spaceIDAsHTML: "Pacific<br>Avenue",
      propertyGroup: "green",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 300000,
      mortgageValue: 150000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [26000, 130000, 390000, 900000, 1100000, 1275000], // length-6 array of rent prices
      pricePerHouse: 200000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "NorthCarolinaAvenue",
      propertyGroup: "green",
      spaceIDAsHTML: "North<br>Carolina<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 300000,
      mortgageValue: 150000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [26000, 130000, 390000, 900000, 1100000, 1275000], // length-6 array of rent prices
      pricePerHouse: 200000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "CommunityChestEast",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,  // number of houses; 5 => hotel
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "PennsylvaniaAvenue",
      propertyGroup: "green",
      spaceIDAsHTML: "Pennsylvania<br>Avenue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 320000,
      mortgageValue: 160000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [28000, 150000, 450000, 1000000, 1200000, 1400000], // length-6 array of rent prices
      pricePerHouse: 200000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "ShortLineRailroad",
      spaceIDAsHTML: "Short Line<br>Railroad",
      bgImage: "images/railroad_south.jpeg",
      propertyGroup: "railroad",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 100000,
      owner: "no owner",
      structures: 0,
      rentValues: [25000, 50000, 100000, 200000], // length-6 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "ChanceEast",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: null,
      mortgageValue: null,
      owner: "no owner",
      structures: null,  // number of houses; 5 => hotel
      rentValues: null,
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "ParkPlace",
      spaceIDAsHTML: "Park Place",
      propertyGroup: "darkblue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 350000,
      mortgageValue: 175000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [35000, 175000, 500000, 1100000, 1300000, 1500000], // length-6 array of rent prices
      pricePerHouse: 200000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "LuxuryTax",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 400000,
      mortgageValue: 200000,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null, // length-6 array of rent prices
      pricePerHouse: 200000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "Boardwalk",
      spaceIDAsHTML: "Boardwalk",
      propertyGroup: "darkblue",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 400000,
      mortgageValue: 0,
      owner: "no owner",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [50000, 200000, 600000, 1400000, 1700000, 2000000], // length-6 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    }

];

/*

class Tile {
  constructor(spaceID, playersOnThisSpace){
    this.spaceID = spaceID;
    this.playersOnThisSpace = playersOnThisSpace;
  }
}

// TODO: fix constructor for PropertyTile class:
class PropertyTile extends Tile {
  constructor() {
    this.mortgaged = false,
    this.propertyGroup = null,
    this.rentValues = null, // length-6 array of rent prices
    this.structures = 0,  // number of houses; 5 => hotel
    this.propertyValue = 0,
    this.mortgageValue = 0,
    this.owner = null,
    this.pricePerHouse = null,
    this.arrivalEvents = []    // functions that occur when a player lands on tile
  }
}

*/
