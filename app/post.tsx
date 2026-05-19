'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockJobs } from '@/app/jobs';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PostJob() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ title: '', company: '', location: '', type: 'Full-time', salary: '', experience: 'Mid-level', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mockJobs.unshift({
      id: String(mockJobs.length + 1),
      ...formData,
      logoUrl: '🏢',
      postedAt: 'Just now'
    } as any);
    setSuccess(true);
    setTimeout(() => { router.push('/'); }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 mb-6"><ArrowLeft size={16} /> Back</Link>
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        {success ? (
          <div className="text-center py-6 space-y-2">
            <div className="inline-flex text-emerald-600 bg-emerald-100 p-3 rounded-full"><CheckCircle2 size={32} /></div>
            <h2 className="text-xl font-bold text-gray-900">Job Published!</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-xl font-bold">Post an Opportunity</h1>
            <input type="text" required placeholder="Job Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border p-2 rounded" />
            <input type="text" required placeholder="Company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full border p-2 rounded" />
            <input type="text" required placeholder="Location" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full border p-2 rounded" />
            <input type="text" required placeholder="Salary" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} className="w-full border p-2 rounded" />
            <textarea required rows={4} placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700">Publish</button>
          </form>
        )}
      </div>
    </div>
  );
}