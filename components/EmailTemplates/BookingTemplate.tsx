import { formatDate } from "@/utils/helpers";
import * as React from "react";

type BookingDetails = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  payment_method: string;
  payment_type: string;
  time_of_session: string; // You may consider using a Date type here for better type checking
  reference: string;
  bookingName: string;
};

export const CustomerBookingEmail: React.FC<BookingDetails> = ({
  name,
  email,
  message,
  payment_method,
  payment_type,
  phone_number,
  reference,
  time_of_session,
  bookingName,
}) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Booking Confirmation</h1>
        <p>Dear {name},</p>
        <p>Your booking details are as follows:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Email: {email}</li>
          <li>Phone Number: {phone_number}</li>
          <li>Message: {message}</li>
          <li>Payment Method: {payment_method}</li>
          <li>Payment Type: {payment_type}</li>
          <li>Booking: {bookingName}</li>
          <li>Reference: {reference}</li>
          <li>Time of Session: {formatDate(time_of_session)}</li>
        </ul>
        <p>
          Thank you for choosing our service. We look forward to seeing you on{" "}
          {formatDate(time_of_session)}.
        </p>
        <p>Best Regards,</p>
        <p>Your Booking Team</p>
      </div>
    </div>
  );
};

export const VendorBookingEmail: React.FC<BookingDetails> = ({
  name,
  email,
  message,
  payment_method,
  payment_type,
  phone_number,
  reference,
  time_of_session,
  bookingName,
}) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">New Booking Alert</h1>
        <p>Hello,</p>
        <p>A new booking has been made with the following details:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone Number: {phone_number}</li>
          <li>Message: {message}</li>
          <li>Payment Method: {payment_method}</li>
          <li>Payment Type: {payment_type}</li>
          <li>Booking: {bookingName}</li>
          <li>Reference: {reference}</li>
          <li>Time of Session: {formatDate(time_of_session)}</li>
        </ul>
        <p>
          Please review and confirm this booking as soon as possible. The
          session is scheduled for {formatDate(time_of_session)}.
        </p>
        <p>
          If you have any questions or need more information, please contact the
          customer at {email} or {phone_number}.
        </p>
        <p>Thank you for using our booking system.</p>
        <p>Best Regards,</p>
        <p>Your Vendor Team</p>
      </div>
    </div>
  );
};
