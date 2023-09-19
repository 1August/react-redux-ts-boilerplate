import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss'

export type ContainerProps = {
    className?: ReturnType<typeof classNames>
}

export const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    )
}
