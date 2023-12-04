import HttpGateway from "../Shared/HttpGateway.js";

class BooksRepository {
	httpGateway = new HttpGateway();
	getBooks = async () => {
		const booksDto = await this.httpGateway.get(
			"https://api.logicroom.co/api/nitishh37@gmail.com/books"
		);
		return booksDto;
	};
}

const booksRepository = new BooksRepository();
export default booksRepository;
