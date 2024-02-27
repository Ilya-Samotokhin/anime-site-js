const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const closeModalBtn = modal.querySelector('.search-close-switch')
const modalForm = modal.querySelector('.search-model-form')

modalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
})

closeModalBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})

modalForm.addEventListener('change', e => {
	let valueSearch = e.target.value
	console.log(valueSearch)
})
