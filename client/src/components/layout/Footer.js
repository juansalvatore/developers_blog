import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Footer>Copyright &copy; {new Date().getFullYear()} DevConnector</Footer>
  )
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  height: 60px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 300ms;
`
