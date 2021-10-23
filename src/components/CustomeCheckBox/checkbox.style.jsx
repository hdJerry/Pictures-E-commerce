import { styled } from 'twin.macro';

export const CheckBox = styled.label `
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
            background-color: var( --secondary-color);
            &::after {
            display: block;
            }
        }
    }

    & .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #ccc;
        border-radius: 3px;

        &::after {
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 8px;
        height: 12px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        }
    }
`;