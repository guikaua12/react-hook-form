import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hookFormRegister: any;
    error?: string;
}

export default function Input({ label, id, hookFormRegister, error, ...rest }: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <input className={styles.input} {...rest} {...hookFormRegister} />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
