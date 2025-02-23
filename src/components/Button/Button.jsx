import React from 'react';
import styles from './Button.module.scss';

const Button = ({
    variant = 'filled',
    children,
    onClick,
    className,
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`.trim();

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
