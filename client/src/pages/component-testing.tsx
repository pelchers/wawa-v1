import { useState } from 'react';
import UserCard from '../components/cards/UserCard';
import { User } from '../types/entities';

/**
 * Component testing page
 * This page is used to test individual components in isolation
 */
export default function ComponentTesting() {
  // Sample user data for testing
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      likesCount: 42,
      followersCount: 120,
      followingCount: 75
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      likesCount: 18,
      followersCount: 84,
      followingCount: 103
    },
    {
      id: '3',
      name: 'Alex Johnson',
      likesCount: 7
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Component Testing</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UserCard Component</h2>
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UserCard (No Actions)</h2>
        <UserCard user={users[0]} showActions={false} />
      </section>
    </div>
  );
} 