"use client";
import styled from "styled-components";
import Header from "../../../components/search components/Header";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header />
      <main>
        <section>{children}</section>
      </main>
    </Container>
  );
}

const Container = styled.div``;
