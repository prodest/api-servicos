module.exports = app => {

    const unidadeController = require( '../controllers/unidadeController' )();

    app.get( '/unidade/:id', unidadeController.getSingle );

    return app;
};
