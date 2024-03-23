import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    userNumber: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, {
        message: "Invalid phone number",
        excludeEmptyString: false,
  }).required('Required'),
});

const initialValues = {
  username: '',
  userNumber: '',
};

const ContactForm = ({ onAddContact }) => {
  const usernameFieldId = useId();
  const userNumberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const { username, userNumber } = values;
    onAddContact({ name: username, number: userNumber });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <div className={css.ContactForm}>
          <div className={css.ContactFormItem}>
            <label htmlFor={usernameFieldId} className={css.ContactFormLabel}>
              Name
            </label>
            <Field type="text" name="username" id={usernameFieldId} className={css.ContactFormInput} />
            <ErrorMessage name="username" as="span" />
          </div>

          <div className={css.ContactFormItem}>
            <label htmlFor={userNumberFieldId} className={css.ContactFormLabel}>
              Number
            </label>
            <Field type="text" name="userNumber" id={userNumberFieldId} className={css.ContactFormInput} />
            <ErrorMessage name="userNumber" as="span" className={css.ErrorMessage} />
          </div>

          <button type="submit" className={css.AddContactBtn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
