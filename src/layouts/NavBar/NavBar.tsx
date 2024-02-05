import { Logo } from "../../components";

function NavBar({ children }): JSX.Element {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    );
}

export default NavBar;