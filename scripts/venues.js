import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const Venues = () => {
    let html = "<ul>"
    
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

return html
}

//document.addeventListener and window.alert
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")
            let correctVenue = null
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    correctVenue = venue
                }
            }
            let correctBand = []
            for (const booking of bookings) {
                if (booking.venueId === correctVenue.id) {
                    for (const band of bands) {
                        if (band.id === booking.bandId) {
                            correctBand.push(band.name)
                        }
                    }
                }
            }
            let allBands = correctBand.join(" and ")
            
            window.alert(`${allBands} are playing at this venue.`)
        }
    }
       
                //    window.alert(`${band.name} is playing at ${venue.name}.`)
)
