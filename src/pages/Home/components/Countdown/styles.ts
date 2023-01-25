import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
interface CountdownSeparatorProps {
  activeCycle: boolean
}

export const Separator = styled.div<CountdownSeparatorProps>`
  padding: 2rem 0;
  color: ${({ theme, activeCycle }) =>
    activeCycle ? theme['red-500'] : theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
