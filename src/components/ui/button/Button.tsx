import { ComponentProps, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss'
import { types } from 'sass';
import Color = types.Color;

type Props = {
    mode: 'outline' | 'fill' | 'text'

} & ComponentProps<'button'>

export const Button = (props: PropsWithChildren<Props>) => {
    const {
        children,
        className,
        mode,
        color,
        ...otherProps
    } = props

    return (
        <button className={classNames(styles.button, className, styles[mode], color)} {...otherProps}>
            {children}
        </button>
    )
}
