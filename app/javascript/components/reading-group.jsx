import React, { useEffect } from 'react'
import { useJitsi } from 'react-jutsu'

const ReadingGroup = () => {
  const roomName = 'RodaDeLeitura2'
  const parentNode = 'jitsi-container'
  const width = '100%'
  const height = "100%"
  const configOverwrite = {
    enableWelcomePage: false,
    requireDisplayName: false,
  }
  const interfaceConfigOverwrite = {
    SETTINGS_SECTIONS: ['language'],
    TOOLBAR_BUTTONS: ['microphone', 'camera', 'raisehand'],
    DEFAULT_BACKGROUND: '#2E3234',
    TILE_VIEW_MAX_COLUMNS: 2,
  }
  const jitsi = useJitsi({ roomName, parentNode, width, height, interfaceConfigOverwrite, configOverwrite })

  useEffect(() => {
    if (jitsi) {
        jitsi.addEventListener('videoConferenceJoined', () => {
        jitsi.executeCommand('displayName', 'Carolina Arakaki')
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