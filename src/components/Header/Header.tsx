import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'
import classNames from 'classnames';
import { Container } from '../Container';
import { ComponentProps } from 'react';
import { User } from '../../schemas/UserSchema';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout, selectCurrentUser } from '../../store/auth/authSlice';
import { MdDoneAll } from 'react-icons/md';
import { Button } from '../ui/button';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const generateLinks = (userId?: User['id']): ComponentProps<typeof NavLink>[] => {
    const links = [
        {
            to: '/',
            content: 'Home',
        },
    ]

    if (userId) {
        links.push(
            {
                to: `/user/${userId}`,
                content: 'User',
            },
        )
    } else {
        links.push(
            {
                to: '/auth/login',
                content: 'Login',
            },
            {
                to: '/auth/signup',
                content: 'Sign up',
            },
        )
    }

    return links
}

export const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectCurrentUser)
    const links = generateLinks(user?.id)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className={classNames(styles.header)}>
            <Container className={classNames(styles.container)}>
                <div className={classNames(styles.logoContainer)}>
                    <MdDoneAll size={54} className={styles.logo}/>
                    <span className={classNames(styles.logoText)}>Check</span>
                </div>
                <div className={classNames(styles.links)}>
                    {
                        links.map(link => (
                            <NavLink
                                key={link.to.toString()}
                                to={link.to}
                                className={classNames(styles.link)}
                            >
                                {link.content}
                            </NavLink>
                        ))
                    }
                    {
                        user && <Button
                            onClick={handleLogout}
                            mode={'text'}
                        >
                            Logout
                        </Button>
                    }
                </div>
            </Container>
        </header>
    )
}
