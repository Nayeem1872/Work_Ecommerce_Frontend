import Link from "next/link";
import styled from "styled-components";

import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";
import User from "./icons/User";
import { UserButton,   SignedIn,
  SignedOut,
  SignInButton,} from "@clerk/nextjs";


const StyleHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  margin-bottom: -5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
    z-index: 4;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  margin-bottom: -15px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    align-items: center; /* Add this line to align items vertically */
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  &:hover {
    color: #fff; 
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -15px;
  
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  a:first-child {
    margin-right: 10px; /* You can adjust the value as needed */
  }
`;
const LogoImage = styled.img`
  width: 40px; /* Adjust the width and height as per your logo's size */
  height: auto;
  margin-right: 10px;
  margin-bottom: -10px;
  border-radius: 50%;

  /* Add some margin to separate the logo from the text */
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);



  return (
    <StyleHeader>
      <Center>
        <Wrapper>
          <Logo href="/">
            <LogoImage src="/2.jpg" alt="Logo" />
            Ecommerce
          </Logo>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/categories"}>Product List</NavLink>
            <NavLink href={"/certificate"}>Orders</NavLink>
            <NavLink href={"/cart"}>Cart({cartProducts.length})</NavLink>
          </StyledNav>
          <SideIcons>
            <Link href={"/search"}>
              <SearchIcon  size={32}/>
            </Link>
           
            <SignedOut>
              <Link href="sign-in">
                <User />
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyleHeader>
  );
}
