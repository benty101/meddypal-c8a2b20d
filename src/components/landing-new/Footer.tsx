import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <span className="text-2xl font-bold text-white font-display">MeddyPal</span>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
                            Your lifelong health partner for access, management, and thriving. Empowering you with data and care.
                        </p>
                        <div className="flex space-x-4">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4K4KFLgJC4NDwtA8kwUv9CBr-SGK9HkWw8pFx_rytsa3DAIpM9HZhv7Z2qc7WSqu_iceGrGC9nljpZx93jY50Ck6_oAyaFhAE83OByYvAx6zkIrmAVgavcNH0dBCEYrQOKZ9bxbjp5zKOJdZuMPuSytuy84NPdfW4AQ8P4qwk4DeEYqw4iUStPNyP25mgItg0Tj2wHWg9LEAKjB48OE7TZpdXWdLde45y0NW4kXivUSCgYJo3dqnIi3BTb4xdqmcFiJTzxVgK1tM" alt="Get it on Google Play" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQo_7lEfMt7mhh8blVwoVog2I0WdI5d5rdG-XtJtFKCKq6mzXIgGMY_H3OGKke9_hapHBJpyAO_oX5wJ-Pm2a4x_IjYnpOChFV7_BhYubjBlxXBHfVeGku79pxHRiLfrTT8Al2ptjd9lGmq30IPMGEO8ta2zFXCcAIzx7JLh00o9FD0vRLMqV3ypYZe-2JLa2TQrQcmuP-wlaw3HHwgf5vihJfD3Sl8-SYu-C1Bvdl0jEbS-kpNQ_uXvvjc90pbbRb7zDkJfO14Rg" alt="Download on the App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Solutions</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/services" className="hover:text-white transition-colors">Patient-Owned Data</Link></li>
                            <li><Link to="/telemedicine" className="hover:text-white transition-colors">Telehealth</Link></li>
                            <li><Link to="/insurance" className="hover:text-white transition-colors">Health Insurance</Link></li>
                            <li><Link to="/providers" className="hover:text-white transition-colors">Find Providers</Link></li>
                            <li><Link to="/pharmacy" className="hover:text-white transition-colors">Pharmacy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-slate-500 mb-4 md:mb-0">© 2024 MeddyPal. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
