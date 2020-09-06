import React from 'react';
import {LeftCircleFilled} from '@ant-design/icons';

const SecurityInfoModal = props => {

    return (<div style={props.isModalVisible ? fullscreenContainer : displayNone} onClick={() => props.onCloseModal()}>
        <div style={modalContainer} onClick={e => e.stopPropagation()}>
            <div style={modalHeaderContainer}>
                <img src={require('../../assets/images/horizontal_logo.png')}/>
                <button  style={modalHeaderButton} onClick={() => props.onCloseModal()}>
                    <LeftCircleFilled style={modalHeaderButtonIcon}/>
                    <span>Voltar para a roda</span>
                </button>
            </div>
            <div style={modalContentContainer}>
                <p>A Árvore tem o compromisso de proteger a privacidade das crianças que usam nossos sites e aplicativos. Esta política de privacidade online para crianças explica nossas práticas de consentimento dos pais, coleta de informações e divulgação de informações fornecidas por crianças menores de 13 anos (“criança” ou “crianças”) e utiliza termos definidos em nossa política de privacidade geral. Esta política está de acordo com a Lei de Proteção de Privacidade On-line de Crianças dos EUA (“COPPA”) e descreve nossas práticas na América Latina em relação às informações pessoais das crianças. </p>
                <p>Os sites e aplicativos móveis destinados aos alunos inscritos na Árvore estão incluídos no Programa de certificação Safe Harbor (“o Programa”) com privacidade da criança assegurada pela COPPA da PRIVO. A certificação do Programa é aplicada às propriedades digitais mencionadas na página de validação que pode ser vista clicando-se no selo PRIVO. A PRIVO é uma organização de terceiros independente que tem o compromisso de proteger as informações pessoais coletadas on-line de crianças. A PRIVO visa ajudar os pais e seus filhos a exercer controle sobre as informações pessoais quando exploram a Internet. O selo de certificação PRIVO COPPA publicado nesta página indica que a Árvore implantou as práticas de privacidade em conformidade com a COPPA e concordou em submeter-se ao processo de supervisão e resolução de disputas de clientes da PRIVO. Se você tiver dúvidas ou preocupações sobre nossas práticas de privacidade, entre em contato conosco em (00) 0000-0000 ou privacycontact@arvore.com.br Se você tiver mais dúvidas após entrar em contato conosco, contate a PRIVO diretamente em privacy@privo.com.</p>
            </div>
        </div>
    </div>)
}

const fullscreenContainer = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100%',
    background: '#0009',
    display: 'flex',
    justifyContent: 'center'
}

const displayNone={
    display: 'none'
}

const modalContainer = {
    marginTop: '150px',
    width: '1100px',
    borderRadius: '20px',
    overflow: 'hidden',
    background: 'white',
    height: 'fit-content'
}

const modalHeaderContainer = {
    background: '#45D0C1',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 45px',
    alignItems: 'center'
}

const modalHeaderButton = {
    display: 'flex',
    alignItems: 'center',
    background: '#D4FFFA',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    color: '#45D0C1'
}

const modalContentContainer = {
    padding: '12px 45px',
}
 
const modalHeaderButtonIcon = {
    marginRight: '12px'
}
export default SecurityInfoModal;