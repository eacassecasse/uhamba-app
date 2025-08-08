import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className='flex flex-row justify-between items-center px-12 py-6 border'>
                <h1 className='text-4xl font-semibold'>Uhamba</h1>
                <nav>
                    <ul className="flex flex-row gap-12">
                        <li>
                            <Link to="/">Solutions</Link>
                        </li>
                        <li>
                            <Link to="/about">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">About us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Button size="lg" variant="default">Log in</Button>
                </div>
            </div>
        </header>
    );
}