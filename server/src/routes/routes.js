const UserController = require('../controllers/UserController')
const HotelController = require('../controllers/HotelController')
module.exports = (app) => {

    // create user
    app.post('/user',
        UserController.create
    )
    // edit user
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        UserController.index
    )

    app.post('/createHotel',
        HotelController.create
    )
    // get all hotel
    app.get('/hotels',
        HotelController.getAllhotel
    )
    //get hotel Id 
    app.get('/hotelId/:hotelId',
        HotelController.getIdhotel
    )
    // delete hotel
    app.delete('/hotel/:hotelId',
        HotelController.remove
    )
    // seach hotel
    // app.post('/hotelseach',
    // HotelController.seach
    // )


}