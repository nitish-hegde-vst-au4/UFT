import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
	load = async (callback) => {
		await booksRepository.getBooks((booksPm) => {
			const booksVm = booksPm.map((bookPm) => ({ name: bookPm.name }));
			callback(booksVm);
		});
	};

	addBook = (input) => {
		booksRepository.addBook({ name: input.name, author: input.author });
	};

	reset = () => {
		booksRepository.reset();
	};
}
