'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function LoginDetails() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true); setMessage('');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password
      });

      if (error) {
        throw error;
      }

      if (data.user?.app_metadata?.role !== 'admin') {
        await supabase.auth.signOut();
        setMessage('This account has not been granted administrator access.');
        return;
      }
      router.replace('/admin');
      router.refresh();
    } catch (error) {
      setMessage('Unable to sign in. Check your email and password.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">Email address</label>
          <input
            type="email" autoComplete="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password" autoComplete="current-password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        {message && <p role="alert" className="text-red-700 mb-4">{message}</p>}
        <button disabled={busy} type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}


