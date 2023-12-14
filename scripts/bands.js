import { getBands, getBookings, getVenues } from "./database";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const Bands = () => {
    let bandHTML = "<ul>"
    
    for (const band of bands) {
        bandHTML +=`<li id="band--${band.id}">${band.name}</li>`
    }

    bandHTML += "</ul >"

    return bandHTML
}

//document.addeventListener and window.alert
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
        
                    window.alert(`${band.name} is playing at ${venue.name} on ${booking.date}.`)
                }
            }            

        }
    }
)