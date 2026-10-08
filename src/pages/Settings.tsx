import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure your inventory management preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Your Company Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Notification Email</Label>
            <Input id="email" type="email" placeholder="notifications@example.com" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email alerts for low stock items
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily Reports</Label>
              <p className="text-sm text-muted-foreground">
                Get daily inventory summary reports
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="minStock">Default Minimum Stock Level</Label>
            <Input id="minStock" type="number" placeholder="20" />
            <p className="text-sm text-muted-foreground">
              Default minimum stock level for new products
            </p>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Configuration</CardTitle>
          <CardDescription>Django backend connection settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiUrl">API Base URL</Label>
            <Input 
              id="apiUrl" 
              placeholder="http://localhost:8000/api" 
              value={import.meta.env.VITE_API_BASE_URL || ''}
              disabled
            />
            <p className="text-sm text-muted-foreground">
              Set via VITE_API_BASE_URL environment variable
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
