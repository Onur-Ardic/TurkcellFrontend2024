"use client";
import { Link } from "@/navigation";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: var(--secondary);
  background-color: var(--quaternary);
  margin-top: 200px;
`;

export const Bottom = styled.div`
  padding: 25px 0;
  border-top: 1px solid #dee2e6;
  text-align: center;
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #6c757d;
  text-align: left;
`;

export const PaymentIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media (min-width: 576px) {
    margin-top: 0;
  }
`;

export const PaymentIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  border-radius: 5px;
  background-color: var(--primary);
  border: none;
`;

export const Logo = styled.h2`
  font-size: 33.45px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 63px;
  text-align: left;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled(Link)`
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  color: black;
  border: 1px solid #00000033;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const H5 = styled.h5`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
