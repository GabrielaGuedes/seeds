import React, { Fragment, useState } from "react";
import SelectFriendsModal from "./select-friends-modal";

const InviteFriendsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <SelectFriendsModal
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(false)}
      />
      <button
        style={{
          background: "#8553F4",
          borderRadius: 2,
          margin: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "12px 26px",
          border: 0,
        }}
        onClick={handleClick}
      >
        <img src={require("../../assets/images/friend-hands.png")} />
        <div style={{ fontSize: 15, color: "#FFFFFF", marginLeft: 8 }}>
          Chame seus amigos!
        </div>
      </button>
    </Fragment>
  );
};

export default InviteFriendsButton;
