"use client";
import Loading from "@/components/ui/Loading";
import { useGetTransaction } from "@/hooks/transactions";
import { CheckCircle, FlagTriangleLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

// taBLE
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SpecificResult from "./SpecificResult";

const Page = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const prdtType = searchParams.get("prdtType") || "";
  const status = searchParams.get("status");

  const { transaction, fetchingTransaction, fetchingTransactionError } =
    useGetTransaction({ reference, prdtType });

  // Convert the created_at and expire_at strings to Date objects
  const createdDate = new Date(transaction.created_at);
  const expireDate = new Date(transaction?.expire_at);
  const timeOfSession = new Date(transaction?.time_of_session);

  // Format the dates as localized strings
  const formattedCreatedDate = createdDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedExpireDate = expireDate.toLocaleDateString(undefined, {
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

  console.log(transaction);

  return (
    <Loading loading={fetchingTransaction}>
      <div className="mt-12 p-8 bg-gray-100 w-full flex flex-col mx-auto gap-8 items-center">
        <div className="flex flex-col gap-4 text-green-700 items-center">
          {status === "success" ? (
            <CheckCircle height="5em" width="5em" />
          ) : (
            <FlagTriangleLeft height="5em" width="5em" />
          )}
          <p className="md:text-2xl">
            Transaction {status === "success" ? "Successful" : "Failed"}
          </p>
        </div>
        <h1 className="border-b-[1px] font-black pb-2">Transaction Details</h1>
        <div className="w-[250px] xs:w-[340px] md:w-full">
          <Table className="py-5 text-xs ">
            <TableCaption>Your transaction data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Reference</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                {prdtType === "plans" && <TableHead>Expires On</TableHead>}
                {prdtType === "bookings" && (
                  <TableHead>Time of Session</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  {" "}
                  {transaction.reference}
                </TableCell>
                <TableCell>N{transaction.amount}</TableCell>
                <TableCell>{formattedCreatedDate}</TableCell>
                <TableCell>{transaction.email}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                {prdtType === "plans" && (
                  <TableCell className="text-right">
                    {" "}
                    {formattedExpireDate}
                  </TableCell>
                )}
                {prdtType === "bookings" && (
                  <TableCell> {formattedTimeOfSession}</TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <SpecificResult prdtType={prdtType} transaction={transaction} />
      </div>
    </Loading>
  );
};

export default Page;
