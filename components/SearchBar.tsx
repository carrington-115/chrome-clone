"use client";
import { useState } from "react";
import styled from "styled-components";

export default function SearchBar() {
  const [inputClickedState, setInputClickedState] = useState(false);
  return (
    <SearchBarContainer>
      <div className="page-navigation-icons">
        <span>
          <img src="/images/arrow.svg" alt="left-arrow" />
        </span>
        <span>
          <img
            src="/images/arrow.svg"
            className="right-arrow"
            alt="right-arrow"
          />
        </span>
        <span>
          <img src="/images/refresh.svg" alt="refresh" />
        </span>
      </div>
      <div className="search-item">
        <main
          className={`${inputClickedState && "clicked"}`}
          onClick={() => setInputClickedState(true)}
        >
          <span>
            <img src="/images/lock.svg" alt="" />
          </span>
          <input type="text" placeholder="search Google or type a Url" />
          <span>
            <img src="/images/star.svg" alt="" />
          </span>
        </main>
      </div>
      <div className="app-controls">
        <span>
          <img src="/images/bookmark.svg" alt="bookmark" />
        </span>
        <span className="user-profile">
          <h3>M</h3>
        </span>
        <span>
          <img src="/images/more.svg" alt="" />
        </span>
      </div>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.25cm 0.25cm;
  justify-content: space-between;
  height: 6.5vh;
  align-items: center;
  background-color: #3d3d3d;
  padding-bottom: 1cm;
  border-bottom: 0.4px solid rgba(255, 255, 255, 0.5);
  span {
    padding: 5px;
    border-radius: 50%;
    background-color: transparent;
    width: 23px;
    height: 23px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      background-color: rgba(128, 128, 128, 0.4);
    }
  }
  .page-navigation-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    .right-arrow {
      transform: rotate(180deg);
    }
  }
  .search-item {
    width: 65%;
    main {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(15, 15, 15, 0.4);
      border-radius: 30px;
      padding: 0.15cm 0.1cm;
      border: 2px solid transparent;
      &.clicked {
        border-color: white;
      }
      input {
        width: 90%;
        height: 4.5vh;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 18px;
        color: white;
      }
    }
  }
  .app-controls {
    display: flex;
    justify-content: flex-end;
    width: 15%;
    align-items: center;
    span {
      margin: 0px 10px;
    }
    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #8b8bf1;
      color: darkblue;
    }
  }
`;
