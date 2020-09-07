import React, { useState } from "react";
import InviteFriendsButton from "./invite-friends-button.jsx";
import InviteParentsButton from "./invite-parents-button.jsx";
import { Link } from "react-router-dom";
import { pendingInvitesForBook } from "../graphql/pending-invites-for-book-query.ts";
import { useQuery, useMutation } from "@apollo/react-hooks";
import NotificationModal from "./notification-modal.jsx";
import { dismissFriendInvite } from "../graphql/dismiss-friend-invite-mutation.ts";
import { acceptFriendInvite } from "../graphql/accept-friend-invite-mutation.ts";

const BookDetailsSection = ({ book }) => {
  const { data } = useQuery(pendingInvitesForBook, {
    variables: { bookUrl: window.location.href },
  });

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [canSeeBanner, setCanSeeBanner] = useState(true);

  const [acceptInvite] = useMutation(acceptFriendInvite);
  const [dismissInvite] = useMutation(dismissFriendInvite);

  const handleCloseBanner = () => {
    dismissInvite({
      variables: {
        input: {
          inviteId: data?.pendingInvitesForBook[0].id,
        },
      },
    }).then(() => {
      setCanSeeBanner(false);
    });
  };

  const handleReadClick = () => {
    acceptInvite({
      variables: {
        input: {
          inviteId: data?.pendingInvitesForBook[0].id,
        },
      },
    }).then(() => {
      localStorage.setItem(
        "jitsiCode",
        data?.pendingInvitesForBook[0].jitsiCode
      );
      window.location.href = "../reading-room";
    });
  };

  return (
    <center>
      {data?.pendingInvitesForBook.length > 0 && (
        <NotificationModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          inviterName={data?.pendingInvitesForBook[0].inviter.name}
          invitedFriendsNames={data?.pendingInvitesForBook[0].invitedFriends.map(
            (friend) => friend.name
          )}
          jitsiCode={data?.pendingInvitesForBook[0].jitsiCode}
          inviteId={data?.pendingInvitesForBook[0].id}
        />
      )}
      {data?.pendingInvitesForBook.length > 0 && canSeeBanner && (
        <div
          style={{
            background: "#EFE8FF",
            borderRadius: 7,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "7px 15px",
            width: "75%",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              color: "#6B5CD6",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <b style={{ marginRight: 10 }}>
              {data?.pendingInvitesForBook[0].inviter.name}
            </b>
            está te convidando para uma roda de leitura!
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: "40%" }}>
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
              <b>Entrar na roda de leitura</b>
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
              onClick={handleCloseBanner}
            >
              <img
                src={require("../../assets/images/cross.png")}
                style={{ marginRight: 5 }}
              />
              <b>Não quero participar</b>
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "75%",
          marginBottom: 30,
        }}
      >
        <div>
          <img src={require("../../assets/images/pequeno_principe_capa.jpg")} />
        </div>
        <div style={{ marginLeft: 50, textAlign: "left" }}>
          <div style={{ marginBottom: 34, fontSize: 30, fontWeight: "bold" }}>
            {book.title}
          </div>
          <div style={{ marginBottom: 34, fontSize: 15 }}>
            <b>Autor(a):</b> {book.author}
            <br />
            <b>Editora:</b> {book.publishingCompany}
          </div>
          <div style={{ marginBottom: 20, fontSize: 15 }}>
            {book.description}
          </div>
          <div
            style={{
              background: "#F4F0FF",
              borderRadius: 5,
              display: "flex",
              marginBottom: 20,
              padding: "25px 10px",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <img src={require("../../assets/images/dont_read_alone.png")} />
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginBottom: 20,
                  textAlign: "left",
                }}
              >
                Ligue a câmera, o microfone e prepare-se para se divertir muito
                lendo com seus amigos, colegas ou seus pais.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <InviteFriendsButton />
                <InviteParentsButton />
              </div>
            </div>
            <img src={require("../../assets/images/childs.png")} />
          </div>
          <Link to="/reading-room">
            <button
              style={{
                width: "100%",
                background: "#45D0C1",
                borderRadius: "4px",
                color: "#FFFFFF",
                minHeight: 45,
                border: 0,
                cursor: "pointer",
              }}
            >
              Ler sozinho
            </button>
          </Link>
        </div>
      </div>
    </center>
  );
};

export default BookDetailsSection;
