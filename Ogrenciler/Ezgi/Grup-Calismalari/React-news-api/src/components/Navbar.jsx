import { Link } from 'react-router-dom'
import { NavBar } from './styled'
const Navbar = () => {
    return (
        <>
            <NavBar>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/general">General</Link></li>
                <li><Link to="/category/business">Business</Link></li>
                <li><Link to="/category/technology">Technology</Link></li>
                <li><Link to="/category/health">Health</Link></li>
                <li><Link to="/category/politics">Politics</Link></li>
                <li><Link to="/category/sports">Sports</Link></li>
                
            </NavBar>
        </>
    )
}

export default Navbar
