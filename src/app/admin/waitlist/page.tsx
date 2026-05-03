'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  source: string;
  created_at: string;
}

export default function AdminWaitlistPage() {
  const [key, setKey] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<WaitlistEntry[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/waitlist', {
        headers: { Authorization: `Bearer ${key}` },
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Invalid key');
        setIsLoading(false);
        return;
      }

      setData(result.data || []);
      setIsAuthed(true);
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (!data.length) return;

    const headers = ['Name', 'Email', 'Source', 'Joined At'];
    const rows = data.map((entry) => [
      entry.name,
      entry.email,
      entry.source,
      new Date(entry.created_at).toLocaleString(),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) =>
        row
          .map((cell) => `"${cell.replace(/"/g, '""')}"`)
          .join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthed) {
    return (
      <main className="w-full min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
            <input
              type="password"
              placeholder="Enter admin key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isLoading ? 'Verifying...' : 'Access'}
            </button>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-destructive"
              >
                {error}
              </motion.p>
            )}
          </motion.form>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Waitlist</h1>
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Export CSV
            </button>
          </div>

          <div className="rounded-lg border border-secondary overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary bg-secondary/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Joined At
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => (
                  <tr key={entry.id} className="border-b border-secondary hover:bg-secondary/20">
                    <td className="px-6 py-3 text-sm text-foreground">{entry.name}</td>
                    <td className="px-6 py-3 text-sm text-foreground">{entry.email}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{entry.source}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {new Date(entry.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground">
            Total: {data.length} {data.length === 1 ? 'entry' : 'entries'}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
