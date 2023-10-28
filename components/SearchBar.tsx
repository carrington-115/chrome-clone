"use client";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <Searchbar>
      <div className="page-navigation-icons">
        <img src="/images/arrow.svg" alt="left-arrow" />
        <img src="/images/arrow.svg" alt="left-arrow" />
        <img src="/images/refresh.svg" alt="refresh" />
      </div>
      <div className="search-item">
        <main className="input-component">
          <span>
            <img src="/images/lock.svg" alt="" />
          </span>
          <input type="text" placeholder="" />
          <span>
            <img src="/images/star.svg" alt="" />
          </span>
        </main>
      </div>
      <div className="app-controls">
        <img src="/images/bookmark.svg" alt="bookmark" />
        <div className="user-profile">
          <h3>M</h3>
        </div>
        <img src="/images/more.svg" alt="" />
      </div>
    </Searchbar>
  );
}

const Searchbar = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.1cm 0.25cm;
  justify-content: space-between;
  align-items: center;
  .page-navigation-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
  }
  .search-item {
    display: flex;
    width: 65%;
    justify-content: space-between;
    align-items: center;
  }
  .app-controls {
    display: flex;
    justify-content: space-between;
    width: 20%;
    align-items: center;
  }
`;
