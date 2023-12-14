import { getBands, getBookings, getVenues } from "./database";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

//function for finding band for booking
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band, id === booking.bandid) {
        }
    }
    return bookingBand
}

// function for finding venue for booking
const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}

export const Bookings = () => {
    let bookingHTML = "<ul>"
    
    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)
        
        bookingHTML += `<li>${band.name} are playing at ${venue.name} on ${booking.date}.</li>`
    }

    bookingHTML += "</ul >"

    return bookingHTML
}
