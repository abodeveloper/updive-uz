import { HashLoader } from "react-spinners";
import styled from "styled-components";

const Loader = () => {
  return (
    <Spinner>
      <HashLoader speedMultiplier={1.6} size={60} color={"#0D62FB"} />
    </Spinner>
  );
};

export default Loader;

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 50px;
`;
