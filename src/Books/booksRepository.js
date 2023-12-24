import HttpGateway from "../Shared/HttpGateway.js";

class BooksRepository {
  gateway = null;
  programmersModel = null;

  constructor() {
    this.gateway = new HttpGateway();
  }

  loadApiData = async () => {
    const booksDto = await this.gateway.get("/books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };
}

const booksRepository = new BooksRepository();

export default booksRepository;
