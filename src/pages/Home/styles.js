import styled from 'styled-components';
import { lighten } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    position: relative;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > p {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    .discount-stamp {
      font-size: 16px;
      position: absolute;
      right: 0;
      top: 0;
      background: ${lighten(0.3, '#000')};
      color: white;
      font-weight: bold;
      border-top-right-radius: 4px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      &:before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 30px 30px 0 30px;
        border-color: ${lighten(0.3, '#000')} transparent transparent transparent;
        position: absolute;
        bottom: -30px;
        right: -1px;
      }
      span {
        line-height: 1.6;
      }
    }

    button {
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;
      display: flex;
      align-items: center;

      &:hover{
        background: ${lighten(0.2, '#000')}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0,0,0,0.1);

        svg {
          margin-right: 5px;
        }

      }
      
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  .size-list {
    li {
      display: inline-block;
      margin-right: 15px;
    }
  }
  input {
    visibility:hidden;
  }
  label {
    cursor: pointer;
  }
  input:checked + label {
    background: red;
  }
`;
