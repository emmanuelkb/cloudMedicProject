import "../styles/Conversation.css";
import img2 from "../images/img2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState({ firstName: "Emmanuel" });

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios(
          "http://localhost:4000/user?userId=" + friendId
        );
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img className="conversationImg" src={img2} alt="" />
      <span className="conversationName">{user.firstName}</span>
    </div>
  );
};

export default Conversation;
