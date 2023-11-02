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
  const [placeHolderValue, setPlaceHolderValue] = useState("");
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
          <span className="user-icon">
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
  }
  .bottom-layer {
  }
`;
