import navbarStyle from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbarDiv}>
        <ul>
            <li>ABOUT US</li>
            <li>FOR YOU</li>
            <li>SERVICES</li>
            <li>BLOG</li>
            <li>VLOG</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar