import React, {Component} from 'react';

class Registry extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <h2>Cartório</h2>
                    <p>Quem desejar alterar o nome e gênero no seu registro civil de nascimento pode procurar diretamente, sem a presença de advogado ou defensor público, qualquer cartório de registro civil de pessoas naturais (RCPN) para que seja realizada a alteração.</p>
                    <p>O pedido pode ser realizado em qualquer cartório, que deverá encaminhar o procedimento ao cartório que registrou o nascimento (ou ser feito diretamente no cartório do registro)</p>

                    <h3>Consulte aqui o cartório mais próximo de você:</h3>
                </div>
            </div>
        );
    }
};

export default Registry;