$(document).ready(() => {
    const userID = $("#userID").text();
    const eventID = $("#eventID").text();

    console.log(userID, " ", eventID);
    $.post("/api/addParticipant", {

    })
});