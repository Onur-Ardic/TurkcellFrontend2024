const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-3 bg-black text-white text-center">
      <p className="m-0">
        &copy; {year} | Designed and Developed by{" "}
        <a
          href="https://www.github.com/akkologlu"
          target="_blank"
          className="text-white fw-bold"
        >
          Abdullah Akkologlu
        </a>
      </p>
    </footer>
  );
};

export default Footer;
