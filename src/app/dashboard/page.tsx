
"use client";

import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  CreditCard, 
  Lock, 
  AlertTriangle,
  Search,
  Download,
  Filter,
  MoreVertical
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TRANSACTIONS = [
  { id: 1, type: "Debit", entity: "Amazon.com Marketplace", amount: 45.20, date: "Feb 24, 2024", status: "Completed", category: "Shopping" },
  { id: 2, type: "Credit", entity: "MainStreet Corp - Payroll", amount: 4500.00, date: "Feb 23, 2024", status: "Completed", category: "Salary" },
  { id: 3, type: "Debit", entity: "Starbucks Coffee #129", amount: 6.50, date: "Feb 22, 2024", status: "Completed", category: "Dining" },
  { id: 4, type: "Debit", entity: "Skyline Apartments - Rent", amount: 2200.00, date: "Feb 21, 2024", status: "Completed", category: "Housing" },
  { id: 5, type: "Debit", entity: "MainStreet ATM #02 - Withdrawal", amount: 200.00, date: "Feb 20, 2024", status: "Completed", category: "Cash" },
  { id: 6, type: "Debit", entity: "Netflix.com Subscription", amount: 15.99, date: "Feb 18, 2024", status: "Completed", category: "Entertainment" },
  { id: 7, type: "Debit", entity: "Shell Gas Station", amount: 64.30, date: "Feb 15, 2024", status: "Completed", category: "Transport" },
];

export default function DashboardPage() {
  const totalBalance = "$671,893.00";

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Good Morning, Ryan</h1>
          <p className="text-muted-foreground">Here is what is happening with your accounts today.</p>
        </div>
        <div className="flex gap-3">
          <Button className="font-bold flex gap-2">
            <TrendingUp className="w-4 h-4" /> Send Money
          </Button>
          <Button variant="outline" className="font-bold flex gap-2 border-primary/20 text-primary">
            <Download className="w-4 h-4" /> Statement
          </Button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main Balance Card */}
        <Card className="relative overflow-hidden border-none shadow-xl bg-gradient-to-br from-primary to-primary/80 text-white col-span-1 md:col-span-2 lg:col-span-2">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Wallet className="w-48 h-48 -mr-16 -mt-16" />
          </div>
          <CardHeader className="relative">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-sm font-medium mb-1">Total Account Balance</p>
                <h2 className="text-5xl font-bold tracking-tight mb-2 font-headline">{totalBalance}</h2>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-accent text-accent-foreground font-bold flex gap-1 border-none px-3">
                    <TrendingUp className="w-3 h-3" /> +2.4%
                  </Badge>
                  <span className="text-white/60 text-xs">Since last month</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative mt-4">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center animate-pulse">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Account Status: Frozen</p>
                <p className="text-xs text-white/70">Post No Debit (PND) active. Please contact support for verification.</p>
              </div>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 border border-white/30 text-xs font-bold">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mini Stats Card */}
        <div className="grid gap-6">
          <Card className="shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-accent" /> Total Inbound (Monthly)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450.00</div>
              <div className="text-xs text-accent font-medium mt-1">+12% from last month</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <ArrowDownRight className="w-4 h-4 text-destructive" /> Total Outbound (Monthly)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,892.40</div>
              <div className="text-xs text-muted-foreground mt-1">On track with budget</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alerts */}
      <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive animate-in slide-in-from-right-4 duration-1000">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-bold">Important Notice: Your account is currently under review. Online transfers are temporarily disabled.</p>
      </div>

      {/* Transactions Section */}
      <Card className="shadow-xl border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-xl font-bold text-primary">Recent Transactions</CardTitle>
            <CardDescription>A list of your most recent banking activity.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-[250px]" />
            </div>
            <Button variant="outline" size="icon" className="border-primary/20 text-primary">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-primary/20 text-primary">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-primary/10">
            <Table>
              <TableHeader className="bg-secondary/30">
                <TableRow>
                  <TableHead className="font-bold text-primary">Entity</TableHead>
                  <TableHead className="font-bold text-primary">Date</TableHead>
                  <TableHead className="font-bold text-primary">Category</TableHead>
                  <TableHead className="font-bold text-primary">Status</TableHead>
                  <TableHead className="text-right font-bold text-primary">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TRANSACTIONS.map((tx) => (
                  <TableRow key={tx.id} className="hover:bg-secondary/10 transition-colors">
                    <TableCell className="font-bold py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${tx.type === 'Credit' ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary'}`}>
                          {tx.type === 'Credit' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                        </div>
                        {tx.entity}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm font-medium">{tx.date}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-secondary text-primary font-bold border-none px-2 py-0.5">
                        {tx.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">{tx.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`text-right font-bold text-lg ${tx.type === 'Credit' ? 'text-accent' : 'text-primary'}`}>
                      {tx.type === 'Credit' ? '+' : '-'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button variant="link" className="text-primary font-bold hover:underline">
              View All Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
