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
		this.programmersModel.notify();
	};

	loadApiData = async () => {
		const booksDto = await this.gateway.get("/books");
		this.programmersModel.value = booksDto.result.map((bookDto) => {
			return bookDto;
		});
	};
}

const booksRepository = new BooksRepository();

export default booksRepository;
