// const { Hotel } = require('../models')

const { Op } = require("sequelize");
const db = require("../models");
const Hotel = db.hotel;
module.exports = {
    // get all user
    async getAllhotel(req, res) {
        try {
            if (req.query.seach) {
                const seach = await Hotel.findAll({
                    where: {
                        [Op.or]: [
                            { hotel_name: { [Op.like]: '%' + req.query.seach + '%' } },
                        ],
                    }
                })
                res.send(seach)
            } else {
                const users = await Hotel.findAll()
                // console.log(users);
                res.send(users)
            }

        } catch (err) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },

    
    // create user
    async create(req, res) {

        try {
            const payloads = req.body.payload.payload
            const user = await Hotel.create({
                hotel_name: payloads.hotel_name,
                hotel_price: payloads.hotel_price,
                hotel_smoking: payloads.hotel_smoking,
                hotel_badroom: payloads.hotel_badroom,
                number_house: payloads.number_house,
                street: payloads.street,
                Sub_Dristict: payloads.Sub_Dristict,
                Dristict: payloads.Dristict,
                Provice: payloads.Provice,
                Country: payloads.Country,
                Past_Code: payloads.Past_Code
            })
            res.send(user.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },
    async getIdhotel(req, res) {
        try {
            const user = await Hotel.findByPk(req.params.hotelId)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const user = await Hotel.findOne({
                where: {
                    id: req.params.hotelId
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }
            await user.destroy()
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },
    // // get user by id
    // async show(req, res) {
    //     try {
    //         const user = await User.findByPk(req.params.userId)
    //         res.send(user)
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The user information was incorrect'
    //         })
    //     }
    // },

    // async allAccess(req, res) {
    //     try {
    //         res.status(200).send("Public Content.");
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The user information was incorrect'
    //         })
    //     }
    // },

    // async userBoard(req, res) {
    //     try {
    //         res.status(200).send("Public Content.");
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The user information was incorrect'
    //         })
    //     }
    // }
}