import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Insurance', href: '/insurance' },
    { label: 'Find Providers', href: '/providers' },
    { label: 'Community', href: '/community' }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        >
            <div className="container mx-auto px-4">
                <nav className={`
                    backdrop-blur-md bg-white/80 dark:bg-slate-900/80 rounded-xl px-6 py-3
                    flex justify-between items-center transition-all duration-300
                    border border-slate-200/50 dark:border-slate-700/50 shadow-lg
                `}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xl font-bold text-slate-900 dark:text-white font-display">MeddyPal</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`
                                    px-4 py-2 rounded-lg font-medium transition-colors
                                    ${location.pathname === item.href
                                        ? 'text-primary bg-blue-50 dark:bg-blue-900/30'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/auth">
                            <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20">
                                Log In
                            </Button>
                        </Link>
                        <Link to="/auth?mode=signup">
                            <Button className="bg-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Sign Up
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-600 dark:text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-4">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-4 flex flex-col space-y-4 border border-slate-100 dark:border-slate-800">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        text-slate-600 dark:text-slate-300 hover:text-primary font-medium p-2
                                        hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors
                                        ${location.pathname === item.href ? 'text-primary bg-blue-50 dark:bg-blue-900/30' : ''}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                                <Link to="/auth">
                                    <Button variant="ghost" className="w-full justify-start">Log In</Button>
                                </Link>
                                <Link to="/auth?mode=signup">
                                    <Button className="w-full">Sign Up</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
