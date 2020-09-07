import React from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/react-hooks";
import { acceptFriendInvite } from "../graphql/accept-friend-invite-mutation.ts";

const NotificationModal = ({
  isOpen,
  setIsOpen,
  inviteId,
  inviterName,
  invitedFriendsNames,
  jitsiCode,
}) => {
  const [acceptInvite] = useMutation(acceptFriendInvite);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReadClick = () => {
    acceptInvite({
      variables: {
        input: {
          inviteId,
        },
      },
    }).then(() => {
      localStorage.setItem("jitsiCode", jitsiCode);
      window.location.href = "../reading-room";
    });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      borderRadius: 20,
      width: "40%",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        style={{
          backgroundColor: "#45D0C1",
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <img src={require("../../assets/images/horizontal_logo.png")} />
        <img
          style={{ cursor: "pointer" }}
          src={require("../../assets/images/back_button.png")}
          onClick={handleClose}
        />
      </div>
      <div style={{ padding: "30px 22px" }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginBottom: 25 }}
        >
          <center style={{ marginRight: 50 }}>
            <img src={require("../../assets/images/child1.png")} />
            {inviterName}
          </center>
          <div>
            <div style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
              Vem ler comigo!!!
            </div>
            <div style={{ marginBottom: 30 }}>
              <b>{inviterName}</b> está te convidando para sua roda leitura!
              Veja abaixo quem está convidado também:
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {invitedFriendsNames.map((name, index) => {
                const childNum = index + 2 > 4 ? 4 : index + 2;
                return (
                  <center style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <img
                        src={require(`../../assets/images/child${childNum}.png`)}
                      />
                    </div>
                    {name}
                  </center>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            style={{
              background: "#45D0C1",
              borderRadius: 4,
              width: "100%",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              minHeight: "45px",
              border: 0,
              cursor: "pointer",
            }}
            onClick={handleReadClick}
          >
            <img
              src={require("../../assets/images/little_book.png")}
              style={{ marginRight: 5 }}
            />
            Entrar na roda de leitura
          </button>
          <button
            style={{
              background: "none",
              borderRadius: 4,
              width: "100%",
              color: "#8553F4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "45px",
              border: 0,
              cursor: "pointer",
              border: "0.8px solid #8553F4",
            }}
            onClick={handleClose}
          >
            <img
              src={require("../../assets/images/cross.png")}
              style={{ marginRight: 5 }}
            />
            Não quero participar agora
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
