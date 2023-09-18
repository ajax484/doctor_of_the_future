"use client";
import Loading from "@/components/ui/Loading";
import { useGetTransaction } from "@/hooks/transactions";
import { CheckCircle, FlagTriangleLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const prdtType = searchParams.get("prdtType");
  const status = searchParams.get("status");

  const { transaction, fetchingTransaction, fetchingTransactionError } =
    useGetTransaction({ reference, prdtType });

  console.log(transaction);

  return (
    <Loading loading={fetchingTransaction} error={!!fetchingTransactionError}>
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
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {transaction.reference}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {transaction.amount}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {transaction.created_at}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {transaction.email}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Loading>
  );
};

export default Page;
