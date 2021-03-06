import React, { Component } from 'react'
import styled from 'styled-components'

import media from '../../services/MediaQueries'
import SocialButtons from '../../components/SocialButtons'

class Footer extends Component {
  render() {
    const d = new Date().getFullYear()
    return (
      <Wrapper>
        <Container>
          <div>
            <p>&copy; {d} - <a href="https://pause-anxiety.com">Pause Anxiety</a></p>
          </div>
          <SocialButtons></SocialButtons>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer

const Wrapper = styled.div`
  max-width: 100%;
  background-color: #000;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`

const Container = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 40px;
  min-height: 75px;
  ${media.gtxs`
    display: flex;
    flex-wrap: nowrap;
  `}
  > div:first-child {
    width: 100%;
    > p {
      color: #fff;
      line-height: 75px;
      text-align: center;
      margin: 0;
      ${media.gtxs`
        text-align: left;
      `}
      > a {
        color: #fff;
      }
    }
  }
  > div:nth-child(2) {
    margin: 0 auto;
    ${media.gtxs`
      margin: 0;
    `}
  }
`
