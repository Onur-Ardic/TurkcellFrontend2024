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
      </body>
    </html>
  );
}
