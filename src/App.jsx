import  './App.css'
import { useState, useEffect} from "react";
import contactsBook from './contactsBook.json';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {
    const [contacts, setContacts] = useState(() => {
      return JSON.parse(localStorage.getItem('contacts')) || contactsBook;
  }); 
    
    const [filter, setFilter] = useState(''); // стан для фільтру

// для збереження контактів у localStorage після їх зміни
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); 

// Додавання контакту
    const addContact = (newContact) => {
      const duplicate = contacts.find(contact => contact.name === newContact.name);

      if (duplicate) {
        alert ('${newContact.name} is already in contacts.');
      } else {
        setContacts(prevContacts => [...prevContacts, newContact]);
      }
      }
    

 // Функція для видалення контакту
const deleteContact = (contactId) => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
};

//Ця функція оновлює стан filter кожного разу, коли користувач вводить текст у пошукове поле. event.target.value — це нове значення, яке ввів користувач.
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
      };

        // Фільтруємо контакти
    const getFilteredContacts = () => {
        //Спочатку фільтр перетворюється на нижній регістр (toLowerCase()), щоб зробити пошук нечутливим до регістр
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };

      //Ця змінна зберігає результат фільтрації, тобто список контактів, що відповідають пошуковому запиту.
      const visibleContacts = getFilteredContacts();

    return (
<div>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={addContact} />
    <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact}/>
</div>
    );
  };

export default App;
