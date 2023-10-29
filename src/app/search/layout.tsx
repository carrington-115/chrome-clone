"use client";
import styled from "styled-components";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header></Header>
      <section>{children}</section>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.nav``;
