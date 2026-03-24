import { Download, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock data - will be replaced with API calls
const salesVsRestockData = [
  { month: 'Jan', sales: 45, restock: 30 },
  { month: 'Feb', sales: 52, restock: 35 },
  { month: 'Mar', sales: 48, restock: 40 },
  { month: 'Apr', sales: 61, restock: 45 },
  { month: 'May', sales: 55, restock: 38 },
  { month: 'Jun', sales: 67, restock: 50 },
];

const fastMovingItems = [
  { product: 'Wireless Mouse', sold: 234, trend: 'up' },
  { product: 'Laptop', sold: 189, trend: 'up' },
  { product: 'USB Cable', sold: 156, trend: 'down' },
  { product: 'Keyboard', sold: 142, trend: 'up' },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Insights into your inventory performance</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Reports
        </Button>
      </div>

      {/* Sales vs Restock Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales vs Restock Trends</CardTitle>
          <CardDescription>Compare sales and restocking patterns over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesVsRestockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Sales"
              />
              <Line 
                type="monotone" 
                dataKey="restock" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Restock"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Fast Moving Items */}
        <Card>
          <CardHeader>
            <CardTitle>Fast-Moving Items</CardTitle>
            <CardDescription>Top selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Units Sold</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fastMovingItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.product}</TableCell>
                    <TableCell>{item.sold}</TableCell>
                    <TableCell>
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-success" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Low Stock Report */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Report</CardTitle>
            <CardDescription>Products requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Office Chair</p>
                  <p className="text-sm text-muted-foreground">12 / 15 units</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-warning">Low Stock</p>
                  <p className="text-xs text-muted-foreground">Need 3 more</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Printer Ink</p>
                  <p className="text-sm text-muted-foreground">3 / 20 units</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-destructive">Critical</p>
                  <p className="text-xs text-muted-foreground">Need 17 more</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">USB Cable</p>
                  <p className="text-sm text-muted-foreground">18 / 25 units</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-warning">Low Stock</p>
                  <p className="text-xs text-muted-foreground">Need 7 more</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
