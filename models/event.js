module.exports = function(sequelize, DataTypes) {
    const Events = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        //User First name
        owner_id: {
            type: DataTypes.INTEGER,
            reference: "user",
            referencesKey: "id"
        }
    });

    return Events;
};