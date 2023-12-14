import { getBands, getVenues, getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const Bands = () => {
    let html = "<ul>"
    
    for (const band of bands) {
        html +=`<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

//document.addeventListener and window.alert
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            let correctBand = null
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    correctBand = band
                }
            }
            let correctVenue = []
            for (const booking of bookings) {
                if (booking.bandId === correctBand.id) {
                    for (const venue of venues) {
                        if (venue.id === booking.venueId) {
                            correctVenue.push(venue.name)
                        }

                    }
                }
            }
            let allVenues = correctVenue.join(" and ")
            window.alert(`This band is booked at ${allVenues}`)
        
              //      window.alert(`${band.name} is playing at ${venue.name} on ${booking.date}.`)
              //  }
            }            

        }
    )