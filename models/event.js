module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            reference: "user",
            referencesKey: "id"
        },
        event_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        event_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        event_end: {
            type: DataTypes.TIME,
            allowNull: true
        }
    });
    Event.associate = (db) => {
        Event.belongsToMany(db.User, { through: 'event_user' });
    };
    return Event;
};