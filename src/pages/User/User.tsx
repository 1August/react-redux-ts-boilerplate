import { Container } from '../../components/Container';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCurrentUser } from '../../store/auth/authSlice';

export const User = () => {
    const user = useAppSelector(selectCurrentUser)

    if (user == null) {
        return (
            <h1>User in not found</h1>
        )
    }
    return (
        <div>
            <Container>
                <h1>
                    {user.id}: {user.username} - {user.email}
                </h1>
            </Container>
        </div>
    )
}
