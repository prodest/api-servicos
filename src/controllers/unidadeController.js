const xml = require( 'xml' );
const config = require( '../config/app.js' );

const orgaos = require( '../dados.json' );

const baseUrl = config.baseUrl + config.path;

module.exports = () => {
    var unidadeController = new Object();

    unidadeController.getSingle = ( req, res ) => {

        const codigo = req.params.id;

        const unidade = orgaos.unidades
            .filter( a => a.codigoUnidade === codigo )[ 0 ];

        var resp = {
            resultadoConsultarUnidadeResumida: [
                {
                    servico: [
                        { codigoErro: 0 },
                        { data: new Date().toISOString().slice( 0, 10 ) },
                        { ipRequisitante: '179.212.163.182' },
                        { mensagem: 'Processamento sem erros' },
                        { versaoServico: null }
                    ]
                },
                {
                    unidade: [
                        { codigoUnidade: baseUrl + '/unidade/' + codigo },
                        { nome: unidade.nome },
                        { sigla: '' },
                        { versaoConsulta: '99.0.0' }
                    ]
                }
            ]
        };

        res.set( 'Content-Type', 'text/xml' );
        return res.send( '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + xml( resp ) );
    };

    return unidadeController;
};
