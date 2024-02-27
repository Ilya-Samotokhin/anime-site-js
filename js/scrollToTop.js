const scrollToTopButton = () => {
	const topButton = document.querySelector('#scrollToTopButton')

	topButton.addEventListener('click', event => {
		event.preventDefault
		seamless.scrollIntoView(document.querySelector('.header'), {
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
	})
}

scrollToTopButton()
