
"use client";

import { Bell, LogOut, Menu, PieChart, History, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Ensure we fallback to the local public image
  const userAvatar = PlaceHolderImages.find(img => img.id === "user-avatar")?.imageUrl || "/user-photo.jpg";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/dashboard")}>
              <div className="bg-white p-1.5 rounded-lg shadow-sm border border-black/5">
                <Logo className="h-6 w-6" />
              </div>
              <span className="hidden md:inline-block text-xl font-bold text-primary font-headline">rnainstreet Bank</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2">
                <PieChart className="w-4 h-4" /> Overview
              </button>
              <button className="text-muted-foreground hover:text-primary flex items-center gap-2">
                <History className="w-4 h-4" /> History
              </button>
              <button className="text-muted-foreground hover:text-primary flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Security
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full ring-2 ring-white" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 p-0 overflow-hidden">
                  <Avatar className="h-10 w-10 rounded-full">
                    <AvatarImage 
                      src={userAvatar} 
                      className="object-cover rounded-full" 
                      style={{ borderRadius: '50%' }}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">RF</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold leading-none">Ryan Ford</p>
                    <p className="text-xs leading-none text-muted-foreground">ryan.ford3028@gmail.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/")} className="text-destructive focus:bg-destructive/5 focus:text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="md:hidden text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-primary/60">
            <Logo className="h-4 w-4" />
            <p className="text-sm font-medium">&copy; 2024 rnainstreet Bank. Member FDIC.</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
