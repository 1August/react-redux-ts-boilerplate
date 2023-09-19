import { Navigate, useNavigate } from 'react-router-dom';
import { useId } from 'react';
import { SignupRequest, SignupRequestSchema } from '../../schemas/Signup';
import { useSignupMutation } from '../../services/auth';
import { Loader } from '../../components/ui/loader';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCurrentUser } from '../../store/auth/authSlice';
import { Button } from '../../components/ui/button';

export const Signup = () => {
    const id = useId();
    const navigate = useNavigate()

    const user = useAppSelector(selectCurrentUser)
    const [signup, { isLoading, error }] = useSignupMutation()

    const {
        handleSubmit,
        control,
    } = useForm<SignupRequest>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        resolver: zodResolver(SignupRequestSchema),
    })

    const onSubmit: SubmitHandler<SignupRequest> = (data) => {
        signup(data)
            .unwrap()
            .then(response => {
                navigate('/auth/login')
            })
            .catch(error => {
                console.log('Error on signup.', error)
            })
    }

    if (user) {
        return <Navigate to={'/'}/>
    }
    if (isLoading) {
        return <Loader/>
    }
    if (error) {
        return <h1>Error</h1>
    }
    return (
        <div>
            <h1>Sign up</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name={'email'}
                    control={control}
                    render={({ field, fieldState, formState }) => (
                        <div>
                            <label htmlFor={`email-${id}`}>Email</label>
                            <input
                                {...field}
                                id={`email-${id}`}
                                type='email'
                                name={'email'}
                                placeholder={'user@gmail.com'}
                            />
                        </div>
                    )}
                />
                <Controller
                    name={'password'}
                    control={control}
                    render={({ field, fieldState, formState }) => (
                        <div>
                            <label htmlFor={`password-${id}`}>Password</label>
                            <input
                                {...field}
                                id={`password-${id}`}
                                type='password'
                                name={'password'}
                                placeholder={'****'}
                            />
                        </div>
                    )}
                />
                <Button
                    type={'submit'}
                    mode={'fill'}
                >
                    Sign up
                </Button>
            </form>
        </div>
    )
}
