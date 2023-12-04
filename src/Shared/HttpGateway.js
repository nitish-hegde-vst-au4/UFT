export default class HttpGateway {
	get = async (path) => {
		let response = await fetch(path);
		response = await response.json();
		const booksDto = response.result.map((dto) => ({ name: dto.name }));
		return booksDto;
	};
}
