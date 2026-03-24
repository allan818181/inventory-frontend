import { Bell, Moon, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { useAuth } from '@/lib/auth';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-xs">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-96 overflow-y-auto">
              <div className="p-3 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">Low Stock Alert</p>
                <p className="text-xs text-muted-foreground">Product "Laptop" is running low on stock</p>
              </div>
              <div className="p-3 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">New Order</p>
                <p className="text-xs text-muted-foreground">Order #1234 has been placed</p>
              </div>
              <div className="p-3 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">Restock Complete</p>
                <p className="text-xs text-muted-foreground">Product "Mouse" has been restocked</p>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span>{user?.name}</span>
                <span className="text-xs text-muted-foreground font-normal">{user?.email}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = '/profile'}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = '/settings'}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
