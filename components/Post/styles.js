import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: var(--maxwidth-global); */

  @media (max-width: 1200px) {
    max-width: 100vw;
  }

  border-radius: 16px;

  background: white;

  padding: var(--space-md);
  margin-top: ${(props) => (props.spacedItem ? 'var(--space-md)' : '0')};

  -webkit-box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 9px 16px 0px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--text-black);

    & > strong {
      max-width: 80%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      margin-right: var(--space-sm);
      font-size: var(--text-lg);
    }
  }

  & > p {
    color: var(--text-black);

    max-width: 60%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: var(--text-md);

    & > strong,
    span,
    small,
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      font-weight: normal !important;
      font-size: var(--text-md) !important;
    }
  }
`;
