
import { FaChevronDown } from "react-icons/fa";
import IconBox from "./IconBox";
import Searchbar from './Searchbar'
import { useTranslations } from "next-intl";
import { HeaderContainer, StyledLink } from "@/styles/ComponentStyle";
import { Container } from "@/styles/LayoutStyle";
import { Link } from "@/navigation";


const Navbar = () => {
    const t = useTranslations();
    return (
        <HeaderContainer className="sticky-top">
            <nav className="navbar navbar-expand-md border-bottom navbarBackground py-4">
                <div className="d-flex container-md gap-1">

                    <div className="d-flex gap-3 flex-wrap">
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNav"
                            aria-controls="mainNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <StyledLink className="navbar-brand" href="/">
                            <h1 className="fs-2">{t('logo')}</h1>
                        </StyledLink>
                    </div>
                    <div className="collapse navbar-collapse gap-5 mx-auto" id="mainNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex gap-1"
                                    aria-current="page"
                                    href="/shop"
                                >
                                    {t('shop')}
                                    <span>
                                        <FaChevronDown size={14} />
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#onSale">
                                    {t('onsale')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#newArrivals">
                                    {t('newArrivals')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#dressByStyle">
                                    {t('brands')}
                                </Link>
                            </li>
                        </ul>
                        <Searchbar />
                    </div>
                    <IconBox />

                </div>

            </nav>
        </HeaderContainer>
    );
};

export default Navbar;
