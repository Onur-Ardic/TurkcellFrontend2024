import "./styles.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
      </head>
      <body>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            Next Homework
          </a>
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
