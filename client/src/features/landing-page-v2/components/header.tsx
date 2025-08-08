import { Link } from "react-router-dom";

const navigationLinks = [
    { to: "/learning", label: "Explore Learning" },
    { to: "/pathways", label: "Pathways" },
    { to: "/outcomes", label: "Outcomes" },
    { to: "/partner", label: "Partner With Us" },
];

export function Header() {
    return (
        <header className="header-block mod--absolute">
            <div className="content">
                <div className="header__columns">
                    <div className="header__col col--1">
                        <h1 className="header__logo w-inline-block text-4xl font-semibold">Uhamba<span className="dot-green">.</span></h1>
                    </div>
                    <div className="header__col col--2">
                        <nav className="nav">
                            {navigationLinks.map(link => (
                                <Link key={link.to} to={link.to} className="nav__link">{link.label}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className="header__col col--3">
                        <Link to="/login" className="nav__link mod--login">Login</Link>
                        <Link to="/register" className="btn stroke--btn w-button">Join</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}