import styled from "styled-components";

const Loader = () => {
  return <Spinner>⏳ Loading...</Spinner>;
};

export default Loader;

const Spinner = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 50px;
`;
