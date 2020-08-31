module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        event_start: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_end: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    Event.associate = (db) => {
        Event.belongsTo(db.User, { foreignKey: "ownerId" })
        Event.belongsToMany(db.User, {
            through: db.UserEvent,
            as: "event",
            foreignKey: "eventId",
            otherKey: "userId"
        });
    };
    return Event;
};