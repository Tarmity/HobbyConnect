$(document).ready(() => {
    const button = $("#add");
    const userID = $("#userID").text();
    const eventID = $("#eventID").text();

    console.log(userID, " ", eventID);
    button.on("click", () => {
        $.post("/api/addParticipant", {
            user: userID,
            event: eventID
        }).then(() => {
            window.location.reload();
        })
    })

});