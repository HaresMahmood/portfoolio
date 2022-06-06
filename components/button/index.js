import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, onClick, ...rest }) => {
    return (
        <button
            className={classNames(
                'rounded-full border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2',
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
