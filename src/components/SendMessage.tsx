import { useState, type ChangeEvent, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from "../firebase";
import EmojiPicker, {type EmojiClickData } from "emoji-picker-react";

const SendMessage = () => {

    const [input, setInput] = useState('')
    // console.log(input)
    const [open, setOpen] = useState('close')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

         if (!auth.currentUser) {
            console.error("No hay usuario autenticado");
            return;
        }

        const {uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName, 
            uid,
            photo: photoURL,
            timestamp: serverTimestamp(),
        })
        setInput('');
    }

    const emoji = () => {
        setOpen('open');
    }

    const closeEmoji = () => {
        setOpen('close');
    }

    const onEmojiClick = (emojiObject: EmojiClickData) => {
        console.log(emojiObject);
        setInput((prev) => `${prev}${emojiObject.emoji}`);
    };

    return (
        <form onSubmit={sendMessage}>
            <button type="button" className="btn-emoji" onClick={emoji}>
                <i className="fa-solid fa-face-laugh-squint"></i>
            </button>
            <div className={open}>
                <button type="button" className="close-emoji" onClick={closeEmoji}>
                    <i className="fa-solid fa-x"></i>
                </button>
                <EmojiPicker onEmojiClick={onEmojiClick}/> 
            </div>
            <input type="text" name="" id="" placeholder="Enter yout message here" value={input} onChange={handleChange}/>
            <button> Send</button>
        </form>
    )
}

export default SendMessage;