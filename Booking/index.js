const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')

const armagan = new Passenger('Armagan', 'Burgas')
const taner = new Driver('Taner', 'Park')

 armagan.book(taner, 'Burgas', 'Sofia')
 armagan.book(taner, 'Sofia', 'Varna')
 armagan.book(taner, 'Varna', 'Burgas')
 armagan.book(taner, 'Burgas', 'Sozopol')

function printBooking(booking){
    console.log(`${booking.passenger.name.red} booked ${booking.driver.name.red} to travel from ${booking.origin.bgRed.yellow} to ${booking.destination.bgGreen.white}`)
}

function printBookingHistory(passenger){
    passenger.bookings.forEach(printBooking)
 }

printBookingHistory(armagan)





//console.log(`${armagan.name} has ${armagan.bookings.length} bookings.`)
//printBooking(booking1)
//printBooking(booking2)
//printBooking(booking3)

