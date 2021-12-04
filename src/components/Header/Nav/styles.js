import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        justify-content: start;
    }
`;
Nav.displayName = 'Nav';

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    .active {
        color: #018FDE;
    }

    li {
        padding: 18px 10px;
        a {
            text-decoration: none;
            color: #8792A7;
            font-size: 14px;
            font-weight: 500;

            &:hover {
                color: #018FDE;
            }
        }
    }
    @media (max-width: 768px) {
        justify-content: flex-start;
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 1;
        li {
            display: flex;
            justify-content: center;
            font-size: 26px;
            font-weight: 600;
            a {
                color: #000;
                font-size: 26px;
                font-weight: 600;
            }
        }
    }
`;
Ul.displayName = 'Ul';

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;
StyledBurger.displayName = 'StyledBurger';

export const DropDown = styled.li`
    display: flex;
    padding: 0 10px;

    .link {
        padding: 10px;
        text-align: center;
        position: relative;
        cursor: pointer;

        span {
            color: #8792A7;
            font-size: 14px;
        }

        .menu {
            opacity: 0;
            position: absolute;
            top: 40px; // same as your nav height
            left: 0;
            background: #fff;
            padding: 10px;
            text-align: center;
            transition: all 1000ms ease;
            pointer-events: none;

            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
        }
          
        .menu.open {
            opacity: 1;
            pointer-events: all;
        }

    }

    @media (max-width: 768px) {
        .link.openLink {
            height: 300px;
        }

        .link span {
            color: #000;
            font-size: 26px;
            font-weight: 600; 
        }
    }
    
`;
DropDown.displayName = 'DropDownLi';
