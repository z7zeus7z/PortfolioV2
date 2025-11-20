import React, { useState } from 'react'
import style from '../../styles/Contacts.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';
const Contacts = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    });
     const [loading, setLoading] = useState(false); 
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_s4tlyg7",
            "template_3kaa5be",
            {
                name:formData.name,
                email:formData.email,
                message:formData.message,
            },
            "MUykEk_n_qRITsiaz"
        )
        .then(()=>{
            alert("✅ Message sent successfully!");
            setFormData({name:"",email:"",message:""});
        })
        .catch(()=>{
            alert("Failed to send message. Please try again.")
        })
        .finally(()=>{
            setLoading(false);
        })
    }
  return (
    <>
        <div id='contacts' className={style.contactsPageContainer}>
            <div className='wrapper'>
               <div className={style.contentContainer}>
                 <div className={style.contactCard} data-aos="fade-right" 
              data-aos-duration="1000">
                    <form onSubmit={handleSubmit}>
                        <div className={style.formTitle}><h4>Get in touch</h4></div>
                        <div className={style.formInputs}>
                            <div className={style.formInput}>
                                <label htmlFor="name">Fullname :</label>
                                <input placeholder='John Doe' name='name' type="text" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className={style.formInput}>
                                <label htmlFor="Email">Email :</label>
                                <input placeholder='JohnDoe@gmail.com' name='email' type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className={style.formInput}>
                                <label htmlFor="Message">Message :</label>
                                <textarea placeholder='Your Message' name="message" value={formData.message}
                                onChange={handleChange} required></textarea>
                            </div>
                            <div className={style.submit}>
                                <button disabled={loading} type='submit'>{loading?"Sending":"Send"}</button>
                            </div>
                        </div>
                    </form>
                 </div>
                 <div className={style.infoContainer} data-aos="fade-left" 
              data-aos-duration="1000">
                    <div className={style.info}>
                        <div className={style.myInfo}><FontAwesomeIcon icon={faPhone}/>: +962778980355</div>  
                        <div className={style.myInfo}><FontAwesomeIcon icon={faEnvelope}/>: Zaidsabbah89@gmail.com</div>  
                        <div className={style.myInfo}><FontAwesomeIcon icon={faLinkedin}/>: <a href="https://www.linkedin.com/in/zaid-sabbah-964038235/" target='_blank'>LinkedIn</a></div>  
                    </div>                    
                 </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Contacts