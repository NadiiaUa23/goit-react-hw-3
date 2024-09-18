import style from './Contact.module.css'


const Contact =({ id, name, number, onDeleteContact}) => {
return (
    <div className={style.box}>
    <li className={style.etm}>
        <span className={style.contactName}>{name}</span> 
        <span className={style.contactNumber}>{number}</span>
        </li>
        <button  className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
        </button>  
    
    </div>
);
};

export default  Contact;