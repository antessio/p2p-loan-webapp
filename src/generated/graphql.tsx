import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Decimal` scalar type represents signed double-precision fractional
   * values parsed by the `Decimal` library. The Decimal appears in a JSON
   * response as a string to preserve precision.
   */
  Decimal: { input: any; output: any; }
};

export type Contribution = {
  __typename?: 'Contribution';
  amount: Scalars['Decimal']['output'];
  contributorId: Scalars['String']['output'];
  currency: Scalars['String']['output'];
};

export type Loan = {
  __typename?: 'Loan';
  amount: Scalars['Decimal']['output'];
  contributions?: Maybe<Array<Maybe<Contribution>>>;
  currency: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  interestRate?: Maybe<Scalars['Decimal']['output']>;
  ownerId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createWallet: Wallet;
  loanApproval: Loan;
  loanContribute: Loan;
  loanRequest: Loan;
  signin?: Maybe<Session>;
};


export type RootMutationTypeCreateWalletArgs = {
  amount: Scalars['Decimal']['input'];
  currency: Scalars['String']['input'];
};


export type RootMutationTypeLoanApprovalArgs = {
  interestRate: Scalars['Decimal']['input'];
  loanId: Scalars['ID']['input'];
};


export type RootMutationTypeLoanContributeArgs = {
  contributionAmount: Scalars['Decimal']['input'];
  contributorId: Scalars['String']['input'];
  loanId: Scalars['ID']['input'];
};


export type RootMutationTypeLoanRequestArgs = {
  amount: Scalars['Decimal']['input'];
  currency: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
};


export type RootMutationTypeSigninArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  getAllLoans?: Maybe<Array<Maybe<Loan>>>;
  getLoan?: Maybe<Loan>;
  getRequestedLoans?: Maybe<Array<Maybe<Loan>>>;
  getWallets?: Maybe<Array<Maybe<Wallet>>>;
  myWallet?: Maybe<Wallet>;
};


export type RootQueryTypeGetLoanArgs = {
  id: Scalars['ID']['input'];
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String']['output'];
};

export type Wallet = {
  __typename?: 'Wallet';
  amount: Scalars['Decimal']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ownerId: Scalars['String']['output'];
};

export type GetMyWalletQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyWalletQuery = { __typename?: 'RootQueryType', myWallet?: { __typename?: 'Wallet', id: string, amount: any, currency: string, ownerId: string } | null };


export const GetMyWalletDocument = gql`
    query GetMyWallet {
  myWallet {
    id
    amount
    currency
    ownerId
  }
}
    `;

/**
 * __useGetMyWalletQuery__
 *
 * To run a query within a React component, call `useGetMyWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyWalletQuery(baseOptions?: Apollo.QueryHookOptions<GetMyWalletQuery, GetMyWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyWalletQuery, GetMyWalletQueryVariables>(GetMyWalletDocument, options);
      }
export function useGetMyWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyWalletQuery, GetMyWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyWalletQuery, GetMyWalletQueryVariables>(GetMyWalletDocument, options);
        }
export function useGetMyWalletSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyWalletQuery, GetMyWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyWalletQuery, GetMyWalletQueryVariables>(GetMyWalletDocument, options);
        }
export type GetMyWalletQueryHookResult = ReturnType<typeof useGetMyWalletQuery>;
export type GetMyWalletLazyQueryHookResult = ReturnType<typeof useGetMyWalletLazyQuery>;
export type GetMyWalletSuspenseQueryHookResult = ReturnType<typeof useGetMyWalletSuspenseQuery>;
export type GetMyWalletQueryResult = Apollo.QueryResult<GetMyWalletQuery, GetMyWalletQueryVariables>;