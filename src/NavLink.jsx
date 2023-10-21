import { NavLink as NvLinkReactRouter } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const NavLink = ({ to, children, ...props }) => {
    return (
        <NvLinkReactRouter
            {...props}
            className={({ isActive }) => {
                return isActive ? 'is-active' : undefined;
            }}
            to={to}
        >
            {children}
        </NvLinkReactRouter>
    );
};
