import booksRepository from "./booksRepository.js";

class BooksPresenter {
	load = async () => {
		const booksPm = await booksRepository.getBooks();
		const booksVm = booksPm.map((bookPm) => {
			return { visibleName: bookPm.name };
		});
		return booksVm;
	};
}

export default BooksPresenter;
