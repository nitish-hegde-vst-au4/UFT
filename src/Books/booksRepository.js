import HttpGateway from "../Shared/HttpGateway.js";
import Observable from "../Shared/Observable.js";
class BooksRepository {
	gateway = null;
	programmersModel = new Observable([]);

	constructor() {
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

	addBook = async (payload) => {
		await this.gateway.post("/books", payload);
		await this.loadApiData();
	};

	reset = async () => {
		await this.gateway.get("/reset");
		await this.loadApiData();
	};
}

const booksRepository = new BooksRepository();

export default booksRepository;
