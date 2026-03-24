// API Service Layer for Django Backend Integration
// All API calls will be routed through this service

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Helper function for API requests
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('access_token');
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

// Authentication API
export const authAPI = {
  login: async (email: string, password: string) => {
    return apiRequest<{ access: string; refresh: string; user: any }>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  signup: async (name: string, email: string, password: string) => {
    return apiRequest<{ access: string; refresh: string; user: any }>('/auth/signup/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  googleAuth: async (token: string) => {
    return apiRequest<{ access: string; refresh: string; user: any }>('/auth/google/', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  },

  logout: async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },
};

// Products API
export const productsAPI = {
  getAll: async () => {
    return apiRequest<any[]>('/products/');
  },

  getById: async (id: string) => {
    return apiRequest<any>(`/products/${id}/`);
  },

  create: async (product: any) => {
    return apiRequest<any>('/products/', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  update: async (id: string, product: any) => {
    return apiRequest<any>(`/products/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  },

  delete: async (id: string) => {
    return apiRequest<void>(`/products/${id}/`, {
      method: 'DELETE',
    });
  },
};

// Alerts API
export const alertsAPI = {
  getLowStock: async () => {
    return apiRequest<any[]>('/alerts/low-stock/');
  },
};

// Stock Movement API
export const stockMovementAPI = {
  getAll: async (filters?: { startDate?: string; endDate?: string; category?: string; productId?: string }) => {
    const params = new URLSearchParams();
    if (filters?.startDate) params.append('start_date', filters.startDate);
    if (filters?.endDate) params.append('end_date', filters.endDate);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.productId) params.append('product_id', filters.productId);
    
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiRequest<any[]>(`/stock-movements/${query}`);
  },

  addStock: async (productId: string, quantity: number, notes?: string) => {
    return apiRequest<any>('/stock-movements/', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId, quantity, type: 'in', notes }),
    });
  },

  removeStock: async (productId: string, quantity: number, notes?: string) => {
    return apiRequest<any>('/stock-movements/', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId, quantity, type: 'out', notes }),
    });
  },
};

// Suppliers API
export const suppliersAPI = {
  getAll: async () => {
    return apiRequest<any[]>('/suppliers/');
  },

  getById: async (id: string) => {
    return apiRequest<any>(`/suppliers/${id}/`);
  },

  create: async (supplier: any) => {
    return apiRequest<any>('/suppliers/', {
      method: 'POST',
      body: JSON.stringify(supplier),
    });
  },

  update: async (id: string, supplier: any) => {
    return apiRequest<any>(`/suppliers/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(supplier),
    });
  },

  delete: async (id: string) => {
    return apiRequest<void>(`/suppliers/${id}/`, {
      method: 'DELETE',
    });
  },
};

// Reports API
export const reportsAPI = {
  getLowStock: async () => {
    return apiRequest<any[]>('/reports/low-stock/');
  },

  getFastMoving: async () => {
    return apiRequest<any[]>('/reports/fast-moving/');
  },

  getSalesVsRestock: async (startDate?: string, endDate?: string) => {
    const params = new URLSearchParams();
    if (startDate) params.append('start_date', startDate);
    if (endDate) params.append('end_date', endDate);
    
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiRequest<any>(`/reports/sales-vs-restock/${query}`);
  },
};

// Dashboard API
export const dashboardAPI = {
  getStats: async () => {
    return apiRequest<any>('/dashboard/stats/');
  },
};
