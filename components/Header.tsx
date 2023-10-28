"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname: string = usePathname();
  return (
    <Container>
      <nav>
        <Link
          className={`${pathname == "/" ? "links-active" : "links"}`}
          href="/"
        >
          Home
          <div className="icon">
            <img src="/images/close.svg" alt="close-icon" />
          </div>
        </Link>
        <Link
          className={`${pathname == "/about" ? "links-active" : "links"}`}
          href="/about"
        >
          about
          <div className="icon">
            <img src="/images/close.svg" alt="close-icon" />
          </div>
        </Link>
        <Link
          className={`${pathname == "/services" ? "links-active" : "links"}`}
          href="/services"
        >
          services
          <div className="icon">
            <img src="/images/close.svg" alt="close-icon" />
          </div>
        </Link>
        <Link
          className={`${pathname == "/products" ? "links-active" : "links"}`}
          href="/products"
        >
          products
          <div className="icon">
            <img src="/images/close.svg" alt="close-icon" />
          </div>
        </Link>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  max-width: 100%;
  min-height: 5vh;
  background-color: rgb(10, 10, 10);
  nav {
    display: flex;
    flex-direction: row;
    padding: 10px 0.25cm 0 0.25cm;
    /* gap: -1cm; */
  }
  .links {
    width: 4cm;
    padding: 0.25cm 10px;
    border-radius: 10px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5px;
      border-radius: 50%;
      background-color: transparent;
      width: 15px;
      height: 15px;
      img {
        fill: white;
        width: 100%;
        height: 100%;
      }
      &:hover {
        background-color: grey;
      }
    }
    &:hover {
      background-color: rgb(43, 42, 42);
      border-radius: 10px 10px 0 0;
      /* border-radius: 10px; */
    }
  }
  .links-active {
    width: 4cm;
    padding: 0.25cm 10px;
    border-radius: 10px 10px 0 0;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    background-color: rgb(43, 42, 42);
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5px;
      border-radius: 50%;
      background-color: transparent;
      width: 15px;
      height: 15px;
      img {
        fill: white;
        width: 100%;
        height: 100%;
      }
      &:hover {
        background-color: grey;
      }
    }
  }
`;
