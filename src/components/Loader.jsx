import Up from "@/assets/images/up.svg";
import styled from "styled-components";

const Loader = () => {
  return (
    <Spinner>
      <MyLoader>
        <Image src={Up} />
      </MyLoader>
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
`;

const MyLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: #005aff;
  padding: 15px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  animation: rotate 1.6s infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear; /* Bir xil tezlikda */
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: ease-in; /* Sezilarli boshlanish */
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: ease-out; /* Sezilarli tugash */
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: ease-in-out; /* Boshlanish va tugash sekin */
    }
    100% {
      transform: rotate(360deg);
      animation-timing-function: linear; /* Bir xil tezlikda */
    }
  }
`;
