console.log('Hello world')

console.clear()

// Navigation

const home = document.querySelector('[data-js="home"]')
const bookmark = document.querySelector('[data-js="bookmark"]')
const create = document.querySelector('[data-js="create"]')
const profile = document.querySelector('[data-js="profile"]')

const homeButton = document.querySelector('[data-js="home-button"]')
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]')
const createButton = document.querySelector('[data-js="create-button"]')
const profileButton = document.querySelector('[data-js="profile-button"]')

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
