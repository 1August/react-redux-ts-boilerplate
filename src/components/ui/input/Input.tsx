import { ComponentProps, JSX, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss'

export type InputProps = {} & ComponentProps<'input'>
export const Input = (props: InputProps) => {
    const {
        type = 'text',
        className,
        ...otherProps
    } = props

    return (
        <input
            type={type}
            className={classNames(styles.input, className)}
            {...otherProps}
        />
    )
}

export type LabelProps = {} & ComponentProps<'label'>
export const Label = (props: LabelProps) => {
    const {
        htmlFor,
        ...otherProps
    } = props

    return (
        <label
            htmlFor={htmlFor}
            {...otherProps}
        />
    )
}
