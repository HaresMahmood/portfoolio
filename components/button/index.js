import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, onClick, ...rest }) => {
    return (
        <button
            className={classNames(
                'rounded-full transition-all h-fit px-4 py-2 text-sm font-medium ring-indigo-500 ring-offset-2 hover:ring-2 focus:outline-none focus:ring-offset-1',
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
