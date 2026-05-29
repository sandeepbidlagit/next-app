"use client"

import Link from 'next/link'
import headerStyles from './header.module.css'
import menuStyles from './menu.module.css'
import Image from 'next/image'
import { useState } from 'react'

const page = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const toggleSubmenu = (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      e.currentTarget.classList.toggle("active");
      e.currentTarget.nextElementSibling.classList.toggle("active");
    }
    // e.preventDefault();
    // e.currentTarget.classList.toggle("active");
    // e.currentTarget.nextElementSibling.classList.toggle("active");
  };

  return (
    <>
      <header className={headerStyles.header}>
        <nav>
          <div className={headerStyles.container}>
            <div>
              <Link href="/">
                <Image src="/next-app/images/header/logo.svg"
                  alt="Profile picture"
                  width={173}
                  height={70}
                  className={headerStyles.siteLogo}
                />
              </Link>
            </div>

            <div className={headerStyles['header-block-top']}>
              <div className={headerStyles.login}>
                <Link href="/about" className={headerStyles['login-btn']}> Login</Link>
              </div>

              <div className={headerStyles.search} onClick={() => setSearchOpen(prev => !prev)}>
                <Image src="/next-app/images/header/search.svg"
                  alt="Profile picture"
                  width={27}
                  height={24}
                />

                {/* <div className={headerStyles['search-form-outer']}> */}
                <div className={`${headerStyles['search-form-outer']} ${searchOpen ? headerStyles.active : ""}`}>
                  <input type="text" className={headerStyles['input-form']} placeholder="Search" />
                  <input type="submit" className={headerStyles['input-form-search']} />
                  <Image src="/next-app/images/header/close-icon-search.png"
                    alt="Close Icons"
                    className={headerStyles['close-icon']}
                    width={27}
                    height={24}
                  />
                </div>
              </div>

              <button className={headerStyles['navbar-toggler']} onClick={toggleMenu} aria-label="Toggle menu">
                <span className={menuStyles['navbar-toggler-icon']}></span>
                <Link href="#" className={menuStyles['hamburger-icon']}>
                  <span className={`${menuStyles.line1} ${menuOpen ? menuStyles['header-menu-open'] : ''}`}> Line-1 </span>
                  <span className={`${menuStyles.line2} ${menuOpen ? menuStyles['header-menu-open'] : ''}`}> Line-2 </span>
                  <span className={`${menuStyles.line3} ${menuOpen ? menuStyles['header-menu-open'] : ''}`}> Line-3 </span>
                </Link>
              </button>

              <div className={`${menuStyles.navbarCollapse} ${menuOpen ? menuStyles.active : ""}`} id="navbar-dropdown">
                <ul className={menuStyles.navbarNav}>

                  <li className={`${menuStyles.navItem} ${menuStyles.hasSubmenu}`}>
                    {/* <Link href="/about" className={menuStyles.navLink} onClick={toggleSubmenu}> */}
                    <Link href="#" className={menuStyles.navLink} onClick={toggleSubmenu}>
                      About us
                    </Link>
                    <ul className={menuStyles.submenu}>
                      <li><Link href="#">About PMI</Link></li>
                      <li><Link href="#">History</Link></li>
                    </ul>
                  </li>

                  <li className={menuStyles.navItem}>
                    <Link href="#" className={menuStyles.navLink}>Countries & Regions</Link>
                  </li>

                  <li className={menuStyles.navItem}>
                    <Link href="#" className={menuStyles.navLink}>Our Programs</Link>
                  </li>

                  <li className={menuStyles.navItem}>
                    <Link href="#" className={menuStyles.navLink}>Compact with Africa</Link>
                  </li>

                  <li className={menuStyles.navItem}>
                    <Link href="#" className={menuStyles.navLink}>Knowledge Centre</Link>
                  </li>

                  <li className={menuStyles.navItem}>
                    <Link href="#" className={menuStyles.navLink}>Blog</Link>
                  </li>

                  <li className={`${menuStyles.navItem} ${menuStyles.hasSubmenu}`}>
                    <Link href="#" className={menuStyles.navLink} onClick={toggleSubmenu}>
                      News and Event
                    </Link>
                    <ul className={menuStyles.submenu}>
                      <li><Link href="#">News</Link></li>
                      <li><Link href="#">Events</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default page
