import { AlertTriangle, Package, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data - will be replaced with API calls
const alerts = [
  {
    id: '1',
    product: 'Office Chair',
    category: 'Furniture',
    currentStock: 12,
    minStock: 15,
    severity: 'medium',
  },
  {
    id: '2',
    product: 'Printer Ink',
    category: 'Office Supplies',
    currentStock: 3,
    minStock: 20,
    severity: 'high',
  },
  {
    id: '3',
    product: 'USB Cable',
    category: 'Electronics',
    currentStock: 18,
    minStock: 25,
    severity: 'low',
  },
];

export default function Alerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-destructive bg-destructive/10';
      case 'medium':
        return 'border-warning bg-warning/10';
      case 'low':
        return 'border-chart-3 bg-chart-3/10';
      default:
        return '';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">Critical</Badge>;
      case 'medium':
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Low Stock Alerts</h1>
        <p className="text-muted-foreground">Products that need restocking</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Warning Alerts</CardTitle>
            <TrendingDown className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Stock running low</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Low Stock</CardTitle>
            <Package className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Items below minimum</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`border-l-4 ${getSeverityColor(alert.severity)}`}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-background p-3">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{alert.product}</h3>
                      {getSeverityBadge(alert.severity)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Category: {alert.category}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>
                        Current Stock: <span className="font-medium">{alert.currentStock}</span>
                      </span>
                      <span>
                        Minimum Required: <span className="font-medium">{alert.minStock}</span>
                      </span>
                      <span className="text-destructive font-medium">
                        Shortage: {alert.minStock - alert.currentStock} units
                      </span>
                    </div>
                  </div>
                </div>
                <Button>Restock Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
