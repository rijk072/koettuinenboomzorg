import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, CheckCircle2, Clock, Archive } from 'lucide-react';
import { db, ContactSubmission } from '../lib/supabase';

const Admin: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'in_progress' | 'completed'>('all');

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await db.getContactSubmissions();
      setSubmissions(data);
    } catch (err: any) {
      console.error('Error loading submissions:', err);
      setError(err.message || 'Er is een fout opgetreden bij het laden van de berichten.');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: ContactSubmission['status']) => {
    try {
      await db.updateContactSubmissionStatus(id, newStatus);
      setSubmissions(prev =>
        prev.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub)
      );
    } catch (err: any) {
      console.error('Error updating status:', err);
      alert('Er is een fout opgetreden bij het updaten van de status.');
    }
  };

  const getStatusColor = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return 'Nieuw';
      case 'in_progress': return 'In behandeling';
      case 'completed': return 'Afgerond';
      case 'archived': return 'Gearchiveerd';
      default: return status;
    }
  };

  const filteredSubmissions = filter === 'all'
    ? submissions
    : submissions.filter(sub => sub.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-32">
        <div className="container-wide">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto"></div>
            <p className="mt-4 text-neutral-600">Berichten laden...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-32">
        <div className="container-wide">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <p className="text-red-800 font-semibold mb-2">Fout bij laden</p>
            <p className="text-red-600">{error}</p>
            <button
              onClick={loadSubmissions}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Opnieuw proberen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24">
      <div className="container-wide">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Contactformulier Berichten</h1>
          <p className="text-neutral-600">Overzicht van alle ontvangen contactaanvragen</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-900 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Alle ({submissions.length})
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'new'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Nieuw ({submissions.filter(s => s.status === 'new').length})
          </button>
          <button
            onClick={() => setFilter('in_progress')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'in_progress'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            In behandeling ({submissions.filter(s => s.status === 'in_progress').length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Afgerond ({submissions.filter(s => s.status === 'completed').length})
          </button>
        </div>

        {filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Mail className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-600 text-lg">Geen berichten gevonden</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {submission.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                        {getStatusText(submission.status)}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${submission.email}`} className="hover:text-primary-900">
                          {submission.email}
                        </a>
                      </div>
                      {submission.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${submission.phone}`} className="hover:text-primary-900">
                            {submission.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(submission.created_at).toLocaleDateString('nl-NL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateStatus(submission.id, 'new')}
                      disabled={submission.status === 'new'}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        submission.status === 'new'
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      Nieuw
                    </button>
                    <button
                      onClick={() => updateStatus(submission.id, 'in_progress')}
                      disabled={submission.status === 'in_progress'}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        submission.status === 'in_progress'
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                      }`}
                    >
                      In behandeling
                    </button>
                    <button
                      onClick={() => updateStatus(submission.id, 'completed')}
                      disabled={submission.status === 'completed'}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        submission.status === 'completed'
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-green-50 text-green-700 hover:bg-green-100'
                      }`}
                    >
                      Afgerond
                    </button>
                    <button
                      onClick={() => updateStatus(submission.id, 'archived')}
                      disabled={submission.status === 'archived'}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        submission.status === 'archived'
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      Archiveren
                    </button>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-4 mt-4">
                  <p className="text-sm font-semibold text-neutral-700 mb-2">
                    Onderwerp: {submission.subject}
                  </p>
                  <p className="text-neutral-700 whitespace-pre-wrap">
                    {submission.message}
                  </p>
                </div>

                {submission.admin_notes && (
                  <div className="border-t border-neutral-200 pt-4 mt-4">
                    <p className="text-sm font-semibold text-neutral-700 mb-2">Admin notities:</p>
                    <p className="text-neutral-600 text-sm">{submission.admin_notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
