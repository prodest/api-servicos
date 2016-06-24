const orgaos = require( '../dados.json' );
const config = require( '../config/app.js' );

const baseUrl = config.baseUrl + config.path;

module.exports = () => {
    var homeController = new Object();

    homeController.getList = ( req, res ) => {

        const unidades = orgaos.unidades.map( a => {
            return {
                codigoUnidade: baseUrl + '/unidade/' + a.codigoUnidade,
                nome: a.nome
            };
        } );

        return res.json( {
            'servico': {
                'codigoErro': 0,
                'mensagem': 'Processamento sem erros',
                'data': new Date().toISOString().slice( 0, 10 ),
                'versaoServico': 'NovoSIORG-Servicos-2.4.3',
                'ipRequisitante': '179.212.163.182',
                'ticket': null
            },
            'unidades': unidades
        } );
    };

    return homeController;
};
