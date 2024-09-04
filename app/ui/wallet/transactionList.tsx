import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/ui/components/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/app/ui/components/table"
import { Badge } from "@/app/ui/components/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/app/ui/components/pagination"
import Link from "next/link";


export type Transaction = {
    date: Date;
    type: 'D' | 'W';  // You can further restrict this to specific values if needed
    amount: number;
    currency: string;
    description: string;
    link: string;
};

export type TransactionList = Transaction[];

function convertType(type: string){
    if(type == "W"){
        return "Withdraw"
    }else{
        return "Deposit"
    }

}
export default function Transactions({ transactionList }: { transactionList: TransactionList }) {

    return ((

        <Card>
            <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="hidden sm:block">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactionList.map((transaction, index) => (
                                <TableRow key={index}>
                                    <TableCell>{convertDate(transaction.date)}</TableCell>
                                    <TableCell>{convertType(transaction.type)}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>

                                    <TableCell>
                                        <p>
                                            <Link href={transaction.link}>{transaction.description}</Link>
                                        </p>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="grid gap-4 sm:hidden">
                {transactionList.map((transaction, index) => (
                <article key={index} className="flex flex-col items-start gap-2 p-3 text-sm text-left transition-all border rounded-lg hover:bg-accent">
                  <div className="flex items-center w-full">
                    <div className="font-medium">{convertDate(transaction.date)}</div>
                    <div className="ml-auto text-xs text-muted-foreground">{convertType(transaction.type)}</div>
                  </div>
                  <div className="text-xs font-medium">{transaction.currency} {transaction.amount}</div>
                  
                </article>
                ))}
                
              </div>
            </CardContent>
            <CardFooter>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" active>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    ))

}

function convertDate(date: Date) {
    return date.toISOString().split('T')[0];
}
