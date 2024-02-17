import Banner from "./banner/Banner_container";
import Header from "./header/Header_container";
import Navigation from "./navigation/Navigation_container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <Body>{props.children}</Body>
    </>
  );
}
