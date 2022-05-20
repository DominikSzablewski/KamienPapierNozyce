const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scisors = document.querySelector('.scissors')
const p1 = document.querySelector('.statement1')
const p2 = document.querySelector('.statement2')
let lose = document.querySelector('.lose2')
let win = document.querySelector('.win2')
let winScore = 1
let loseScore = 1

function getR(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log('-----------')
console.log('Gra: Kamień, papier, nożyce')
console.log('-----------')
console.log('kamien = 1')
console.log('papier = 2')
console.log('nozyce = 3')
console.log('-----------')
console.log('Aby zagrać, wywołaj funkcje kpn() i wewnątrz podaj swój wybór od 1 do 3')
console.log('-----------')

//Remis
function kpn(choose) {
	if (sichoose === 1 && choose === 1) {
		console.log(`Remis: Komputer dał kamień (${sichoose}), Ty dałeś kamień (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.add('statementdraw')
		p1.textContent = `Remis`
		p2.textContent = `Komputer dał kamień, Ty dałeś kamień`
	} else if (sichoose === 2 && choose === 2) {
		console.log(`Remis: Komputer dał papier (${sichoose}), Ty dałeś papier (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.add('statementdraw')
		p1.textContent = `Remis`
		p2.textContent = `Komputer dał papier, Ty dałeś papier`
	} else if (sichoose === 3 && choose === 3) {
		console.log(`Remis: Komputer dał nożyce (${sichoose}), Ty dałeś nożyce (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.add('statementdraw')
		p1.textContent = `Remis`
		p2.textContent = `Komputer dał nożyce, Ty dałeś nożyce`
	}
	//Przegrana
	else if (sichoose === 1 && choose === 3) {
		console.log(`Przegrana: Komputer dał kamień (${sichoose}), Ty dałeś nożyce (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementlose')
		p1.textContent = `Przegrana`
		p2.textContent = `Komputer dał kamień, Ty dałeś nożyce`
		x = loseScore++
		lose.textContent = `${x}`
	} else if (sichoose === 2 && choose === 1) {
		console.log(`Przegrana: Komputer dał papier (${sichoose}), Ty dałeś kamień (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementlose')
		p1.textContent = `Przegrana`
		p2.textContent = `Komputer dał papier, Ty dałeś kamień`
		x = loseScore++
		lose.textContent = `${x}`
	} else if (sichoose === 3 && choose === 2) {
		console.log(`Przegrana: Komputer dał nożyce (${sichoose}), Ty dałeś papier (${choose})`)
		document.querySelector('.statement1').classList.remove('statementwin')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementlose')
		p1.textContent = `Przegrana`
		p2.textContent = `Komputer dał nożyce, Ty dałeś papier`
		x = loseScore++
		lose.textContent = `${x}`
	}
	//Wygrana
	else if (sichoose === 3 && choose === 1) {
		console.log(`Wygrana: Komputer dał nożyce (${sichoose}), Ty dałeś kamień (${choose})`)
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementwin')
		p1.textContent = `Wygrana`
		p2.textContent = `Komputer dał nożyce, Ty dałeś kamień`
		x = winScore++
		win.textContent = `${x}`
	} else if (sichoose === 1 && choose === 2) {
		console.log(`Wygrana: Komputer dał kamień (${sichoose}), Ty dałeś papier (${choose})`)
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementwin')
		p1.textContent = `Wygrana`
		p2.textContent = `Komputer dał kamień, Ty dałeś papier`
		x = winScore++
		win.textContent = `${x}`
	} else if (sichoose === 2 && choose === 3) {
		console.log(`Wygrana: Komputer dał papier (${sichoose}), Ty dałeś nożyce (${choose})`)
		document.querySelector('.statement1').classList.remove('statementlose')
		document.querySelector('.statement1').classList.remove('statementdraw')
		document.querySelector('.statement1').classList.add('statementwin')
		p1.textContent = `Wygrana`
		p2.textContent = `Komputer dał papier, Ty dałeś nożyce`
		x = winScore++
		win.textContent = `${x}`
	} else {
		console.log('!!! BŁĘDNA LICZBA : Musisz Wybrać liczbe W PRZEDZIALE od 1 do 3 !!!')
		console.log('Błąd')
	}
}

const chooseRock = () => {
	console.log('wybrałem kamień')
	sichoose = getR(1, 3)
	return kpn(1)
}

const choosePaper = () => {
	console.log('wybrałem papier')
	sichoose = getR(1, 3)
	return kpn(2)
}

const chooseScissors = () => {
	console.log('wybrałem nożyce')
	sichoose = getR(1, 3)
	return kpn(3)
}

rock.addEventListener('click', chooseRock)
paper.addEventListener('click', choosePaper)
scisors.addEventListener('click', chooseScissors)
