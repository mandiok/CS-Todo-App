import styled from "styled-components";

const Headline = ({variant}) => {
  return (
    <div>
      <StyledH1>Awesome Todo</StyledH1>
    </div>
  )
}

export default Headline;

const StyledH1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  position: relative;
  text-transform: uppercase;
  text-shadow: -15px 5px 20px #bfbcba;
  letter-spacing: -0.05em;
  user-select: none;
  text-transform: uppercase;
  font-size: 3em;
  transition: all 0.25s ease-out;
  &:hover {
    text-shadow: -16px 6px 15px #E27D60;
  }
`