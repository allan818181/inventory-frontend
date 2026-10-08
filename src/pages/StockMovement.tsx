import { useState } from 'react';
import { Plus, Minus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Mock data - will be replaced with API calls
const movements = [
  {
    id: '1',
    date: '2024-01-15',
    product: 'Laptop',
    type: 'in',
    quantity: 20,
    notes: 'New shipment from supplier',
  },
  {
    id: '2',
    date: '2024-01-14',
    product: 'Office Chair',
    type: 'out',
    quantity: 5,
    notes: 'Sold to customer',
  },
  {
    id: '3',
    date: '2024-01-14',
    product: 'Wireless Mouse',
    type: 'in',
    quantity: 50,
    notes: 'Restocked',
  },
];

export default function StockMovement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Stock Movement</h1>
          <p className="text-muted-foreground">Track all stock transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Minus className="h-4 w-4" />
            Remove Stock
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Stock
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Movement Log</CardTitle>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movements.map((movement) => (
                <TableRow key={movement.id}>
                  <TableCell>{new Date(movement.date).toLocaleDateString()}</TableCell>
                  <TableCell className="font-medium">{movement.product}</TableCell>
                  <TableCell>
                    {movement.type === 'in' ? (
                      <Badge className="bg-success text-success-foreground">
                        <Plus className="mr-1 h-3 w-3" />
                        Stock In
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        <Minus className="mr-1 h-3 w-3" />
                        Stock Out
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{movement.quantity}</TableCell>
                  <TableCell className="text-muted-foreground">{movement.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
