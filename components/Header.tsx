"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname: string = usePathname();
  return (
    <Container>
      <nav>
        <Link
          className={`${pathname == "/" ? "links-active" : "links"}`}
          href="/"
        >
          <p>Home</p>
          <div className="icon">x</div>
        </Link>
        <Link
          className={`${pathname == "/about" ? "links-active" : "links"}`}
          href="/about"
        >
          <p>about</p>
          <div className="icon">x</div>
        </Link>
        <Link
          className={`${pathname == "/services" ? "links-active" : "links"}`}
          href="/services"
        >
          <p>services</p>
          <div className="icon">x</div>
        </Link>
        <Link
          className={`${pathname == "/products" ? "links-active" : "links"}`}
          href="/products"
        >
          <p>products</p>
          <div className="icon">x</div>
        </Link>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  max-width: 100%;
  min-height: 5vh;
  background-color: rgba(0, 0, 0, 0.8);
  nav {
    display: flex;
    flex-direction: row;
    padding: 10px 1cm 0 1cm;
  }
  .links {
    width: 4cm;
    padding: 0.25cm 10px;
    border-radius: 10px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px 6px;
      border-radius: 50%;
      background-color: transparent;
      &:hover {
        background-color: grey;
      }
    }
    &:hover {
      background-color: rgb(43, 42, 42);
      border-radius: 10px 10px 0 0;
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
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px 6px;
      border-radius: 50%;
      background-color: transparent;
      &:hover {
        background-color: grey;
      }
    }
  }
`;
