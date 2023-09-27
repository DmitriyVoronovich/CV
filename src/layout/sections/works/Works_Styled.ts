import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";

const Works = styled.section`
    ${Container} {
      ${SectionTitle} {
        margin-bottom: 6vh;
        padding-top: 12vh;

        @media ${Theme.media.tablet} {
          padding-top: 10vh;
          margin-bottom: 5vh;
        }
      }
    }
`

// Work

const Work = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  max-height: 64vh;
  aspect-ratio: 16 / 9;
`

const Link = styled.a`
  color: ${Theme.colors.primaryFont};
  display: flex;
  justify-content: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  margin: 6vh 0 12vh 0;

  @media ${Theme.media.tablet} {
    margin: 3vh 0 6vh 0;
  }
`
const Text = styled.p`
  top: 40%;
  color: ${Theme.colors.secondaryBg};
  width: 70%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 14) + 14px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

// const ButtonWrapper = styled.div`
//   position: absolute;
//   bottom: 25%;
//   left: 30%;
//   gap: 1vw;
//
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   & a {
//     & button {
//       transition: 0.8s ease-in-out;
//       opacity: 0;
//     }
//   }
//
//   @media ${Theme.media.tablet} {
//     bottom: 25%;
//     left: 33%;
//     & a {
//       & button {
//         width: 120px;
//         height: 4vh;
//       }
//     }
//   }
//
//   @media ${Theme.media.mobile2} {
//     bottom: 20%;
//     left: 30%;
//   }
//
//   @media ${Theme.media.mobile} {
//     right: 30%;
//     bottom: 10%;
//   }
// `

const ImgWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: 0.8s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    //& a {
    //  & button {
    //    transition: 0.8s ease-in-out;
    //    opacity: 1;
    //  }
    //}

    ${Text} {
      opacity: 1;
      transition: 0.8s ease-in-out;
    }
  }

  ${Text} {
    transition: 0.8s ease-in-out;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const S = {
    Works,
    Work,
    Image,
    Link,
    ImgWrapper,
    Text
    // ButtonWrapper
}