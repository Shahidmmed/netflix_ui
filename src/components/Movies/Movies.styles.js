import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
  ${tw`
  `}
`;

export const MoviesTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
      my-0
    `}
  text-align: initial;
`;

export const MoviesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-0
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}

  // Scale the movie img when the user hovers on it.
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09);
  }
`;
