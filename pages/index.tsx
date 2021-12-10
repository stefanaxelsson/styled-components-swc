import type { NextPage } from "next";
import styled from "styled-components";

const StyledComponentWithGlobal = styled.div`
  background: red;
  width: 100px;
  height: 100px;

  .globalClass & :after {
    color: white;
    display: block;
    content: "Only visible using babelrc";
    background: blue;
  }
`;

const StyledComponent = styled.div`
  background: red;
  width: 100px;
  height: 100px;

  :after {
    color: white;
    display: block;
    content: "Works in both";
    background: blue;
  }
`;

const Home: NextPage = () => {
  return (
    <div className="globalClass">
      <StyledComponentWithGlobal />
      <StyledComponent />
    </div>
  );
};

export default Home;
