import HttpGateway from "../Shared/HttpGateway";
import Observable from "../Shared/Observable";

class BooksRepository {
	programmersModel = null;

	constructor() {
		this.programmersModel = new Observable([]);
		this.gateway = new HttpGateway();
	}

	getBooks = async (callback) => {
		this.programmersModel.subscribe(callback);
		await this.loadApiData();
	};

	loadApiData = async () => {
		const booksDto = await this.gateway.get("/books");
		this.programmersModel.value = booksDto.result.map((bookDto) => {
			return bookDto;
		});
	};

	addBook = async (bookPm) => {
		const bookDto = { name: bookPm.name, author: bookPm.author };
		await this.gateway.post("/books", bookDto);
		await this.loadApiData();
	};

	deleteBook = async (bookId) => {
		const bookDto = bookId;
		await this.gateway.delete("/books", bookDto);
		await this.loadApiData();
	};
}

const booksRepository = new BooksRepository();
export default booksRepository;
