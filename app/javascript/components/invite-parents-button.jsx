import React, { Fragment, useState } from "react";
import { sendInviteToParents } from "../graphql/send-invite-to-parents-mutation.ts";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { currentStudent } from "../graphql/current-student-query.ts";
import toaster from "toasted-notes";

const InviteParentsButton = () => {
  const { data } = useQuery(currentStudent);
  const [inviteParents] = useMutation(sendInviteToParents);

  const handleClick = () => {
    toaster.notify(
      ({ _onClose }) => (
        <div
          style={{
            marginTop: 15,
            borderRadius: 20,
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              backgroundColor: "#45D0C1",
              display: "flex",
              justifyContent: "center",
              padding: 12,
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <img src={require("../../assets/images/horizontal_logo.png")} />
          </div>
          <div
            style={{
              padding: "17px 30px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "#FFFFFF",
              borderRadius: "0px 0px 20px 20px",
            }}
          >
            <img
              src={require("../../assets/images/mail.png")}
              style={{ marginRight: 22 }}
            />
            <div>
              <div
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
              >
                Enviando o convite...
              </div>
              <div style={{ fontSize: 15 }}>
                Enviando mensagem com o convite.
              </div>
            </div>
          </div>
        </div>
      ),
      {
        position: "top",
      }
    );
    inviteParents({
      variables: {
        input: {
          message: `${data?.currentStudent.firstName} está te chamando para uma leitura em família! :D`,
        },
      },
    }).then(() => {
      setTimeout(
        () =>
          toaster.notify(
            ({ _onClose }) => (
              <div
                style={{
                  marginTop: 15,
                  borderRadius: 20,
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#45D0C1",
                    display: "flex",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  <img
                    src={require("../../assets/images/horizontal_logo.png")}
                  />
                </div>
                <center
                  style={{
                    padding: "17px",
                    background: "#FFFFFF",
                    borderRadius: "0px 0px 20px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    Convite enviado!
                  </div>
                  <div style={{ fontSize: 15 }}>
                    Combine um momento para que eles possam ler com você.
                  </div>
                </center>
              </div>
            ),
            {
              position: "top",
            }
          ),
        5000
      );
    });
  };

  return (
    <Fragment>
      <button
        style={{
          background: "none",
          borderRadius: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "6px 26px",
          border: "0.8px solid #8553F4",
          marginRight: 10,
        }}
        onClick={handleClick}
      >
        <img src={require("../../assets/images/parents_hands.png")} />
        <div style={{ fontSize: 15, color: "#8553F4", marginLeft: 8 }}>
          Chame seus pais!
        </div>
      </button>
    </Fragment>
  );
};

export default InviteParentsButton;
