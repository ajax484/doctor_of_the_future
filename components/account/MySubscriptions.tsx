"use client";
import { useGetUserTransactions } from "@/hooks/transactions";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Loading from "../ui/Loading";

const MySubscriptions = () => {
  const { fetchingTransactions, fetchingTransactionsError, transactions } =
    useGetUserTransactions({ prdtType: "subscriptions" });

  // console.log(transactions);

  return (
    <Loading loading={fetchingTransactions} >
      <div className="w-full">
        <Table className="py-5 text-xs ">
          <TableHeader>
            <TableRow>
              <TableHead className="">Reference</TableHead>
              {/* <TableHead>Subscription Name</TableHead> */}
              <TableHead>Amount</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expires On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TransactionRow
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </Loading>
  );
};

const TransactionRow = ({
  transaction,
}: {
  transaction: subscriptionTransaction;
}) => {
  const createdDate = new Date(transaction.created_at);
  const timeOfSession = new Date(transaction?.expire_at);

  // Format the dates as localized strings
  const formattedCreatedDate = createdDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedEndOfSubcription = timeOfSession.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <TableRow>
      <TableCell className="font-medium">{transaction.reference}</TableCell>
      {/* <TableCell className="font-medium">{transaction.name}</TableCell> */}
      <TableCell>N{transaction.amount}</TableCell>
      <TableCell>{formattedCreatedDate}</TableCell>
      <TableCell>{transaction.email}</TableCell>
      <TableCell>{transaction.status}</TableCell>
      <TableCell> {formattedEndOfSubcription}</TableCell>
    </TableRow>
  );
};


export default MySubscriptions