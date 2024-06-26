import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-75 mx-auto text-center">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <img className="w-100" src="/Dino_non-birthday_version.gif" alt="" />
      <Link className="btn text-white" style={{backgroundColor: '#FF156D'}} href="/">Return Home</Link>
    </div>
  )
}