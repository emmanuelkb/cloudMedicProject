import "../styles/ChatOnline.css";
import img2 from "../images/img2.jpg";
import { useState } from "react";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [medic, setMedic] = useState([]);
  const [onlineMedic, setOnlineMedic] = useState([]);

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={img2} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName"> John Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
