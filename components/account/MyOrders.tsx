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
import { shopTransaction } from "@/types/transactions";

const MyOrders = () => {
  const { fetchingTransactions, fetchingTransactionsError, transactions } =
    useGetUserTransactions({ prdtType: "shop" });

  // console.log(transactions);

  return (
    <Loading loading={fetchingTransactions}>
      <div className="w-full">
        <Table className="py-5 text-xs ">
          <TableHeader>
            <TableRow>
              <TableHead className="">Reference</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TransactionRow transaction={transaction} key={transaction.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </Loading>
  );
};

const TransactionRow = ({ transaction }: { transaction: shopTransaction }) => {
  const createdDate = new Date(transaction.created_at);
  const timeOfSession = new Date(transaction?.time_of_session);

  // Format the dates as localized strings
  const formattedCreatedDate = createdDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <TableRow>
      <TableCell className="font-medium">{transaction.reference}</TableCell>
      <TableCell>N{transaction.amount}</TableCell>
      <TableCell>{formattedCreatedDate}</TableCell>
      <TableCell>{transaction.email}</TableCell>
      <TableCell>{transaction.status}</TableCell>
    </TableRow>
  );
};

export default MyOrders;
