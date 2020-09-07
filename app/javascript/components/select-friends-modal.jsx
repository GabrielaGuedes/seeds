import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { students } from "../graphql/students-query.ts";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { inviteFriends } from "../graphql/invite-friends-mutation.ts";
import { Link } from 'react-router-dom';

const SelectFriendsModal = ({ isOpen, setIsOpen }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data } = useQuery(students);
  const [inviteFriendsToCall] = useMutation(inviteFriends);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCallFriendsClick = () => {
    inviteFriendsToCall({
      variables: {
        input: {
          studentIds: selectedOptions.map((student) => student.value),
          bookUrl: window.location.href,
        },
      },
    }).then(() => {
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

  const options =
    data &&
    data.students.map((student) => ({
      value: student.id,
      label: student.firstName,
    }));

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
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
          src={require("../../assets/images/back_button.png")}
          onClick={handleClose}
        />
      </div>
      <div style={{ padding: "30px 22px 17px" }}>
        <div style={{ fontSize: 30, fontWeight: "bold", marginBottom: 19 }}>
          Chame seus amigos!!!
        </div>
        <div
          style={{
            color: "#52656f",
            fontSize: 15,
            marginBottom: 19,
            display: "flex",
            flexDirection: "row",
          }}
        >
          Envie um convite para que eles entrem em sua roda de leitura!
        </div>
        <div
          style={{
            color: "#52656f",
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Selecione até 8 amigos
        </div>
        <Select
          options={options}
          defaultValue={selectedOptions}
          onChange={setSelectedOptions}
          isMulti
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 17,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 1
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[0]?.label || "Vazia"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 2
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[1]?.label || "Vazia"}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 8 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 3
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[2]?.label || "Vazia"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 4
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[3]?.label || "Vazia"}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 8 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 5
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[4]?.label || "Vazia"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 6
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[5]?.label || "Vazia"}
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginBottom: 17 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 7
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[6]?.label || "Vazia"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "13px 18px",
              backgroundColor: "#EDF3F7",
              width: "100%",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#8dacbc", fontSize: "12px", marginRight: 15 }}
            >
              Cadeira 8
            </div>
            <div
              style={{ color: "#52656f", fontSize: "18px", fontWeight: "bold" }}
            >
              {selectedOptions[7]?.label || "Vazia"}
            </div>
          </div>
        </div>
        <Link to="/reading-room" style={{textDecoration: 'none'}}>
          <button
            style={{
              background: selectedOptions.length === 0 ? "#F5FBFF" : "#8553F4",
              borderRadius: 4,
              width: "100%",
              color: selectedOptions.length === 0 ? "#C8CED1" : "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "45px",
              border: 0,
              cursor: selectedOptions.length === 0 ? "not-allowed" : "pointer",
              
            }}
            disabled={selectedOptions.length === 0}
            onClick={handleCallFriendsClick}
          >
            Chamar amigos
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default SelectFriendsModal;
