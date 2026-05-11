function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "How to participate?", href: "#participate" },
    { label: "Challenges", href: "#challenges" },
    { label: "Schedules", href: "#schedule" },
    { label: "Rewards", href: "#rewards" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo-mark" href="#home" aria-label="H2S home">
        H2S
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a className="nav-action" href="#home">
        Sign In
      </a>
    </nav>
  );
}

export default Navbar;
