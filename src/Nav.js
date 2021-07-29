import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src='https://fontmeme.com/permalink/210725/8b519dab78266dd7c87c7bac845e4563.png'
        alt='NITFLEX logo'
        className='nav__logo'
      />

      <img
        src='https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg'
        alt='smiley face'
        className='nav__avatar'
      />
    </div>
  )
}

export default Nav
