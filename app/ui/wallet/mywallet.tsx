
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/ui/components/card"
import { Button } from "@/app/ui/button"

export type MyWalletProps = {
  id: string,
  ownerId: string,
  amount: number,
  currency: string
}

async function MyWallet({ wallet }: { wallet: MyWalletProps }) {

  return (
    <Card>
        <CardHeader>
          <CardTitle>Your Wallet</CardTitle>
          <CardDescription>Manage your funds and transactions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <div className="text-sm font-medium text-muted-foreground">Current Balance</div>
              <div className="text-3xl font-bold">{wallet.currency} {wallet.amount}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full">
                Deposit
              </Button>
              <Button className="w-full">
                Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}


export default MyWallet;