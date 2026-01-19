import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, CheckCircle2, Clock, Archive, Package, ShoppingCart, Euro, MapPin, Truck, Wallet, CreditCard, Trash2, Lock, Users, Star, User } from 'lucide-react';
import { db, ContactSubmission, Order } from '../lib/supabase';
import AdminLogin from '../components/AdminLogin';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState<'contact' | 'orders' | 'customers' | 'archive'>('contact');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'in_progress' | 'completed'>('all');
  const [orderFilter, setOrderFilter] = useState<'all' | 'pending' | 'confirmed' | 'processing' | 'delivered'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'all' | 'contact' | 'orders'>('all');

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = sessionStorage.getItem('admin_authenticated');
      const loginTime = sessionStorage.getItem('admin_login_time');

      if (authStatus === 'true' && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem('admin_authenticated');
          sessionStorage.removeItem('admin_login_time');
        }
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [activeTab, isAuthenticated]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [submissionsData, ordersData] = await Promise.all([
        db.getContactSubmissions(),
        db.getOrders()
      ]);
      setSubmissions(submissionsData);
      setOrders(ordersData);
    } catch (err: any) {
      console.error('Error loading data:', err);
      setError(err.message || 'Er is een fout opgetreden bij het laden van de gegevens.');
    } finally {
      setLoading(false);
    }
  };

  const deleteContactSubmission = async (id: string) => {
    if (!confirm('Weet je zeker dat je dit contactformulier permanent wilt verwijderen?')) {
      return;
    }
    try {
      await db.deleteContactSubmission(id);
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
    } catch (err: any) {
      console.error('Error deleting contact submission:', err);
      alert('Er is een fout opgetreden bij het verwijderen.');
    }
  };

  const deleteOrder = async (id: string) => {
    if (!confirm('Weet je zeker dat je deze bestelling permanent wilt verwijderen?')) {
      return;
    }
    try {
      await db.deleteOrder(id);
      setOrders(prev => prev.filter(order => order.id !== id));
    } catch (err: any) {
      console.error('Error deleting order:', err);
      alert('Er is een fout opgetreden bij het verwijderen.');
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

  const updateOrderStatus = async (id: string, newStatus: Order['status']) => {
    try {
      await db.updateOrderStatus(id, newStatus);
      setOrders(prev =>
        prev.map(order => order.id === id ? { ...order, status: newStatus } : order)
      );
    } catch (err: any) {
      console.error('Error updating order status:', err);
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

  const getOrderStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOrderStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Nieuw';
      case 'confirmed': return 'Bevestigd';
      case 'processing': return 'In behandeling';
      case 'shipped': return 'Verzonden';
      case 'delivered': return 'Afgerond';
      case 'cancelled': return 'Geannuleerd';
      case 'archived': return 'Gearchiveerd';
      default: return status;
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_login_time');
    setIsAuthenticated(false);
  };

  const activeSubmissions = submissions.filter(sub => sub.status !== 'archived');
  const archivedSubmissions = submissions.filter(sub => sub.status === 'archived');

  const activeOrders = orders.filter(order => order.status !== 'archived');
  const archivedOrders = orders.filter(order => order.status === 'archived');

  const filteredSubmissions = filter === 'all'
    ? activeSubmissions
    : activeSubmissions.filter(sub => sub.status === filter);

  const filteredOrders = orderFilter === 'all'
    ? activeOrders
    : activeOrders.filter(order => order.status === orderFilter);

  const filteredArchive = archiveFilter === 'all'
    ? [...archivedSubmissions, ...archivedOrders]
    : archiveFilter === 'contact'
    ? archivedSubmissions
    : archivedOrders;

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600">Laden...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-32">
        <div className="container-wide">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto"></div>
            <p className="mt-4 text-neutral-600">Gegevens laden...</p>
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
              onClick={loadData}
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
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-900">Admin Panel</h1>
                <p className="text-xs text-stone-600">Koet Tuin & Boomzorg</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors font-semibold"
            >
              Uitloggen
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Admin Dashboard</h1>
          <p className="text-neutral-600">Beheer contactaanvragen, bestellingen en klanten</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'contact'
                ? 'text-primary-900 border-b-2 border-primary-900'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Contactformulieren</span>
              <span className="px-2 py-0.5 bg-primary-100 text-primary-900 rounded-full text-xs font-semibold">
                {activeSubmissions.length}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'orders'
                ? 'text-primary-900 border-b-2 border-primary-900'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Bestellingen</span>
              <span className="px-2 py-0.5 bg-primary-100 text-primary-900 rounded-full text-xs font-semibold">
                {activeOrders.length}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'customers'
                ? 'text-primary-900 border-b-2 border-primary-900'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Klanten</span>
              <span className="px-2 py-0.5 bg-primary-100 text-primary-900 rounded-full text-xs font-semibold">
                {[...new Set(orders.map(o => o.customer_email.toLowerCase()))].length}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'archive'
                ? 'text-primary-900 border-b-2 border-primary-900'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Archive className="w-5 h-5" />
              <span>Archief</span>
              <span className="px-2 py-0.5 bg-primary-100 text-primary-900 rounded-full text-xs font-semibold">
                {archivedSubmissions.length + archivedOrders.length}
              </span>
            </div>
          </button>
        </div>

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <>
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Alle ({activeSubmissions.length})
              </button>
              <button
                onClick={() => setFilter('new')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'new'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Nieuw ({activeSubmissions.filter(s => s.status === 'new').length})
              </button>
              <button
                onClick={() => setFilter('in_progress')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'in_progress'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                In behandeling ({activeSubmissions.filter(s => s.status === 'in_progress').length})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'completed'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Afgerond ({activeSubmissions.filter(s => s.status === 'completed').length})
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
                        <button
                          onClick={() => deleteContactSubmission(submission.id)}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-red-50 text-red-700 hover:bg-red-100 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Verwijderen
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
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <>
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                onClick={() => setOrderFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  orderFilter === 'all'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Alle ({activeOrders.length})
              </button>
              <button
                onClick={() => setOrderFilter('pending')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  orderFilter === 'pending'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Nieuw ({activeOrders.filter(o => o.status === 'pending').length})
              </button>
              <button
                onClick={() => setOrderFilter('confirmed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  orderFilter === 'confirmed'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Bevestigd ({activeOrders.filter(o => o.status === 'confirmed').length})
              </button>
              <button
                onClick={() => setOrderFilter('processing')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  orderFilter === 'processing'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                In behandeling ({activeOrders.filter(o => o.status === 'processing').length})
              </button>
              <button
                onClick={() => setOrderFilter('delivered')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  orderFilter === 'delivered'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Afgerond ({activeOrders.filter(o => o.status === 'delivered').length})
              </button>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Package className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-600 text-lg">Geen bestellingen gevonden</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-neutral-900">
                            {order.order_number}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                            {getOrderStatusText(order.status)}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2 text-neutral-600">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              <a href={`mailto:${order.customer_email}`} className="hover:text-primary-900">
                                {order.customer_email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              <a href={`tel:${order.customer_phone}`} className="hover:text-primary-900">
                                {order.customer_phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(order.created_at).toLocaleDateString('nl-NL', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-neutral-600">
                              {order.delivery_method === 'afhalen' ? (
                                <>
                                  <MapPin className="w-4 h-4" />
                                  <span>Afhalen in Bakkum</span>
                                </>
                              ) : (
                                <>
                                  <Truck className="w-4 h-4" />
                                  <span>Bezorgen: {order.delivery_address}, {order.delivery_postal_code} {order.delivery_city}</span>
                                </>
                              )}
                            </div>
                            {order.pickup_date && (
                              <div className="flex items-center gap-2 text-neutral-600">
                                <Calendar className="w-4 h-4" />
                                <span className="font-semibold text-primary-900">
                                  Afhaaldatum: {new Date(order.pickup_date).toLocaleDateString('nl-NL', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-neutral-600">
                              {order.payment_method === 'bij_afhalen' ? (
                                <>
                                  <Wallet className="w-4 h-4" />
                                  <span>Betalen bij afhalen (Contant/Pin)</span>
                                </>
                              ) : order.payment_method === 'online' ? (
                                <>
                                  <CreditCard className="w-4 h-4" />
                                  <span>Online betaling (iDEAL/Creditcard)</span>
                                </>
                              ) : (
                                <>
                                  <Wallet className="w-4 h-4" />
                                  <span>Betaalmethode niet opgegeven</span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Euro className="w-4 h-4 text-neutral-600" />
                              <span className="text-lg font-bold text-primary-900">
                                €{Number(order.total_amount).toFixed(2)}
                              </span>
                              <span className="text-xs text-neutral-500">
                                (Subtotaal: €{Number(order.subtotal).toFixed(2)} + Verzending: €{Number(order.shipping_cost).toFixed(2)})
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => updateOrderStatus(order.id, 'pending')}
                          disabled={order.status === 'pending'}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            order.status === 'pending'
                              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                              : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                          }`}
                        >
                          Nieuw
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'confirmed')}
                          disabled={order.status === 'confirmed'}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            order.status === 'confirmed'
                              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                              : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                          }`}
                        >
                          Bevestigd
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'processing')}
                          disabled={order.status === 'processing'}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            order.status === 'processing'
                              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                              : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                          }`}
                        >
                          In behandeling
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          disabled={order.status === 'delivered'}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            order.status === 'delivered'
                              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                              : 'bg-green-50 text-green-700 hover:bg-green-100'
                          }`}
                        >
                          Afgerond
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'archived')}
                          disabled={order.status === 'archived'}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            order.status === 'archived'
                              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                              : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          Archiveren
                        </button>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-red-50 text-red-700 hover:bg-red-100 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Verwijderen
                        </button>
                      </div>
                    </div>

                    {order.notes && (
                      <div className="border-t border-neutral-200 pt-4 mt-4">
                        <p className="text-sm font-semibold text-neutral-700 mb-2">Notities:</p>
                        <p className="text-neutral-600 text-sm">{order.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Customers Tab */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-stone-600">Totaal Klanten</h3>
                  <Users className="w-8 h-8 text-primary-900" />
                </div>
                <p className="text-3xl font-bold text-stone-900">
                  {[...new Set(orders.map(o => o.customer_email.toLowerCase()))].length}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-stone-600">Terugkerende Klanten</h3>
                  <Star className="w-8 h-8 text-accent-600" />
                </div>
                <p className="text-3xl font-bold text-stone-900">
                  {(() => {
                    const emailCounts = orders.reduce((acc, order) => {
                      const email = order.customer_email.toLowerCase();
                      acc[email] = (acc[email] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>);
                    return Object.values(emailCounts).filter(count => count > 1).length;
                  })()}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-stone-600">Gem. Bestelwaarde</h3>
                  <Euro className="w-8 h-8 text-primary-900" />
                </div>
                <p className="text-3xl font-bold text-stone-900">
                  €{orders.length > 0
                    ? (orders.reduce((sum, o) => sum + o.total_amount, 0) / orders.length).toFixed(2)
                    : '0.00'
                  }
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-stone-900 mb-4">Alle Klanten</h3>

              <div className="space-y-3">
                {(() => {
                  const customerData = orders.reduce((acc, order) => {
                    const email = order.customer_email.toLowerCase();
                    if (!acc[email]) {
                      acc[email] = {
                        name: order.customer_name,
                        email: order.customer_email,
                        phone: order.customer_phone,
                        orders: [],
                        totalSpent: 0
                      };
                    }
                    acc[email].orders.push(order);
                    acc[email].totalSpent += order.total_amount;
                    return acc;
                  }, {} as Record<string, any>);

                  const customers = Object.values(customerData).sort(
                    (a: any, b: any) => b.orders.length - a.orders.length
                  );

                  return customers.map((customer: any) => (
                    <div
                      key={customer.email}
                      className="flex items-center justify-between p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-900" />
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">{customer.name}</p>
                          <p className="text-sm text-stone-600">{customer.email}</p>
                          {customer.phone && (
                            <p className="text-sm text-stone-500">{customer.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm text-stone-600">Bestellingen</p>
                            <p className="text-lg font-bold text-stone-900">
                              {customer.orders.length}x
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-stone-600">Totaal</p>
                            <p className="text-lg font-bold text-primary-900">
                              €{customer.totalSpent.toFixed(2)}
                            </p>
                          </div>
                          {customer.orders.length > 1 && (
                            <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                              <Star className="w-5 h-5 text-accent-600" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Archive Tab */}
        {activeTab === 'archive' && (
          <>
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                onClick={() => setArchiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  archiveFilter === 'all'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Alle ({archivedSubmissions.length + archivedOrders.length})
              </button>
              <button
                onClick={() => setArchiveFilter('contact')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  archiveFilter === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Contactformulieren ({archivedSubmissions.length})
              </button>
              <button
                onClick={() => setArchiveFilter('orders')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  archiveFilter === 'orders'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Bestellingen ({archivedOrders.length})
              </button>
            </div>

            {filteredArchive.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Archive className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-600 text-lg">Geen gearchiveerde items</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredArchive.map((item) => {
                  const isOrder = 'order_number' in item;

                  if (isOrder) {
                    const order = item as Order;
                    return (
                      <div
                        key={order.id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <h3 className="text-xl font-semibold text-neutral-900">
                                {order.order_number}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                                {getOrderStatusText(order.status)}
                              </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-2 text-neutral-600">
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  <a href={`mailto:${order.customer_email}`} className="hover:text-primary-900">
                                    {order.customer_email}
                                  </a>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {new Date(order.created_at).toLocaleDateString('nl-NL', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Euro className="w-4 h-4 text-neutral-600" />
                                  <span className="text-lg font-bold text-primary-900">
                                    €{Number(order.total_amount).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => deleteOrder(order.id)}
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-red-50 text-red-700 hover:bg-red-100 flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Verwijderen
                          </button>
                        </div>
                      </div>
                    );
                  } else {
                    const submission = item as ContactSubmission;
                    return (
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

                          <button
                            onClick={() => deleteContactSubmission(submission.id)}
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-red-50 text-red-700 hover:bg-red-100 flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Verwijderen
                          </button>
                        </div>

                        <div className="border-t border-neutral-200 pt-4 mt-4">
                          <p className="text-sm font-semibold text-neutral-700 mb-2">
                            Onderwerp: {submission.subject}
                          </p>
                          <p className="text-neutral-700 whitespace-pre-wrap">
                            {submission.message}
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
