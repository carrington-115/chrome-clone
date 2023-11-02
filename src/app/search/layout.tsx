"use client";
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
  return (
    <HeaderContainer>
      <div className="top-layer"></div>
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
