// Footer.styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: row;

  a {
    margin: 0 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2em;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #aaa;
    }
  }

  a > * {
    margin: 0 5px;
  }

  @media (max-width: 766px) {
    flex-direction: column;

    a {
      justify-content: center;
    }
  }
`;
