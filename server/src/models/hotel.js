module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define('hotels', {
        hotel_name: DataTypes.STRING,
        hotel_price: DataTypes.STRING,
        hotel_smoking: DataTypes.INTEGER,
        hotel_badroom: DataTypes.INTEGER,
        number_house: DataTypes.STRING,
        street: DataTypes.STRING,
        Sub_Dristict: DataTypes.STRING,
        Dristict: DataTypes.STRING,
        Country: DataTypes.STRING,
        Provice: DataTypes.STRING,
        Past_Code: DataTypes.STRING,
    })
    return hotel
}