import { getBands, getBookings, getVenues } from "./database";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const Venues = () => {
    let venueHTML = "<ul>"
    
    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venueHTML += "</ul>"

return venueHTML
}