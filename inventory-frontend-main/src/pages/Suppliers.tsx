import { useState } from 'react';
import { Plus, Edit, Trash2, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data - will be replaced with API calls
const suppliers = [
  {
    id: '1',
    name: 'TechSupply Co.',
    email: 'contact@techsupply.com',
    phone: '+1 234 567 8900',
    productsCount: 45,
    status: 'active',
  },
  {
    id: '2',
    name: 'Furniture Plus',
    email: 'info@furnitureplus.com',
    phone: '+1 234 567 8901',
    productsCount: 23,
    status: 'active',
  },
  {
    id: '3',
    name: 'Office Supplies Inc.',
    email: 'sales@officesupplies.com',
    phone: '+1 234 567 8902',
    productsCount: 67,
    status: 'inactive',
  },
];

export default function Suppliers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Suppliers</h1>
          <p className="text-muted-foreground">Manage your supplier relationships</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Supplier
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((supplier) => (
          <Card key={supplier.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="mb-2">{supplier.name}</CardTitle>
                  <Badge variant={supplier.status === 'active' ? 'default' : 'secondary'}>
                    {supplier.status}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{supplier.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{supplier.phone}</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm">
                  <span className="font-semibold">{supplier.productsCount}</span> products supplied
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
