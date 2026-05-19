'use client';

import { useState } from 'react';
import { mockJobs, Job } from '@/app/jobs';
import { Search, MapPin, Briefcase, DollarSign, Award, Clock } from 'lucide-react';

export default function Home() {
  const [jobs] = useState<Job[]>(mockJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(mockJobs[0]);
  const [isApplied, setIsApplied] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesExp = selectedExp === 'All' || job.experience === selectedExp;
    return matchesSearch && matchesType && matchesExp;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Discover Your Next Breakthrough</h1>
        <div className="mt-8 max-w-3xl mx-auto bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200">
            <Search className="text-gray-400 shrink-0" size={20} />
            <input 
              type="text" placeholder="Job title, keywords, or company..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto px-2 justify-between">
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer py-2 font-medium">
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>
            <select value={selectedExp} onChange={(e) => setSelectedExp(e.target.value)} className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer py-2 font-medium">
              <option value="All">All Experience</option>
              <option value="Entry-level">Entry-level</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Available Listings ({filteredJobs.length})</h2>
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-xl p-8 border text-center text-gray-500">No matching jobs found.</div>
          ) : (
            filteredJobs.map((job) => (
              <div 
                key={job.id} onClick={() => { setSelectedJob(job); setIsApplied(false); }}
                className={`bg-white border rounded-xl p-5 shadow-sm cursor-pointer hover:border-indigo-500 transition-all ${selectedJob?.id === job.id ? 'ring-2 ring-indigo-600 border-transparent' : 'border-gray-200'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-2xl shrink-0">{job.logoUrl}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                    <div className="flex gap-4 pt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-7">
          {selectedJob ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900">{selectedJob.title}</h2>
              <p className="text-indigo-600 font-medium mb-4">{selectedJob.company}</p>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-gray-400">Salary</p><p className="text-sm font-semibold">{selectedJob.salary}</p></div>
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-gray-400">Experience</p><p className="text-sm font-semibold">{selectedJob.experience}</p></div>
              </div>
              <p className="text-sm text-gray-500 bg-indigo-50 p-2 rounded mb-4 flex items-center gap-2"><Clock size={16} /> Posted {selectedJob.postedAt}</p>
              <p className="text-gray-600">{selectedJob.description}</p>
              <div className="mt-6 pt-4 border-t">
                {isApplied ? (
                  <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-center font-medium">🎉 Application Submitted!</div>
                ) : (
                  <button onClick={() => setIsApplied(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition">Quick Apply Now</button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border rounded-xl p-12 text-center text-gray-400">Select a job position to review details.</div>
          )}
        </div>
      </div>
    </div>
  );
}