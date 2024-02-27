const mainDate = () => {
	fetch('./db.json')
		.then(respons => {
			return respons.json()
		})
		.then(date => {
			console.log(date.anime)
		})
}

mainDate()
