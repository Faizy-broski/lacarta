// src/components/auth/SignupForm.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button'; // Shadcn Button
import { Input } from '@/components/ui/input'; // Shadcn Input
import { Label } from '@/components/ui/label'; // Shadcn Label
import { useAuth } from '../../hooks/useAuth';
import { apiCall } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['user', 'admin']).optional(),
});

export default function SignupForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiCall('/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      login(response.user, response.token); // Store user and token
      navigate('/dashboard'); // Redirect after success
    } catch (error) {
      alert(error.message); // Handle error (use toast for better UX)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} />
        {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register('password')} />
        {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
      </div>
      <div>
        <Label htmlFor="role">Role (optional)</Label>
        <select {...register('role')} className="w-full p-2 border rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  );
}