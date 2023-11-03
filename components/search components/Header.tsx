"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [placeHolderValue, setPlaceHolderValue] = useState("Search Google");
  const [inputValue, setInputValue] = useState("");
  const linkActive = usePathname();
  return (
    <HeaderContainer>
      <div className="top-layer">
        <div className="logo">
          <img src="/images/google-logo.png" alt="app-logo" />
        </div>
        <div className="search-bar">
          <div className="input-bar">
            <input
              type="text"
              placeholder={placeHolderValue}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <span
            className={`${inputValue ? "cancel-icon" : ""}`}
            onClick={() => setInputValue("")}
            style={{ display: `${inputValue ? "flex" : "none"}` }}
          >
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
      <div className="bottom-layer">
        <div className="main-header">
          <Link
            className={`${linkActive === "/search" ? "link-active" : "links"}`}
            href="/search"
          >
            <span className="icon">
              <img src="/images/search.svg" alt="search-icon" />
            </span>
            <p>All</p>
          </Link>
          <Link
            className={`${
              linkActive === "/search/images" ? "link-active" : "links"
            }`}
            href="/search/images"
          >
            <span className="icon">
              <img src="/images/images.svg" alt="images-icon" />
            </span>
            <p>Images</p>
          </Link>
          <Link
            className={`${
              linkActive === "/search/videos" ? "link-active" : "links"
            }
            `}
            href="/search/videos"
          >
            <span className="icon">
              <img src="/images/videos.svg" alt="videos-icon" />
            </span>
            <p>Videos</p>
          </Link>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.nav`
  .top-layer {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    :nth-child(2) {
      /* margin-right: 2cm; */
    }
    .logo {
      width: 10%;
      cursor: pointer;
      img {
        width: 100px;
        height: 30px;
      }
    }
    .search-bar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 45%;
      height: 30px;
      border: 1px solid white;
      border-radius: 30px;
      padding: 0.5em 1em;
      background-color: white;
      .input-bar {
        display: flex;
        justify-content: center;
        width: 70%;
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        padding: 0.25rem;
        border-radius: 50%;
        cursor: pointer;
        svg {
          fill: black;
        }
      }
      .other-icons {
        width: 15%;
        display: flex;
        justify-content: space-between;
        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
          padding: 0.25rem;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
          }
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
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    .main-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 50%;
      .links,
      .link-active {
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 1rem 1px 1rem;
        border-bottom: 3px solid transparent;
        padding-bottom: 5px;
        .icon {
          width: 24px;
          height: 24px;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 1rem;
        }
      }
      .link-active {
        border-color: #6767ee;
      }
    }
  }
`;
