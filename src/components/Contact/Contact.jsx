import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <div className={css.ContactContainer}>
      <div className={css.UserContact}>
        <div className={css.ContactBox}>
          <p>
            <IoMdPerson className={css.PhoneIcon} size="13" />
          </p>
          <p className={css.UserItem}>{name}</p>
        </div>
        <div className={css.ContactBox}>
          <p>
            <FaPhoneAlt className={css.UserIcon} size="13" />
          </p>
          <p className={css.UserItem}>{number}</p>
        </div>
      </div>
      <button className={css.ContactDeleteBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
