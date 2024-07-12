"use client";
import {
  Container,
  HeaderWrapper,
  IconWrapper,
  StyledLink,
  TextWrapper,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { hideHeader } from "@/redux/slices/globalSlice";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Discount = () => {
  const t = useTranslations("Header");
  const dispatch = useDispatch();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleHideHeader = () => {
    dispatch(hideHeader());
  };

  const { isHeaderVisible } = useSelector((state) => state.global);
  const { user } = useSelector((state) => state.user);

  if (!isMounted) {
    return null;
  }

  if (isHeaderVisible && !user) {
    return (
      <HeaderWrapper>
        <Container className="container">
          <TextWrapper className="container-md">
            {t("content")} <StyledLink href="/signup">{t("signup")}</StyledLink>
          </TextWrapper>
          <IconWrapper>
            <IoMdClose size={20} onClick={handleHideHeader} />
          </IconWrapper>
        </Container>
      </HeaderWrapper>
    );
  }

  return null;
};

export default Discount;
