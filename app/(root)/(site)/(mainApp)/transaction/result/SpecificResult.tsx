"use client";
import Loading from "@/components/ui/Loading";
import { useGetItemLinks } from "@/hooks/shop";
import {
  bookingTransaction,
  planTransaction,
  shopTransaction,
} from "@/types/transactions";
import { DownloadIcon } from "lucide-react";
import React from "react";

const SpecificResult = ({
  prdtType,
  transaction,
}: {
  prdtType: string;
  transaction: shopTransaction | bookingTransaction | planTransaction;
}) => {
  if (prdtType === "bookings" || prdtType === "plans") {
    return (
      <div className=" flex flex-col md:flex-row gap-y-4 items-center gap-x-4">
        Congrats on choosing a plan, Send a message on whatsapp:{" "}
        <WhatsAppLink phoneNumber="+2348104375180" />
      </div>
    );
  }

  return <BookLinks ids={transaction?.books} />;
};

export default SpecificResult;

// for shop items
const BookLinks = ({ ids }: { ids: string }) => {
  const { links, fetchingLinks } = useGetItemLinks({ ids });
  console.log(links);

  return (
    <Loading loading={fetchingLinks}>
      <ul className="space-y-4">
        {links?.map((link) => (
          <li className=" flex flex-col items-center gap-y-4" key={link.id}>
            <span className=" text-center">
              Congratulations on you order for book{" "}
              <span className=" font-semibold capitalize">
                "{link.item.name}"
              </span>
            </span>
            <a
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full inline-flex gap-x-3 items-center"
              href={link.link}
            >
              <span>
                <DownloadIcon size={16} />
              </span>
              Download Now
            </a>
          </li>
        ))}
      </ul>
    </Loading>
  );
};

interface WhatsAppLinkProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({ phoneNumber }) => {
  // Format the phone number to remove any non-numeric characters
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Create the WhatsApp message if provided
  const whatsappMessage = "hello doctor,";

  // WhatsApp link URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h2a10 10 0 0 0 10 10V14L17 7h-7V3a10 10 0 0 0-7 9z" />
      </svg>
      Chat on WhatsApp
    </a>
  );
};
