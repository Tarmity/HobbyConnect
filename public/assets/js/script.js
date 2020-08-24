$(document).ready(() => {
    // Getting references to our form and input
    const eventForm = $("form.event");
    const eventName = $("input#eventName");
    const dateStart = $("input#dateStart");
    const timeStart = $("input#timeStart");
    const timeFinish = $("input#timeFinish");

    // When the signup button is clicked, we validate the email and password are not blank
    eventForm.on("submit", event => {
        event.preventDefault();
        const eventData = {
            eventName: eventName.val().trim(),
            dateStart: dateStart,
            timeStart: timeStart,
            timeFinish: timeFinish
        };

        console.log(eventData);


        // If we have an email and password, run the signUpUser function
        insertEvent(eventData.eventName, eventData.dateStart, eventData.timeStart, eventData.timeFinish);
        eventName.val("");
        dateStart.val("");
        timeStart.val("");
        timeFinish.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function insertEvent(event, date, start, finish) {
        $.post("/api/insertEvent", {
                eventName: event,
                dateStart: date,
                timeStart: start,
                timeFinish: finish
            })
            .then(() => {
                window.location.replace("/");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});