'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-6"
      >
        <p className="text-lg text-accent">
          You're on the list. We'll email you when it launches.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === 'loading'}
        className="px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
        required
      />
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        className="px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="press px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-destructive"
        >
          {errorMessage}
        </motion.p>
      )}
    </motion.form>
  );
}
