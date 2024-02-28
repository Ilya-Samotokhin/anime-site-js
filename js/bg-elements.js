const bgElements = () => {
	const elements = document.querySelectorAll('.set-bg')

	// перебор с помощью ForEach
	elements.forEach(elem => {
		elem.style.backgroundImage = `url(${elem.dataset.setbg})`
	})

	//Перебор и загрузка картинок классический способ
	// for (let i = 0; i < elements.length; i++) {
	// 	const src = elements[i].dataset.setbg
	// 	elements[i].style.backgroundImage = `url(${src})`
	// }

	//filter
	// const array = [1, 2, 3, 4, 5]
	// const newArray = array.filter(item => item <= 3)
	// console.log(newArray)

	//sort

	// const array = [5, 3, 1, 4, 2]
	// const newArray = array.sort()
	// console.log(newArray)

	//sort с массивом объектов

	// const array = [
	// 	{
	// 		id: 0,
	// 		value: 100,
	// 	},
	// 	{
	// 		id: 2,
	// 		value: 300,
	// 	},
	// 	{
	// 		id: 1,
	// 		value: 200,
	// 	},
	// ]
	// const newArray = array.sort((a, b) => a.value - b.value)
	// console.log(newArray)
}

bgElements()
