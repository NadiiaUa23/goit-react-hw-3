import style from './Contact.module.css'
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

const Contact =({ id, name, number, onDeleteContact}) => {
return (
    <div className={style.box}>
        <li className={style.etm}>
        <span className={style.contactName} >
        <FaUser className={style.icon}/>{name}</span> 
        <span className={style.contactNumber}>
        <FaPhoneAlt className={style.icon}/>{number}</span>
        </li>
            <button  className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
            </button>  
    </div>
);
};

export default  Contact;