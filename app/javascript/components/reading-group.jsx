import React, { useEffect } from 'react'
import { useJitsi } from 'react-jutsu'

const ReadingGroup = () => {
  const roomName = 'RodaDeLeitura'
  const parentNode = 'jitsi-container'
  const width = '100%'
  const height = "100%"
  const interfaceConfigOverwrite = {
    SETTINGS_SECTIONS: ['language'],
    TOOLBAR_BUTTONS: ['microphone', 'camera', 'raisehand'],
    DEFAULT_LOGO_URL: '',
    DEFAULT_BACKGROUND: '#2E3234',
    TILE_VIEW_MAX_COLUMNS: 2
  }
  const jitsi = useJitsi({ roomName, parentNode, width, height, interfaceConfigOverwrite })

  useEffect(() => {
    if (jitsi) {
        jitsi.addEventListener('videoConferenceJoined', () => {
        jitsi.executeCommand('displayName', 'Naruto Uzumaki')
      })
    }
    return () => jitsi && jitsi.dispose()
  }, [jitsi])

  return <div style={jitsiContainer} id={parentNode} />
}

const jitsiContainer = {
    height: '100vh',
    width: '25vw'
}

export default ReadingGroup;