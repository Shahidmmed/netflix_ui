import tw, { styled } from "twin.macro";

export const NavbarContainer = styled.div`
  ${tw`
  flex
  justify-between
  py-4
  px-8
  fixed
  top-0
  w-full
  transition-all
  z-10
`}

  ${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}

img {
    ${tw`
    h-8
  `}
  }

  .avatar {
    padding-right: 4rem;
  }
`;
