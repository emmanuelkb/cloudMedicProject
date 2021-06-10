import "../styles/Conversation.css";
import img2 from "../images/img2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const medicId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:4000/user/medic/" + medicId);
        setUser(res.data.medic);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img className="conversationImg" src={img2} alt="" />
      <span className="conversationName">{user?.firstName}</span>
    </div>
  );
};

export default Conversation;
