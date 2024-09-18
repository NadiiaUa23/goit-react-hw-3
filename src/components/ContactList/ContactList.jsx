import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList =({ contacts, onDeleteContact })=>{

return (
        <ul className={style.list}>
            {contacts.map(({ id, name, number })=>(
                 <Contact 
                 key={id} 
                 id={id} 
                 name={name} 
                 number={number} 
                 onDeleteContact={onDeleteContact} // передаємо функцію видалення контакту
             />
            ))}
        </ul>
    )
};

export default ContactList;

