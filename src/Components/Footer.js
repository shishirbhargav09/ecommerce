import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <h3>Made by Shishir Bhargav</h3>

    </Container>
  )
}

export default Footer

const Container = styled.div`
z-index: 2;
  background-color: aliceblue;
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `