const database = {
    bands: [{
        id: 1,
        name: "Rocket Pumpkins",
        memberCount: 3,
        genre: "RDM",
        yearStarted: 2005

    }, {
        id: 2,
        name: "The Tumbleweeds",
        memberCount: 6,
        genre: "Americana",
        yearStarted: 2021

    }, {
        id: 3,
        name: "Patty and the Peacemakers",
        memberCount: 4,
        genre: "Classic Rock",
        yearStarted: 2000

    }, {
        id: 4,
        name: "Jump Jump",
        memberCount: 4,
        genre: "Pop",
        yearStarted: 2015

    }, {
        id: 5,
        name: "The Rockers",
        memberCount: 6,
        genre: "Classic Rock",
        yearStarted: 2002

    }, {
        id: 6,
        name: "The Cat's Meow",
        memberCount: 3,
        genre: "Country",
        yearStarted: 2020

    }],
    venues: [{
        id: 1,
        name: "The Cellar Moss",
        address: "123 Mossy Oak Boulevard, Chattanooga, TN, 23456",
        squareFootage: 2582,
        maxCapacity: 300
        
    }, {
        id: 2,
        name: "Side Door Slim",
        address: "234 Industrial Parkway, Chattanooga, TN, 23567",
        squareFootage: 1874,
        maxCapacity: 150
        
    }, {
        id: 3, 
        name: "Whiskey River",
        address: "345 Bottle Cap Drive, Clarkeville, TN, 34567",
        squareFootage: 3214,
        maxCapacity: 330

    }, {
        id: 4,
        name: "The Squeeze",
        address: "456 Tart Drive, Nashville, TN, 45678",
        squareFootage: 1750,
        maxCapacity: 125

    }, {
        id: 5, 
        name: "Boots",
        address: "567 Dusty Drive, Nashville, TN, 45789",
        squareFootage: 2500,
        maxCapacity: 280

    }],
    bookings: [{
        id: 1, bandId: 1, venueId: 1, date: "12/13/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 2, bandId: 2, venueId: 2, date: "12/14/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 3, bandId: 3, venueId: 3, date: "12/15/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 4, bandId: 4, venueId: 4, date: "12/16/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 5, bandId: 5, venueId: 5, date: "12/17/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 6, bandId: 6, venueId: 1, date: "12/18/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 7, bandId: 1, venueId: 2, date: "12/19/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 8, bandId: 2, venueId: 3, date: "12/20/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 9, bandId: 3, venueId: 4, date: "12/21/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 10, bandId: 4, venueId: 5, date: "12/22/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 11, bandId: 5, venueId: 1, date: "12/23/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 12, bandId: 6, venueId: 2, date: "12/27/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 13, bandId: 1, venueId: 3, date: "12/28/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 14, bandId: 2, venueId: 4, date: "12/29/2023", timeSlot: "8:00pm - 9:30pm"
    }, {
        id: 15, bandId: 3, venueId: 5, date: "12/13/2023", timeSlot: "8:00pm - 9:30pm"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

