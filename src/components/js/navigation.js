import getAllByDataJs from './getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('nav')

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'navigation__icon--active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}

// const home = getByDataJs('home')
// const bookmark = getByDataJs('bookmark')
// const create = getByDataJs('create')
// const profile = getByDataJs('profile')

// const homeButton = getByDataJs('home-button')
// const bookmarkButton = getByDataJs('bookmark-button')
// const createButton = getByDataJs('create-button')
// const profileButton = getByDataJs('profile-button')

// homeButton.addEventListener('click', () => {
//   homeButton.classList.add('navigation__icon--active')
//   bookmarkButton.classList.remove('navigation__icon--active')
//   createButton.classList.remove('navigation__icon--active')
//   profileButton.classList.remove('navigation__icon--active')

//   home.classList.remove('hidden')
//   bookmark.classList.add('hidden')
//   create.classList.add('hidden')
//   profile.classList.add('hidden')
// })

// bookmarkButton.addEventListener('click', () => {
//   homeButton.classList.remove('navigation__icon--active')
//   bookmarkButton.classList.add('navigation__icon--active')
//   createButton.classList.remove('navigation__icon--active')
//   profileButton.classList.remove('navigation__icon--active')

//   home.classList.add('hidden')
//   bookmark.classList.remove('hidden')
//   create.classList.add('hidden')
//   profile.classList.add('hidden')
// })

// createButton.addEventListener('click', () => {
//   homeButton.classList.remove('navigation__icon--active')
//   bookmarkButton.classList.remove('navigation__icon--active')
//   createButton.classList.add('navigation__icon--active')
//   profileButton.classList.remove('navigation__icon--active')

//   home.classList.add('hidden')
//   bookmark.classList.add('hidden')
//   create.classList.remove('hidden')
//   profile.classList.add('hidden')
// })

// profileButton.addEventListener('click', () => {
//   homeButton.classList.remove('navigation__icon--active')
//   bookmarkButton.classList.remove('navigation__icon--active')
//   createButton.classList.remove('navigation__icon--active')
//   profileButton.classList.add('navigation__icon--active')

//   home.classList.add('hidden')
//   bookmark.classList.add('hidden')
//   create.classList.add('hidden')
//   profile.classList.remove('hidden')
// })
