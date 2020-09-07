import React, { Fragment, useState } from 'react';
import ReadingGroup from './reading-group';
import LePetitPrince from './le-petit-prince';
import {InfoCircleFilled} from '@ant-design/icons';
import SecurityInfoModal from './security-info-modal';
import { Link } from 'react-router-dom';

const ReadingRoom = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <Fragment>
            <SecurityInfoModal isModalVisible={isModalVisible} onCloseModal={() => setIsModalVisible(false)}/>
            <div style={roomContainer}>
                <div style={bookContainer}>
                    <img  style={logoArvore} src={require('../../assets/images/horizontal_logo.png')}/>
                    <div style={headerContainer}>
                        <div style={securityInfoContainer} onClick={() => setIsModalVisible(true)}>
                        <InfoCircleFilled  style={securityInfoIcon}/>
                        <span>Informações de Privacidade e Segurança</span>
                        </div>
                        <Link to="/pequeno-principe">
                            <button style={leftRoomButton}>
                                Sair da roda de leitura
                            </button>
                        </Link>
                    </div>
                    <LePetitPrince />
                </div>
                <ReadingGroup />
            </div>
        </Fragment>
    )
}

const roomContainer = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2E3234',
}

const bookContainer = {
    flex: 1,
    maxWidth: '1177px'
}

const logoArvore ={
    marginLeft: '40px',
    marginTop: '20px',
}

const headerContainer = {
    marginLeft: '40px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '12px',
    color: '#A0A0A0'
}

const securityInfoContainer = {
    display: 'flex',
    position: 'absolute',
    left: '0px',
    alignItems: 'center',
    cursor: 'pointer'
}

const securityInfoIcon = {
    marginRight: '12px',
}

const leftRoomButton = {
    position: 'relative',
    right: '100px',
    backgroundColor: '#4E4E4E',
    color: '#A0A0A0',
    width: '200px',
    border: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderRadius: '5px',
    cursor: 'pointer'
}

export default ReadingRoom;