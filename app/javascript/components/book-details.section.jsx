import React from "react";
import InviteFriendsButton from "./invite-friends-button.jsx";
import InviteParentsButton from "./invite-parents-button.jsx";
import { Link } from "react-router-dom";

const BookDetailsSection = ({ book }) => {
  return (
    <center>
      <div style={{ display: "flex", flexDirection: "row", width: "75%" }}>
        <img src={require("../../assets/images/pequeno_principe_capa.jpg")} />
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
