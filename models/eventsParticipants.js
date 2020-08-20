module.exports = function(sequelize, DataTypes) {
    const EventsParticipants = sequelize.define("EventParticipants", {
        event_id: {
            type: DataTypes.INTEGER,
            reference: "event",
            referencesKey: "id"
        },
        //User First name
        participants_id: {
            type: DataTypes.INTEGER,
            reference: "user",
            referencesKey: "id"
        }
    });

    return EventsParticipants;
};