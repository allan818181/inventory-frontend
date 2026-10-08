import { Button } from '@/components/ui/button';
import { Package, TrendingUp, Bell, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-primary">InventoryPro</h1>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          Smart Inventory Management
          <br />
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Streamline your inventory operations with automated restock alerts, real-time tracking,
          and powerful analytics. Never run out of stock again.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Powerful Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Product Management</h3>
            <p className="text-muted-foreground">
              Easily add, edit, and track all your products in one place
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
              <Bell className="h-6 w-6 text-warning" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Smart Alerts</h3>
            <p className="text-muted-foreground">
              Get notified automatically when stock levels run low
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Stock Tracking</h3>
            <p className="text-muted-foreground">
              Monitor stock movements and sales in real-time
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-chart-4/10">
              <BarChart3 className="h-6 w-6 text-chart-4" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Analytics</h3>
            <p className="text-muted-foreground">
              Make data-driven decisions with detailed reports
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of businesses managing their inventory efficiently
          </p>
          <Link to="/signup">
            <Button size="lg">Create Your Account</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
