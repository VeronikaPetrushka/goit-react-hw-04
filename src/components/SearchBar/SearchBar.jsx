import toast from 'react-hot-toast';

const SearchForm = ({ onSearch }) => {

	const handleSubmit = (evt) => {
     evt.preventDefault();
     const form = evt.target;
		const image = form.elements.image.value;

		// Якщо текстове поле порожнє, виводимо повідомлення
		// і припиняємо виконання функції.
		if(form.elements.image.value.trim() === "") {
			toast.error("Please enter search term!")
			return;
		}

		// У протилежному випадку викликаємо пропс
		// і передаємо йому значення поля
		onSearch(image);
     form.reset();
 };

  return (
    <header>
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				name="image"
			/>
			<button type="submit">Search</button>
		</form>
	</header>
  );
};

export default SearchForm;
