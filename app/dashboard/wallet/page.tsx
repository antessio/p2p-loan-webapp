import { getMyWallet } from "@/app/lib/p2ploan/api/client"
import MyWallet, { MyWalletProps} from "@/app/ui/wallet/mywallet"
import { GetMyWalletQuery } from "@/src/generated/graphql"
import Link from "next/link"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/ui/components/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/app/ui/components/table"
import { Badge } from "@/app/ui/components/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/app/ui/components/pagination"
import { Button } from "@/app/ui/button"
import Transactions from "@/app/ui/wallet/transactionList"

const WalletPage = async () => {

  const { data, error } = await getMyWallet()
  const wallet = convertMyWallet(data)
  const transactions = [
    {
      date: new Date('2023-04-15'),
      type: 'D',
      currency: "$",
      amount: 500.00,
      description: 'Contribution to Loan f37e0580-71e5-4982-a04b-66f75466b739',
      link: '/loans/f37e0580-71e5-4982-a04b-66f75466b739',
    },
    {
      date: new Date('2023-04-12'),
      type: 'W',
      currency: "$",
      amount: 200.00,
      description: 'Interests from Loan f37e0580-71e5-4982-a04b-66f75466b739',
      link: '/loans/f37e0580-71e5-4982-a04b-66f75466b739',
    },
    {
      date: new Date('2023-04-10'),
      type: 'D',
      currency: "$",
      amount: 1000.00,
      description: 'Contribution to Loan f37e0580-71e5-4982-a04b-66f75466b739',
      link: '/loans/f37e0580-71e5-4982-a04b-66f75466b739',
    },
    {
      date: new Date('2023-04-05'),
      type: 'W',
      currency: "$",
      amount: 150.00,
      description: 'Interests from Loan f37e0580-71e5-4982-a04b-66f75466b739',
      link: '/loans/f37e0580-71e5-4982-a04b-66f75466b739',
    },
    {
      date: new Date('2023-04-01'),
      type: 'D',
      currency: "$",
      amount: 500.00,
      description: 'Contribution to Loan f37e0580-71e5-4982-a04b-66f75466b739',
      link: '/loans/f37e0580-71e5-4982-a04b-66f75466b739',
    },
  ];
  
  return (

    <div className="grid w-full max-w-8xl gap-6">
      <MyWallet wallet={wallet}/>
      <Transactions transactionList={transactions}/>   
    </div>
  )
  // <div>
  //   <h1>Invoice</h1>
  //   {wallet ? <MyWallet wallet={wallet} /> : <p>---</p>}
  //   <table>
  //     <th><td></td><td>Amount</td><td>Date</td><td>Description</td></th>
  //     <tr>
  //       <td>
  //         {"->"}
  //       </td>
  //       <td>
  //         EUR 300,00
  //       </td>
  //       <td>
  //         29/09/2024
  //       </td>
  //       <td>
  //       Contribution to <a href="/loans/2c444821-038b-45c2-a19a-a4e349d1aefc">Loan 2c444821-038b-45c2-a19a-a4e349d1aefc</a>
  //       </td>
  //     </tr>
  //   </table>
  // </div>)
}

const convertMyWallet = (walletData: GetMyWalletQuery): Wallet | null => {
  if (!walletData || !walletData.myWallet) {
    return null
  }
  const wallet: MyWalletProps = {
    id: walletData.myWallet.id,
    ownerId: walletData.myWallet.ownerId,
    amount: walletData.myWallet.amount,
    currency: walletData.myWallet.currency
  }
  return wallet
}
export default WalletPage