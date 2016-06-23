
module.exports = () => {
    var homeController = new Object();

    homeController.getList = ( req, res ) => {
        return res.send( 'Hi' );
    };

    return homeController;
};
