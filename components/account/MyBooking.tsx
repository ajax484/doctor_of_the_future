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

const MyBooking = () => {
  const { fetchingTransactions, fetchingTransactionsError, transactions } =
    useGetUserTransactions({ prdtType: "bookings" });

  // console.log(transactions);

  return (
    <Loading loading={fetchingTransactions} >
      <div className="w-full">
        <Table className="py-5 text-xs ">
          <TableHeader>
            <TableRow className=" text-[11px] md:text-xs">
              <TableHead>Reference</TableHead>
              <TableHead >Booking</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Session Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TransactionRow
                transaction={transaction}
                key={transaction.booking.name}
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
  transaction: bookingTransaction;
}) => {
  const createdDate = new Date(transaction.created_at);
  const timeOfSession = new Date(transaction?.time_of_session);

  // Format the dates as localized strings
  const formattedCreatedDate = createdDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTimeOfSession = timeOfSession.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <TableRow>
      <TableCell className="font-medium">{transaction.reference}</TableCell>
      <TableCell className="font-medium">{transaction.booking.name}</TableCell>
      <TableCell>N{transaction.amount}</TableCell>
      <TableCell>{formattedCreatedDate}</TableCell>
      <TableCell>{transaction.email}</TableCell>
      <TableCell>{transaction.status}</TableCell>
      <TableCell> {formattedTimeOfSession}</TableCell>
    </TableRow>
  );
};

export default MyBooking;
