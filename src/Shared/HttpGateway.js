export default class HttpGateway {
	apiUrl = "https://api.logicroom.co/api/nitishh37@logicroom.co";
	get = async (path) => {
		const response = await fetch(this.apiUrl + path);
		const booksDto = response.json();
		return booksDto;
	};

	post = async (path, requestDto) => {
		const response = await fetch(this.apiUrl + path, {
			method: "POST",
			body: JSON.stringify(requestDto),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const responseDto = response.json();
		return responseDto;
	};
}
