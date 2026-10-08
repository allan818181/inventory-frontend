import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data - will be replaced with API calls
const stats = [
  {
    title: 'Total Products',
    value: '1,234',
    change: '+12% from last month',
    icon: Package,
    color: 'text-primary',
  },
  {
    title: 'Low Stock Items',
    value: '23',
    change: 'Requires attention',
    icon: AlertTriangle,
    color: 'text-warning',
  },
  {
    title: 'Stock Value',
    value: '$125,430',
    change: '+8% from last month',
    icon: DollarSign,
    color: 'text-success',
  },
  {
    title: 'Stock Movement',
    value: '456',
    change: 'Last 7 days',
    icon: TrendingUp,
    color: 'text-chart-4',
  },
];

const stockMovementData = [
  { name: 'Mon', in: 40, out: 24 },
  { name: 'Tue', in: 30, out: 18 },
  { name: 'Wed', in: 50, out: 32 },
  { name: 'Thu', in: 35, out: 28 },
  { name: 'Fri', in: 45, out: 35 },
  { name: 'Sat', in: 25, out: 15 },
  { name: 'Sun', in: 20, out: 12 },
];

const categoryData = [
  { name: 'Electronics', value: 450 },
  { name: 'Furniture', value: 320 },
  { name: 'Clothing', value: 280 },
  { name: 'Food', value: 184 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your inventory overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Stock Movement</CardTitle>
            <CardDescription>Daily stock in/out for the last week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockMovementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="in" fill="hsl(var(--success))" name="Stock In" />
                <Bar dataKey="out" fill="hsl(var(--primary))" name="Stock Out" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory by Category</CardTitle>
            <CardDescription>Product distribution across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="flex flex-col items-center justify-center rounded-lg border p-6 transition-colors hover:bg-accent">
              <Package className="mb-2 h-8 w-8 text-primary" />
              <span className="font-medium">Add Product</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border p-6 transition-colors hover:bg-accent">
              <TrendingUp className="mb-2 h-8 w-8 text-success" />
              <span className="font-medium">Record Movement</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border p-6 transition-colors hover:bg-accent">
              <AlertTriangle className="mb-2 h-8 w-8 text-warning" />
              <span className="font-medium">View Alerts</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
