const modal = () => {
	const modal = document.querySelector('.search-model')
	const modalBtn = document.querySelector('.icon_search')
	const closeModalBtn = modal.querySelector('.search-close-switch')
	const modalForm = modal.querySelector('.search-model-form')

	const modalSearchAnime = () => {
		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
		} else {
			modal.classList.add('active')
		}
	}

	modalBtn.addEventListener('click', () => {
		modalSearchAnime()
	})

	closeModalBtn.addEventListener('click', () => {
		modalSearchAnime()
	})

	modalForm.addEventListener('change', e => {
		let valueSearch = e.target.value
		console.log(valueSearch)
	})
}

modal()
