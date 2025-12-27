import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Customer {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  address?: string
  postal_code?: string
  city?: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  detailed_description?: string
  price: number
  original_price?: number
  category: string
  volume?: string
  weight?: string
  composition?: string
  ph_value?: string
  nutrients?: string
  in_stock: boolean
  popular: boolean
  image_url?: string
  image_urls?: string[]
  benefits?: string[]
  usage_areas?: string[]
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  order_number: string
  customer_id?: string
  customer_email: string
  customer_name: string
  customer_phone?: string
  delivery_method: 'afhalen' | 'bezorgen'
  delivery_address?: string
  delivery_postal_code?: string
  delivery_city?: string
  payment_method?: 'bij_afhalen' | 'online'
  subtotal: number
  shipping_cost: number
  total_amount: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  notes?: string
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id?: string
  product_name: string
  product_price: number
  quantity: number
  subtotal: number
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'archived'
  admin_notes?: string
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  customer_name: string
  customer_location?: string
  rating: number
  review_text: string
  product_id?: string
  service_type?: string
  approved: boolean
  featured: boolean
  created_at: string
}

export interface ProjectGallery {
  id: string
  title: string
  location: string
  size_m2?: number
  category: '0-100' | '100-250' | '250-500'
  description: string
  image_url: string
  image_urls?: string[]
  featured: boolean
  completion_date?: string
  created_at: string
}

export interface Service {
  id: string
  name: string
  description: string
  detailed_description?: string
  icon?: string
  features?: string[]
  price_range?: string
  duration?: string
  active: boolean
  sort_order: number
  created_at: string
}

// Database Functions
export const db = {
  // Products
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('in_stock', true)
      .order('popular', { ascending: false })
    
    if (error) throw error
    return data as Product[]
  },

  async getProduct(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Product
  },

  // Orders
  generateOrderNumber(): string {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return `ORD-${year}${month}${day}-${random}`
  },

  async createOrder(orderData: Omit<Order, 'id' | 'created_at' | 'updated_at'>) {
    console.log('Creating order with data:', orderData)

    const { data, error } = await supabase
      .from('orders')
      .insert(orderData)
      .select()
      .single()

    console.log('Order created:', data)
    console.log('Order error:', error)

    if (error) throw error
    return data as Order
  },

  async createOrderItems(orderItems: Omit<OrderItem, 'id' | 'created_at'>[]) {
    console.log('Creating order items:', orderItems)

    const { data, error } = await supabase
      .from('order_items')
      .insert(orderItems)
      .select()

    console.log('Order items created:', data)
    console.log('Order items error:', error)

    if (error) throw error
    return data as OrderItem[]
  },

  async getOrders() {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as Order[]
  },

  async getOrderItems(orderId: string) {
    const { data, error } = await supabase
      .from('order_items')
      .select('*')
      .eq('order_id', orderId)

    if (error) throw error
    return data as OrderItem[]
  },

  // Contact
  async submitContactForm(contactData: Omit<ContactSubmission, 'id' | 'status' | 'created_at' | 'updated_at'>) {
    console.log('submitContactForm called with:', contactData);

    const insertData = {
      ...contactData,
      status: 'new' as const
    };

    console.log('Inserting into Supabase:', insertData);

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert(insertData)
      .select()
      .maybeSingle()

    console.log('Supabase response - data:', data);
    console.log('Supabase response - error:', error);

    if (error) {
      console.error('Supabase error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      throw error;
    }

    return data as ContactSubmission
  },

  async getContactSubmissions() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as ContactSubmission[]
  },

  async updateContactSubmissionStatus(id: string, status: ContactSubmission['status']) {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .maybeSingle()

    if (error) throw error
    return data as ContactSubmission
  },

  // Reviews
  async getReviews(featured?: boolean) {
    let query = supabase
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
    
    if (featured !== undefined) {
      query = query.eq('featured', featured)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data as Review[]
  },

  async submitReview(reviewData: Omit<Review, 'id' | 'approved' | 'featured' | 'created_at'>) {
    const { data, error } = await supabase
      .from('reviews')
      .insert({
        ...reviewData,
        approved: false,
        featured: false
      })
      .select()
      .single()
    
    if (error) throw error
    return data as Review
  },

  // Project Gallery
  async getProjects(category?: string, featured?: boolean) {
    let query = supabase
      .from('project_gallery')
      .select('*')
      .order('completion_date', { ascending: false })
    
    if (category) {
      query = query.eq('category', category)
    }
    
    if (featured !== undefined) {
      query = query.eq('featured', featured)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data as ProjectGallery[]
  },

  // Services
  async getServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true })
    
    if (error) throw error
    return data as Service[]
  },

  // Newsletter
  async subscribeNewsletter(email: string, name?: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email,
        name,
        subscribed: true
      })
      .select()
      .single()
    
    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        throw new Error('Dit e-mailadres is al geregistreerd voor de nieuwsbrief')
      }
      throw error
    }
    return data
  }
}