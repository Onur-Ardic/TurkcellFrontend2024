"use client"
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdLogIn, IoMdSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IconsWrapper, StyledLink } from '../../styles/ComponentStyle'
import ThemeToggle from '../themeToggle'
import useAuth from "@/lib/Hooks/useAuth";
import { useLocale } from "next-intl";
import { BiWorld } from "react-icons/bi";

const IconBox = () => {
    const { currentUser } = useAuth();
    const locale = useLocale();
    return (
        <>
            <IconsWrapper className="d-flex align-items-center">
                <StyledLink href="#" className="me-3">
                    <IoMdSearch size={24} />
                </StyledLink>
                <StyledLink href="/cart" className="me-3">
                    <FiShoppingCart size={24} />
                </StyledLink>
                {
                    currentUser ?
                        <StyledLink href="/login" className="me-3"><VscAccount size={24} /></StyledLink>
                        :
                        <StyledLink href="/register" className="me-3"><IoMdLogIn size={24} /></StyledLink>
                }
                {
                    locale === 'en' ?
                        <StyledLink href="/" locale="tr" className="me-3">
                            <BiWorld size={24} />
                        </StyledLink> :
                        <StyledLink href="/" locale="en" className="me-3">
                            <BiWorld size={24} />
                        </StyledLink>
                }

                <ThemeToggle />
            </IconsWrapper>


        </>
    )
}
export default IconBox