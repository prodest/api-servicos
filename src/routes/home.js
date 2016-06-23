module.exports = app => {

    const homeController = require( '../controllers/homeController' )();

    app.get( '/', homeController.getList );

    return app;
};
