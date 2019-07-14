import React, {Component} from 'react';

class Introduction extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-6">
                    <h2>Decisão do STF</h2>
                    <p>Em 1º de março de 2018, o Supremo Tribunal Federal aprovou a alteração de registro civil por travestis e transexuais sem que seja necessária a realização de procedimento cirúrgico.</p>
                    <p> A decisão define não ser mais necessária qualquer autorização judicial para que seja realizada a alteração do registro civil ou ainda a comprovação de realização de procedimentos cirúrgicos ou acompanhamento médico ou psicológico, sendo necessário apenas o procedimento no cartório de registro civil.</p>
                    <a href="http://www.stf.jus.br/PORTAL/CMS/VERNOTICIADETALHE.ASP?IDCONTEUDO=371085"> Saiba mais sobre a decisão </a>
                </div>

                <div className="col-6">
                    <h3>Alterações permitidas:</h3>
                    <ul>
                        <li>Nome</li>
                        <li>Agnomes de gênero</li>
                        <li>Gênero em certidões de nascimento</li>
                        <li>Gênero em certidões de casamento, desde que haja autorização do cônjuge</li>
                    </ul>
                    <h3>Quem pode fazer o pedido de retiicação?</h3>
                    <p>Maiores de 18 anos que não tenham entrado na justiça com pedido judicial de mudança</p>
                </div>
            </div>
        );
    }
};

export default Introduction;