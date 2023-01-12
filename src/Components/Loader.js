import styled from 'styled-components'
import React from 'react'

function Loader() {
  return (
    <Container>
       <div className="custom-loader"></div>
    </Container>
  )
}

export default Loader

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

.custom-loader {
  width: 100px;
  height: 100px;
  display: grid;
  animation: s4 4s infinite;
}
.custom-loader::before,
.custom-loader::after {    
  content:"";
  grid-area: 1/1;
  border:16px solid;
  border-radius: 50%;
  border-color:#766DF4 #766DF4 #0000 #0000;
  mix-blend-mode: darken;
  animation: s4 1s infinite linear;
}
.custom-loader::after {
  border-color:#0000 #0000 #E4E4ED #E4E4ED;
  animation-direction: reverse;
}

@keyframes s4{ 
  100%{transform: rotate(1turn)}
}
`