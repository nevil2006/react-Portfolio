function Navbar() {
  return (
    <header className="w-full border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-[var(--color-primary)]">
          MyPortfolio
        </h1>

        <ul className="flex gap-6 text-sm text-[var(--color-muted-foreground)]">
          <li className="cursor-pointer hover:text-[var(--color-foreground)]">
            About
          </li>
          <li className="cursor-pointer hover:text-[var(--color-foreground)]">
            Projects
          </li>
          <li className="cursor-pointer hover:text-[var(--color-foreground)]">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
