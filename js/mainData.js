const mainDate = () => {
	const renderAnimeList = (array, ganres) => {
		console.log(array)
		console.log(ganres)
	}

	const renderTopAnime = array => {
		const wrapper = document.querySelector('.filter__gallery')

		//Очистка разметки
		wrapper.innerHTML = ''

		//добавление карточек по порядку
		array.forEach(item => {
			wrapper.insertAdjacentHTML(
				'afterbegin',
				`
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/anime-details.html">${item.title}</a></h5>
        </div>
      `
			)
		})

		//Картинки не подгружаются background-image: url(&quot;http://baza4.animevost.tv/uploads/posts/2019-10/89887153.jpg&quot;); Доступ к информационному ресурсу ограничен на основании ФЗ от 27.07.2006 г. №149-ФЗ "Об информации, информационных технологиях и о защите информации"

		wrapper.querySelectorAll('.set-bg').forEach(elem => {
			elem.style.backgroundImage = `url(${elem.dataset.setbg})`
		})
		// console.log(wrapper.querySelectorAll('.set-bg'))
	}

	fetch('./db.json')
		.then(respons => {
			return respons.json()
		})
		.then(date => {
			const ganres = new Set()

			renderTopAnime(date.anime.sort((a, b) => b.views - a.views).slice(0, 5))

			date.anime.forEach(item => {
				ganres.add(item.ganre)
			})

			renderAnimeList(date.anime, ganres)
		})
}

mainDate()
