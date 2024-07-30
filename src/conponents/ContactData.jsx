import './ContactData.css'
import { useRef , useState} from 'react'
import emailjs from '@emailjs/browser';
function ContactData(){
    const form = useRef()
    const [send,setSend] = useState()
    const [message,setMessage] = useState()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_y4g8een', 'template_r2m4thg', form.current, {
            publicKey: 'g_Q6Nmrc1Q2alThsX',
        })
        .then(
            ()=>{
            console.log('SUCCESS!');
                const interval = setInterval(()=>{
                    setSend("message-send");
                    setMessage("Message send successful")
                },1)
                setTimeout(()=>{
                    clearInterval(interval)
                    setSend("");
                    setMessage("")
                },3000)
            
            },
            (error) => {
            console.log('FAILED...', error.text);
            const interval2 = setInterval(()=>{
                setSend("message-error");
                setMessage("Message failed...")
            },1)
            setTimeout(()=>{
                clearInterval(interval2)
                setSend("");
                setMessage("")
            },4000)
            }
        );
        e.target.reset()
    }; 
    return(
        <>
        <div className="contact-div">
        <h1>Send a message to us!</h1>
        <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" placeholder="Name" name="user-name"/>
            <input type="email" placeholder="E-mail" name="user-email" />
            <input type="text" placeholder="Subject" name="user-subject" />
            <textarea rows="4" placeholder="Message" name="user-message"></textarea>
            <button type="submit">Send Message</button>
            <div className={send}>{message}</div>
        </form>

        </div>

        </>
    )
}
export default ContactData