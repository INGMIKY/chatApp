import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";

interface MessageType {
  id: string;
  text: string;
  timestamp: Timestamp;
  uid: string;
  photo: string;
}



const Chat = () => {

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [user] = useAuthState(auth);

    
    const getMessage =  () => {
        try{
            const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));
            

            const unsubscribe = onSnapshot(newQuery, (querySpanshot)=>{
                const currentMessages: MessageType[]= [];
                querySpanshot.forEach(item => {

                    const data = item.data() as { text: string; timestamp: Timestamp; uid: string; photo:string, };

                    currentMessages.push({ id: item.id, ...data })
                    console.log('datos:', item.data())
                })
                setMessages(currentMessages)
            })

            return unsubscribe;
            
        }catch(error){
            console.error('Hubo un problema al conectarse a la db', error)
        }
    }
    
    useEffect(()=> {
        getMessage()
    },[])

    

    return (
        <section className="chat-content">
            { messages && messages.map((item)=>(
                <Message key={item.id} message={item}/>
            ))}
            {user && <SendMessage />}
            
        </section>
    )
}

export default Chat;