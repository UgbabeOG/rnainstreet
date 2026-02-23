
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Landmark, Lock, Mail, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation logic
    setTimeout(() => {
      if (email === "ryan.ford3028@gmail.com" && password === "Funmilayo247$") {
        router.push("/dashboard");
      } else {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Authentication Failed",
          description: "Invalid email or password. Please try again.",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 shadow-lg ring-4 ring-primary/20">
            <Landmark className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary font-headline">rnainstreet Bank</h1>
          <p className="text-muted-foreground">Secure Portal Login</p>
        </div>

        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <Alert className="bg-secondary/50 border-primary/20">
                <Info className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary text-sm font-bold">Demo Credentials</AlertTitle>
                <AlertDescription className="text-xs text-muted-foreground">
                  Email: ryan.ford3028@gmail.com <br />
                  Password: Funmilayo247$
                </AlertDescription>
              </Alert>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full h-12 text-base font-bold transition-all hover:scale-[1.02]" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  "Secure Login"
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By logging in, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </form>
        </Card>

        <div className="flex justify-between text-sm text-primary font-medium px-2">
          <button className="hover:underline">Forgot password?</button>
          <button className="hover:underline">Need help?</button>
        </div>
      </div>
    </div>
  );
}
