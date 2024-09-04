import { gql } from "@apollo/client";

export const MY_WALLET_QUERY = gql`
query GetMyWallet{
  myWallet{
    id
    amount
    currency
    ownerId
  }
}`