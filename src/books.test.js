import BooksPresenter from "./Books/BooksPresenter";
import Observable from "./Shared/Observable";
import booksRepository from "./Books/BooksRepository";

let getStub = null;

beforeEach(() => {
	booksRepository.programmersModel = new Observable([]);
	getStub = {
		success: true,
		result: [
			{
				id: 111,
				name: "Wind in the willows",
				ownerId: "pete@logicroom.co",
				author: "Kenneth Graeme",
			},
			{
				id: 121,
				name: "I, Robot",
				ownerId: "pete@logicroom.co",
				author: "Isaac Asimov",
			},
			{
				id: 131,
				name: "The Hobbit",
				ownerId: "pete@logicroom.co",
				author: "Jrr Tolkein",
			},
		],
	};
});

it("should load 4 viewmodel books from api when when 1 is added to the api", async () => {
	booksRepository.gateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getStub);
	});
	let viewModel = null;
	let booksPresenter = new BooksPresenter();
	await booksPresenter.load((result) => {
		viewModel = result;
	});

	expect(booksRepository.gateway.get).toHaveBeenCalledWith("/books");

	// anchor
	expect(viewModel.length).toBe(3);

	// pivot
	getStub.result.push({
		name: "Test",
		author: "Nitish Hegde",
	});

	booksRepository.gateway.post = jest.fn().mockImplementation(() => {
		return Promise.resolve(getStub);
	});

	await booksPresenter.addBook("Test", "Nitish Hegde");

	expect(booksRepository.gateway.post).toHaveBeenCalledWith("/books", {
		name: "Test",
		author: "Nitish Hegde",
	});

	expect(viewModel.length).toBe(4);
	expect(viewModel[3].name).toBe("Test");
	expect(viewModel[3].author).toBe("Nitish Hegde");
});

it("should load 3 viewmodel books when 1 books is deleted from api", async () => {
	booksRepository.gateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getStub);
	});
	let viewModel = null;
	let booksPresenter = new BooksPresenter();
	await booksPresenter.load((result) => {
		viewModel = result;
	});

	// anchor
	expect(viewModel.length).toBe(3);

	// pivot
	getStub.result.pop();

	booksRepository.gateway.delete = jest.fn().mockImplementation(() => {
		return Promise.resolve(getStub);
	});

	await booksRepository.deleteBook(131);

	expect(viewModel.length).toBe(2);
});
