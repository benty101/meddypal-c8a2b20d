import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, LayoutDashboard } from "lucide-react";
import { FutureButton } from "@/components/ui/FutureButton";
import { useAuth } from "@/contexts/AuthContext";
import NavLogo from "@/components/navbar/NavLogo";

export const Navbar3D = () => {
    const { user } = useAuth();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Insurance", href: "/insurance" },
        { name: "Hospitals", href: "/hospitals" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300 ${scrolled ? "pt-4" : "pt-6"
                    }`}
            >
                <div
                    className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled
                            ? "w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-lg border border-white/20"
                            : "w-full max-w-7xl bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLogo />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-[#0066FF] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066FF] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <Link to="/dashboard">
                                <FutureButton size="sm" className="gap-2">
                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                </FutureButton>
                            </Link>
                        ) : (
                            <>
                                <Link to="/auth?mode=login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                                    Log in
                                </Link>
                                <Link to="/auth?mode=signup">
                                    <FutureButton size="sm" className="gap-2">
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </FutureButton>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-2xl font-bold text-slate-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-slate-100" />
                            {user ? (
                                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                                    <FutureButton className="w-full justify-center">Go to Dashboard</FutureButton>
                                </Link>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <Link to="/auth?mode=login" onClick={() => setMobileMenuOpen(false)}>
                                        <button className="w-full py-3 text-slate-600 font-medium border border-slate-200 rounded-xl">
                                            Log in
                                        </button>
                                    </Link>
                                    <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                                        <FutureButton className="w-full justify-center">Get Started</FutureButton>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
