// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const UserEvent = sequelize.define("UserEvent", {
        // The email cannot be null, and must be a proper email before creation

    });

    return UserEvent;

};