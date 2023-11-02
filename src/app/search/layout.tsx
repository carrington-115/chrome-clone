"use client";
import { useState } from "react";
import styled from "styled-components";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header />
      <main>
        <section></section>
        <aside></aside>
      </main>
    </Container>
  );
}

function Header() {
  const [placeHolderValue, setPlaceHolderValue] = useState("Search Google");
  return (
    <HeaderContainer>
      <div className="top-layer">
        <div className="logo">
          <img src="/images/google-logo.png" alt="app-logo" />
        </div>
        <div className="search-bar">
          <div className="input-bar">
            <input type="text" placeholder={placeHolderValue} />
          </div>
          <span className="cancel-icon">
            <img src="/images/close.svg" alt="cancel-icon" />
          </span>
          <span className="other-icons">
            <img src="/images/camera.svg" alt="camera-icon" />
            <img src="/images/microphone.svg" alt="microphone-icon" />
            <img src="/images/search.svg" alt="search-icon" />
          </span>
        </div>
        <div className="user-section">
          <span className="settings-icon">
            <img src="/images/settings.svg" alt="settings-icon" />
          </span>
          <span>
            <img src="/images/apps-menu.svg" alt="apps-icons" />
          </span>
          <span className="user-name">
            <h2>M</h2>
          </span>
        </div>
      </div>
      <div className="bottom-layer"></div>
    </HeaderContainer>
  );
}

const Container = styled.div``;

const HeaderContainer = styled.nav`
  .top-layer {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    padding: 0.5rem 2rem;
    :nth-child(1) {
    }
    .logo {
      width: 10%;
      img {
        width: 100px;
        height: 30px;
      }
    }
    .search-bar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      height: 40px;
      border: 1px solid white;
      border-radius: 20px;
      background-color: white;
      .input-bar {
        display: flex;
        justify-content: center;
        width: 80%;
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 1rem;
          padding-left: 1rem;
          ::placeholder {
            font-size: 1rem;
            color: grey;
          }
        }
      }
      .cancel-icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
        svg {
          fill: black;
        }
      }
      .other-icons {
        width: 15%;

        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
          padding: 5px;
        }
      }
    }
    .user-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 15%;

      span {
        padding: 0.25em;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
        img {
          width: 36px;
          height: 36px;
        }
      }
      .user-name {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: auto;
        height: auto;
        background-color: #8383db;
        &:hover {
          background-color: #8383db;
        }
        h2 {
          font-size: 1.5em;
          font-weight: bold;
          color: darkblue;
          margin: 0.25rem 0.5rem;
        }
      }
    }
  }
  .bottom-layer {
  }
`;
