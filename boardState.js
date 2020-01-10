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
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: null, // length-5 array of rent prices
      pricePerHouse: null,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],
      isProperty: false

    },

    {
      spaceID: "MediterraneanAvenue",
      propertyGroup: "brown",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 60000,
      mortgageValue: 30000,
      owner: "none",
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [20000, 100000, 300000, 900000, 160000, 250000], // length-5 array of rent prices
      pricePerHouse: 50000,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "CommunityChestSouth",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "BalticAvenue",
      propertyGroup: "brown",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 60000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
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
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "ReadingRailroad",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "OrientalAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 100000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ChanceSouth",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "VermontAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 100000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ConnecticutAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 120000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "Jail",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "StCharlesPlace",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 140000,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
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
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "StatesAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 140000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "VirginiaAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 160000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "PennsylvaniaRailroad",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "StJamesPlace",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 180000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "CommunityChestWest",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "TennesseeAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 180000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "NewYorkAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "FreeParking",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "KentuckyAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 220000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "ChanceNorth",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },

    {
      spaceID: "IndianaAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 220000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "IllinoisAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 240000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "BORailroad",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 200000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "AtlanticAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 260000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "VentnorAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 260000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
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
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "MarvinGardens",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 280000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },

    {
      spaceID: "GoToJail",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "PacificAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 300000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "NorthCarolinaAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 300000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "CommunityChestEast",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "PennsylvaniaAvenue",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 320000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "ShortLineRailroad",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "ChanceEast",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "ParkPlace",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 350000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: true
    },
    {
      spaceID: "LuxuryTax",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 0,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
      pricePerHouse: 0,
      mortgaged: false,
      playersOnThisSpace: [],  // array of player names
      arrivalEvents: [],   // functions that occur when a player lands on tile
      isProperty: false
    },
    {
      spaceID: "Boardwalk",
      propertyGroup: "",
      monopolyTrigger: false,   // "true" if part of one player's monopoly
      propertyValue: 400000,
      mortgageValue: 0,
      owner: null,
      structures: 0,  // number of houses; 5 => hotel
      rentValues: [, , , , , ], // length-5 array of rent prices
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
    this.rentValues = null, // length-5 array of rent prices
    this.structures = 0,  // number of houses; 5 => hotel
    this.propertyValue = 0,
    this.mortgageValue = 0,
    this.owner = null,
    this.pricePerHouse = null,
    this.arrivalEvents = []    // functions that occur when a player lands on tile
  }
}

*/
