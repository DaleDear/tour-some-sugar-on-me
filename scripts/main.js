import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Samantha's Tour Plan</h1>
<article class="bookings">
    <section class="detail__bookings">
<h2>Current Bookings</h2>
${Bookings()}
</section>
</article>

<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

