
"use client";

import { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  CreditCard, 
  Lock, 
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TRANSACTIONS = [
  { id: 1, type: "Credit", entity: "stocks and bonds payment", amount: 2500000, date: "Oct 5, 2026", status: "Successful", category: "Investments" },
  { id: 2, type: "Debit", entity: "stocks and bonds payment", amount: 125000, date: "Oct 2, 2026", status: "Successful", category: "Investments" },
  { id: 3, type: "Debit", entity: "stocks and bonds payment", amount: 100000, date: "Oct 1, 2026", status: "Successful", category: "Investments" },
  { id: 4, type: "Debit", entity: "stocks and bonds payment", amount: 75000, date: "Sep 29, 2026", status: "Successful", category: "Investments" },
  { id: 5, type: "Debit", entity: "stocks and bonds payment", amount: 150000, date: "Sep 24, 2026", status: "Successful", category: "Investments" },
  { id: 6, type: "Debit", entity: "stocks and bonds payment", amount: 50000, date: "Sep 20, 2026", status: "Successful", category: "Investments" },
];

export default function DashboardPage() {
  const totalBalance = "$2,000,000.00";
  const [transferDialogOpen, setTransferDialogOpen] = useState(false);
  const [restrictionNoticeOpen, setRestrictionNoticeOpen] = useState(false);

  const handleTransfer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTransferDialogOpen(false);
    setRestrictionNoticeOpen(true);
  };

  return (
    <div id="overview" className="space-y-8 max-w-7xl mx-auto">
     
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Good Morning, Bella Karen Mendoza</h1>
          <p className="text-muted-foreground">Here is what is happening with your accounts today.</p>
        </div>
        <div className="flex gap-3">
          <Button className="font-bold flex gap-2" onClick={() => setTransferDialogOpen(true)}>
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
            <div id="security" className="p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Account Security</p>
                <p className="text-xs text-white/70">Keep your sign-in details private and contact support if you need assistance.</p>
              </div>
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
                <div className="text-2xl font-bold">$2,500,000.00</div>
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
              <div className="text-2xl font-bold">$500,000.00</div>
              <div className="text-xs text-muted-foreground mt-1">On track with budget</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Transactions Section */}
      <Card id="transactions" className="shadow-xl border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-xl font-bold text-primary">Recent Transactions</CardTitle>
            <CardDescription>Recent banking activities for this account.</CardDescription>
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
                  <TableHead className="font-bold text-primary">Description</TableHead>
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
            <Button asChild variant="link" className="text-primary font-bold hover:underline">
              <a href="#transactions">
                View All Transactions
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={transferDialogOpen} onOpenChange={setTransferDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send money</DialogTitle>
            <DialogDescription>Enter the destination bank details and amount to try a transfer.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleTransfer} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="transfer-bank-name" className="text-sm font-medium">Bank name</label>
              <Input id="transfer-bank-name" name="bankName" autoComplete="organization" placeholder="Enter bank name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="transfer-routing-number" className="text-sm font-medium">Routing number</label>
              <Input id="transfer-routing-number" name="routingNumber" inputMode="numeric" autoComplete="off" placeholder="Enter routing number" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="transfer-account-number" className="text-sm font-medium">Account number</label>
              <Input id="transfer-account-number" name="accountNumber" inputMode="numeric" autoComplete="off" placeholder="Enter account number" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="transfer-amount" className="text-sm font-medium">Amount to send</label>
              <Input id="transfer-amount" name="amount" type="number" min="0.01" step="0.01" inputMode="decimal" placeholder="0.00" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="transfer-pin" className="text-sm font-medium">Transaction PIN</label>
              <Input id="transfer-pin" name="transactionPin" type="password" inputMode="numeric" autoComplete="off" placeholder="Enter transaction PIN" required />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setTransferDialogOpen(false)}>Cancel</Button>
              <Button type="submit">Try transfer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={restrictionNoticeOpen} onOpenChange={setRestrictionNoticeOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Transfer unsuccessful</AlertDialogTitle>
            <AlertDialogDescription>
              This transfer could not be completed because your account is restricted. Please contact support for assistance.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
