import getByDataJs from './getByDataJs'

console.log('Hello world')

console.clear()

// Navigation

const home = getByDataJs('home')
const bookmark = getByDataJs('bookmark')
const create = getByDataJs('create')
const profile = getByDataJs('profile')

const homeButton = getAllByDataJs('home-button')
const bookmarkButton = getAllByDataJs('bookmark-button')
const createButton = getAllByDataJs('create-button')
const profileButton = getAllByDataJs('profile-button')

homeButton.addEventListener('click', () => {
  homeButton.classList.add('navigation__icon--active')
  bookmarkButton.classList.remove('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')

  home.classList.remove('hidden')
  bookmark.classList.add('hidden')
  create.classList.add('hidden')
  profile.classList.add('hidden')
})

bookmarkButton.addEventListener('click', () => {
  homeButton.classList.remove('navigation__icon--active')
  bookmarkButton.classList.add('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')

  home.classList.add('hidden')
  bookmark.classList.remove('hidden')
  create.classList.add('hidden')
  profile.classList.add('hidden')
})

createButton.addEventListener('click', () => {
  homeButton.classList.remove('navigation__icon--active')
  bookmarkButton.classList.remove('navigation__icon--active')
  createButton.classList.add('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')

  home.classList.add('hidden')
  bookmark.classList.add('hidden')
  create.classList.remove('hidden')
  profile.classList.add('hidden')
})

profileButton.addEventListener('click', () => {
  homeButton.classList.remove('navigation__icon--active')
  bookmarkButton.classList.remove('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  profileButton.classList.add('navigation__icon--active')

  home.classList.add('hidden')
  bookmark.classList.add('hidden')
  create.classList.add('hidden')
  profile.classList.remove('hidden')
})

// ======== Zeichenlimit Formular ========== (inProgress)

// const setQuestion = getElement('question')
// const setAnswer = getElement('answer')
// const setTags = getElement('tags')

// function getElement(dataJsName) {
//   return document.querySelector(`[data-js="${dataJsName}"]`)
// }

// const charLimit = getElement('charLimit')
// setQuestion.addEventListener('input', () => {
//   const maxChars = 100
//   const charsUsed = setQuestion.nodeValue.length
//   const charsLeft = maxChars - charsUsed
//   charLimit.textContent = charsUsed + ' / ' + charsLeft
// })

// const charLimit = getElement('charLimit')
// setAnswer.addEventListener('input', () => {
//   const maxChars = 100
//   const charsUsed = setQuestion.nodeValue.length
//   const charsLeft = maxChars - charsUsedgst
//   charLimit.textContent = charsUsed + ' / ' + charsLeft
// })

// const charLimit = getElement('charLimit')
// setTags.addEventListener('input', () => {
//   const maxChars = 75
//   const charsUsed = setQuestion.nodeValue.length
//   const charsLeft = maxChars - charsUsed
//   charLimit.textContent = charsUsed + ' | ' + charsLeft
// })
