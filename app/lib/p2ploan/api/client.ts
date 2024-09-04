import { ApolloError, ApolloQueryResult } from "@apollo/client"
import { initializeApollo } from "../apollo_client"
import { MY_WALLET_QUERY } from "../queries"
import { GetMyWalletQuery } from "./generated/graphql"
const apolloClient = initializeApollo()
export const getMyWallet = async ():Promise<ApolloQueryResult<GetMyWalletQuery>> => {

    return await apolloClient.query<GetMyWalletQuery>({
        query: MY_WALLET_QUERY,
        context: {}
    })
    

}