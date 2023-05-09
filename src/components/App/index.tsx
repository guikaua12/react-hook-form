import styles from './index.module.css';
import { z, ZodError } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Input from '../Input';

const loginSchema = z.object({
    email: z.string().email('Formato do e-mail invàlido.').nonempty('O e-mail nâo pode ser vazio.'),
    password: z.string().min(3).max(16),
});

type LoginType = z.infer<typeof loginSchema>;

export default function App() {
    const [output, setOutput] = useState('');
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    function submit(data: any) {
        setOutput(JSON.stringify(data));
    }

    return (
        <div className={styles.formWrapper}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <pre>{output && output}</pre>
            </div>

            <form action="" onSubmit={handleSubmit(submit)}>
                <Input
                    id="email"
                    type="text"
                    label="E-mail"
                    hookFormRegister={register('email')}
                    error={errors.email?.message}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    hookFormRegister={register('password')}
                    error={errors.password?.message}
                />

                <button type="submit" className={styles.submitButton}>
                    Login
                </button>
            </form>
        </div>
    );
}
