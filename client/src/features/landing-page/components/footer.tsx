import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-6">
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col px-12 py-6 space-y-4">
                    <h1 className="text-4xl font-semibold px-8">Uhamba</h1>
                    <p className="px-8">Uhambá is a purpose-driven platform connecting underserved students to real-world skills, mentorship, and practical learning — empowering them to grow, build, and lead with confidence.</p>
                </div>
                <div className="flex flex-row py-6">
                    <ul className="px-8 space-y-2">
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="">Our Vision</Link>
                        </li>
                        <li>
                            <Link to="">Join as Partner</Link>
                        </li>
                        <li>
                            <Link to="">Become a Mentor</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2 px-8">
                        <li>
                            <Link to="/about">Contact</Link>
                        </li>
                        <li>
                            <Link to="">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="">Terms of Use</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-row px-8 py-2 gap-4 justify-center">
                        <li>
                            <Link to=""><Linkedin /></Link>
                        </li>
                        <li>
                            <Link to=""><Youtube /></Link>
                        </li>
                        <li>
                            <Link to="/about"><Twitter /></Link>
                        </li>
                        <li>
                            <Link to=""><Instagram /></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 text-center px-4 py-6 border-t">
                    <p>&copy; 2025 <a className="text-cyan-500" href="https://servor.tech">Servor Technologies Limited</a>. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}