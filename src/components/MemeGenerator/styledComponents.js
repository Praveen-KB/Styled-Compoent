import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Cont = styled.div`
  background-image: url('${props => props.imgUrl}');
  height: 100px;
  width: 100px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.fontSize};
  background-size: cover;
`

export const Text = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: #fff;
`
