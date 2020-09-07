import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import toaster from "toasted-notes";
import { signup } from "../graphql/signup-mutation.ts";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");

  const [signupToApp] = useMutation(signup);

  const handleLogin = () => {
    signupToApp({
      variables: {
        input: {
          email,
          password,
          name,
          phoneNumber,
          parentPhoneNumber,
        },
      },
    })
      .then(() => {
        window.location.href = "../";
      })
      .catch(() => {
        toaster.notify(
          () => (
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
                  Ops... Algo deu errado
                </div>
                <div style={{ fontSize: 15 }}>Esse e-mail já está em uso</div>
              </center>
            </div>
          ),
          {
            position: "top",
            duration: 2000,
          }
        );
      });
  };

  return (
    <center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "50px 0px",
          width: "50%",
        }}
      >
        <img src={require("../../assets/images/logo_verde.svg")} />
        <div
          style={{
            marginTop: 100,
            marginBottom: 8,
            textAlign: "initial",
          }}
        >
          Nome completo
        </div>
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(223, 226, 231)",
            minHeight: 45,
            marginBottom: 20,
          }}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target?.value);
          }}
          placeholder="Ex: João da Silva"
        />
        <div
          style={{
            marginBottom: 8,
            textAlign: "initial",
          }}
        >
          E-mail
        </div>
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(223, 226, 231)",
            minHeight: 45,
            marginBottom: 20,
          }}
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target?.value);
          }}
          placeholder="Ex: joao@gmail.com"
        />
        <div
          style={{
            marginBottom: 8,
            textAlign: "initial",
          }}
        >
          Número de telefone - Importante: deve estar no seguinte formato:
          +5511912345678
        </div>
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(223, 226, 231)",
            minHeight: 45,
            marginBottom: 20,
          }}
          type="text"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target?.value);
          }}
          placeholder="Ex: +5511912345678"
        />
        <div
          style={{
            marginBottom: 8,
            textAlign: "initial",
          }}
        >
          Número de telefone dos pais - Importante: deve estar no seguinte
          formato: +5511912345678
        </div>
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(223, 226, 231)",
            minHeight: 45,
            marginBottom: 20,
          }}
          type="text"
          value={parentPhoneNumber}
          onChange={(event) => {
            setParentPhoneNumber(event.target?.value);
          }}
          placeholder="Ex: +5511912345678"
        />
        <div
          style={{
            marginBottom: 8,
            textAlign: "initial",
          }}
        >
          Senha
        </div>
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(223, 226, 231)",
            minHeight: 45,
            marginBottom: 20,
          }}
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target?.value);
          }}
          placeholder="Insira sua senha"
        />
        <button
          style={{
            background: "rgb(67, 208, 194)",
            borderRadius: 9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            border: 0,
            minHeight: 45,
            cursor: email === "" || password === "" ? "not-allowed" : "pointer",
          }}
          disabled={email === "" || password === ""}
          onClick={handleLogin}
        >
          <b>Acessar</b>
        </button>
      </div>
    </center>
  );
};

export default SignupPage;
