import React, {Component} from 'react';
import {docx} from './../../docs/Modelo-de-requerimento.docx'

class Checklist extends Component{

    render(){
        return(
            <div>
                <h3>Checklist dos documentos necessários</h3>
                <form>
                    <p><input type="checkbox" name="favorite1" value="chocolate" /> Certidão de nascimento original</p>
                    <p><input type="checkbox" name="favorite2" value="vanilla" /> Cópia do RG</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia do CPF</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia do título de eleitor</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Comprovante de endereço</p>
                    <hr></hr>
                    <p> Se você for o caso:</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia do passaporte</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia da CNH</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Dispensa do exército</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia da certidão de casamento</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia da identificação civil nacional</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Cópia da carteira de identidade social</p>

                    <hr></hr>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Certidão do distribuidor cível do local de residência dos últimos cinco anos (estadual/federal)</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> certidão do distribuidor criminal do local de residência dos últimos cinco anos (estadual/federal)</p>
                    <p><input type="checkbox" name="favorite3" value="mint" /> certidão de execução criminal do local de residência dos últimos cinco anos (estadual/federal)</p>
                    <p>[Estadual] Acesse <a href="http://www.pf.gov.br/servicos-pf/armas/normativos/certidoes-criminais-negativas">Policia Federal</a>, na linha referente a sua região, encontre o site e procure “certidões”. Clique em “Cadastro de Pedido de Certidão de 1º Grau”, wscolha a sua cidade em “comarca” e depois escolha em modelo “Web ação cível”. Preencha com os dados e clique em enviar. Repita os procedimentos escolhendo “web ação criminal”. Caso não consiga emitir online: procure o fórum da sua região, peça por certidão de “Antecedentes criminais da Justiça Estadual” (gratuito)</p>
                    <p>[Federal] Acesse <a href="http://www.stf.jus.br/portal/certidao/solicitarCertidao.asp …"> STF</a>, selecione certidão de distribuição, preencha os dados, escolha por email e clique em enviar. Repita os procedimentos escolhendo “Certidão de antecedentes criminais” </p>
                    <hr></hr>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Certidão dos tabelionatos de protestos no local de residência nos últimos 5 anos.</p>
                    <hr></hr>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Certidão da Justiça Eleitoral do local de residência dos últimos cinco anos.</p>
                    <p>Acesse <a href="https://t.co/Wx2mgqFZ2C"> TSE </a>, clique em "Quitação Eleitoral, preencha os dados e clique em "emitir"</p>
                    <hr></hr>
                    <p><input type="checkbox" name="favorite3" value="mint" /> Certidão da Justiça do Trabalho.</p>
                    <p>Acesse <a href="https://t.co/QCi0AHn10S"> TST </a>, ache o tribunal da sua região, procure por "certidões", acesse "Certidão Negativa de Débitos Trabalhistas". Emita a certidão e preencha os dados.</p>
                </form>
                <p> Clique abaixo para baixar um modelo de requerimento para alteração do registro civil </p>
                <a href="/Modelo-de-requerimento.docx" class="btn btn-primary" download>Modelo em .docx</a>
                <a href="/modelo-de-requerimento.pdf" class="btn btn-secondary" download>Modelo em .pdf</a>

            </div>
        );
    }
};

export default Checklist;