import type { Timestamp } from "firebase/firestore";
import { auth } from "../firebase";
// import { Timestamp } from "firebase/firestore";
import { formatDate } from "../helpers";


interface MessageType {
  id: string;
  text: string;
  timestamp: Timestamp;
  uid: string;
  photo: string
}

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {

    let newStyle = 'message';
    if(auth.currentUser){
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        newStyle = user === newUser ? 'my-message' : 'message';
    }

    return (
            <article className={newStyle}>
              <div>
                <div className="text-message">
                    <p className="text">{message.text}</p>
                </div>
                <p className="time">{formatDate(message.timestamp)}</p>

              </div>
                <img src={message.photo} alt="" referrerPolicy="no-referrer"/>
            </article>
        
    )
}

export default Message;