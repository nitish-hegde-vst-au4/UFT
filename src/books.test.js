import BooksPresenter from "./Books/BooksPresenter";
import booksRepository from "./Books/BooksRepository";

it("call the backend and get the books", async () => {
	booksRepository.gateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve({
			success: true,
			result: [
				{
					bookId: 155941,
					name: "Wind in the willows",
					ownerId: "nitishh37@logicroom.co",
					author: "Kenneth Graeme",
				},
				{
					bookId: 155951,
					name: "I, Robot",
					ownerId: "nitishh37@logicroom.co",
					author: "Isaac Asimov",
				},
				{
					bookId: 155961,
					name: "The Hobbit",
					ownerId: "nitishh37@logicroom.co",
					author: "Jrr Tolkein",
				},
			],
		});
	});

	let viewModel = null;
	let booksPresenter = new BooksPresenter();
	await booksPresenter.load((generatedVm) => {
		viewModel = generatedVm;
	});

	expect(booksRepository.gateway.get).toHaveBeenCalledWith("/books");
	expect(viewModel.length).toBe(3);
});
