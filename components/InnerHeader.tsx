"use client";
import Link from "next/link";
import styled from "styled-components";

export default function InnerHeader() {
  return (
    <Container>
      <section className="icons">
        <a className="links" href="https://gmail.com">
          Gmail
        </a>
        <Link className="links" href="/images">
          Images
        </Link>
        <a className="icon-link" href="google.com/labs">
          <img src="/images/labs.svg" alt="" />
        </a>
        <span className="user-profile">
          <h2>M</h2>
        </span>
      </section>
    </Container>
  );
}

const Container = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.25cm;
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    margin-right: 1cm;
    .links {
      text-decoration: none;
      color: white;
      /* font-siz */
      &:hover {
        text-decoration: underline;
      }
    }
    .icon-link {
      width: 30px;
      height: 30px;
      padding: 15px;
      background-color: transparent;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #8b8bf1;
      color: darkblue;
      border-radius: 50%;
      width: 1cm;
      height: 1cm;
      padding: 5px;

      h2 {
        font-size: 24px;
      }
    }
  }
`;
