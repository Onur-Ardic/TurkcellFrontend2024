import "./styles.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RAY Blog</title>
      </head>
      <body>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            RAY Blog
          </a>
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <div>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer className="footer">
          <p>Copyright &copy; 2024</p>
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <div className="copyright">
            <a
              href="https://www.linkedin.com/in/ramazan-%C3%B6zkan-44641b256/"
              target="_blank"
            >
              R {"\u2728"}
            </a>
            <a href="https://www.linkedin.com/in/aleynaertok/" target="_blank">
              A {"\u2728"}
            </a>
            <a
              href="https://www.linkedin.com/in/yaren-su-yavuz/"
              target="_blank"
            >
              Y
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
