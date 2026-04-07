import Link from '@docusaurus/Link';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92c.85 0 1.7.12 2.49.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.77 7.75L23 22h-6.22l-4.86-6.38L6.3 22H3.18l7.24-8.27L1 2h6.38l4.39 5.8L18.9 2Zm-1.1 18h1.72L6.44 3.9H4.6L17.8 20Z"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.32 4.37A17.3 17.3 0 0 0 16.13 3a12.2 12.2 0 0 0-.54 1.1 16.5 16.5 0 0 0-7.17 0A12.2 12.2 0 0 0 7.87 3 17.2 17.2 0 0 0 3.67 4.37C1.03 8.3.32 12.13.68 15.9A17.4 17.4 0 0 0 5.83 18.5c.42-.58.8-1.2 1.11-1.85-.61-.23-1.2-.52-1.74-.85.15-.11.29-.22.43-.34a12.23 12.23 0 0 0 10.74 0l.43.34c-.55.33-1.13.62-1.74.85.31.65.68 1.27 1.1 1.85a17.3 17.3 0 0 0 5.16-2.6c.42-4.38-.72-8.17-2-11.53ZM9.17 13.55c-1.04 0-1.9-.96-1.9-2.15 0-1.19.84-2.15 1.9-2.15 1.08 0 1.92.97 1.9 2.15 0 1.19-.84 2.15-1.9 2.15Zm5.66 0c-1.04 0-1.9-.96-1.9-2.15 0-1.19.84-2.15 1.9-2.15 1.08 0 1.92.97 1.9 2.15 0 1.19-.84 2.15-1.9 2.15Z"
      />
    </svg>
  );
}

export default function CustomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer" aria-label="AsiliChain site footer">
      <div className="custom-footer-accent" aria-hidden="true" />
      <div className="custom-footer-container">
        <section className="custom-footer-social" aria-label="AsiliChain social links">
          <Link to="/" className="custom-footer-brand interactive-logo" aria-label="Go to AsiliChain homepage">
            <img src="/img/Logo.png" alt="AsiliChain logo" className="custom-footer-logo" />
          </Link>
          <div className="custom-footer-social-row">
            <a
              href="https://github.com/AsiliChain"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit AsiliChain on GitHub"
              className="custom-footer-icon custom-footer-icon-github interactive-social-icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://x.com/AsiliChain"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit AsiliChain on X"
              className="custom-footer-icon custom-footer-icon-x interactive-social-icon"
            >
              <XIcon />
            </a>
            <a
              href="https://discord.gg/asilichain"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Join AsiliChain Discord"
              className="custom-footer-icon custom-footer-icon-discord interactive-social-icon"
            >
              <DiscordIcon />
            </a>
          </div>
        </section>

        <section className="custom-footer-links" aria-label="Quick links">
          <div className="custom-footer-link-column">
            <h3 className="interactive-column-header">Docs</h3>
            <Link to="/docs/whitepaper" className="interactive-link">Whitepaper</Link>
            <Link to="/docs/whitepaper/traceability" className="interactive-link">Traceability</Link>
            <Link to="/docs/whitepaper/architecture" className="interactive-link">Architecture</Link>
          </div>

          <div className="custom-footer-link-column">
            <h3 className="interactive-column-header">Resources</h3>
            <a href="https://github.com/AsiliChain" target="_blank" rel="noreferrer noopener" className="interactive-link">
              GitHub
            </a>
            <Link to="/academy" className="interactive-link">Academy</Link>
            <Link to="/status" className="interactive-link">Status</Link>
          </div>

          <div className="custom-footer-link-column">
            <h3 className="interactive-column-header">Legal</h3>
            <Link to="/legal/privacy" className="interactive-link">Privacy Policy</Link>
            <Link to="/legal/terms" className="interactive-link">Terms of Service</Link>
            <a href="mailto:hello@asilichain.africa" className="interactive-link">Contact</a>
          </div>
        </section>
      </div>

      <div className="custom-footer-copyright">© {currentYear} AsiliChain. All rights reserved.</div>
    </footer>
  );
}
