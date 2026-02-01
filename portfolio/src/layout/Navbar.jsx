const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo (LEFT) */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav (RIGHT) */}
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1 bg-[var(--color-surface)]/40">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground
                         hover:text-foreground rounded-full
                         hover:bg-[var(--color-surface)] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
