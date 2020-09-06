import React from 'react';
import ReadingGroup from './reading-group';
import LePetitPrince from './le-petit-prince';

const ReadingRoom = () => {

    return (
    <div style={roomContainer}>
        <div style={bookContainer}>
            livro
        </div>
        <ReadingGroup />
    </div>)
}

const roomContainer = {
    display: 'flex',
    backgroundColor: '#2E3234',
}

const bookContainer = {
    flex: 1
}

export default ReadingRoom;