//Getting Id's from html and giving them variable names
let personalName = document.getElementById('personName');
let eventDescription = document.getElementById('description');
let eventDate = document.getElementById('date');
let eventLocation = document.getElementById('location');
let addEvent = document.getElementById('eventTab');
let removeAddedEvent = document.getElementById('removeEvent');


//Created a state in how each event going to be displayed
let state = {
    name:['John Doe'],
    description:['Independence Day'],
    date:['07/04/2024'],
    location:[NYC, NY]
};



const addEventForm = async () => {
    try {
        const events = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-ftb-mt-web-pt/events')
        const jsEvents = await events.json();
        console.log(jsEvents);
    }
catch(e) {
    console.error('Failed to Retrieve Party Info');
    console.error(e);

    return false;
}
}

addEventForm();