const elSidebar = document.querySelector('.site-header__sidebar')
const elSidebarOpen = document.querySelector('.js-sidebar-open')
const elSidebarClose = document.querySelector('.js-sidebar-close')

if(elSidebarOpen) {
  elSidebarOpen.addEventListener('click', () => {
    elSidebar.classList.add('site-header__sidebar--open')
  })
  elSidebarOpen.setAttribute('aria-expanded', 'true')
}

if(elSidebarClose) {
  elSidebarClose.addEventListener('click', () => {
    elSidebar.classList.remove('site-header__sidebar--open')
  })
  elSidebarClose.setAttribute('aria-expanded', 'false')
}
