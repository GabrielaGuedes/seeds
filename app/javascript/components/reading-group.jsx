import React, { useEffect } from "react";
import { useJitsi } from "react-jutsu";
import { currentStudent } from "../graphql/current-student-query.ts";
import { useQuery } from "@apollo/react-hooks";

const ReadingGroup = () => {
  const { data } = useQuery(currentStudent);
  const getRoomName = () => {
    const name = localStorage.getItem("jitsiCode") || "RodaDeLeitura2";
    localStorage.removeItem("jitsiCode");
    return name;
  };
  const roomName = getRoomName();
  const parentNode = "jitsi-container";
  const width = "100%";
  const height = "100%";
  const configOverwrite = {
    enableWelcomePage: false,
    requireDisplayName: false,
  };
  const interfaceConfigOverwrite = {
    SETTINGS_SECTIONS: ["language"],
    TOOLBAR_BUTTONS: ["microphone", "camera", "raisehand"],
    DEFAULT_BACKGROUND: "#2E3234",
    TILE_VIEW_MAX_COLUMNS: 2,
  };
  const jitsi = useJitsi({
    roomName,
    parentNode,
    width,
    height,
    interfaceConfigOverwrite,
    configOverwrite,
  });

  useEffect(() => {
    if (jitsi) {
      jitsi.addEventListener("videoConferenceJoined", () => {
        jitsi.executeCommand("displayName", data?.currentStudent.name);
      });
    }
    return () => jitsi && jitsi.dispose();
  }, [jitsi]);

  return <div style={jitsiContainer} id={parentNode} />;
};

const jitsiContainer = {
  height: "100vh",
  width: "25vw",
};

export default ReadingGroup;
