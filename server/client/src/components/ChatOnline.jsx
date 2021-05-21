import "../styles/ChatOnline.css";
import img2 from "../images/img2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [medic, setMedic] = useState([]);
  const [onlineMedic, setOnlineMedic] = useState([]);

  useEffect(() => {
    const getMedic = async () => {
      const res = await axios.get(
        "http://localhost:4000/user/medic/" + currentId
      );
      setMedic(res.data.medic);
    };
    getMedic();
  }, [currentId]);

  useEffect(() => {
    setOnlineMedic(medic);
  }, [medic, onlineUsers]);

  const handleClick = async (medic) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/conversation/find/${currentId}/${medic._id}`
      );
      setCurrentChat(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      <div
        className="chatOnlineFriend"
        onClick={() => {
          handleClick(medic);
        }}
      >
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={img2} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">
          {medic.firstName + " " + medic.lastName}
        </span>
      </div>
    </div>
  );
};

export default ChatOnline;
