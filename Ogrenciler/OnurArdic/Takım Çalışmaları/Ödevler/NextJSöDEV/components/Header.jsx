import Link from 'next/link'

const Header = () => {
  return (
    <>
      <nav className="bg-black text-white flex justify-between p-3 gap-3">
        <div className="logo">Onur/Alpay/Ecem</div>

        <div className="links">
          <Link href="/" className="text-white me-3">
            Anasayfa
          </Link>

          <Link href="/Blogs">Bloglar</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
