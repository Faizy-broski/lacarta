// src/pages/Dashboard.jsx
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button'; // Shadcn Button
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Shadcn Card (install if needed: npx shadcn-ui@latest add card)

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // No need for manual redirect; AuthContext will handle state, and ProtectedRoute will redirect to /login
  };

  if (!user) {
    return <div>Loading...</div>; // Fallback if user data isn't loaded yet
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome to Your Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Hello, {user.name}! You are logged in as a {user.role}.
            </p>
            <div className="space-y-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>User ID:</strong> {user.id}</p>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for additional dashboard content */}
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Features</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This is a placeholder for your app's main content. Add features like user management, data tables, or charts here.
            </p>
            {/* Example: Add buttons or links to other pages */}
            <div className="mt-4 space-x-2">
              <Button variant="outline">View Profile</Button>
              <Button variant="outline">Settings</Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}