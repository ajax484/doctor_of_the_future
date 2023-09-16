import { siteConfig } from "@/app/(root)/siteConfig/page";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const Terms = () => {
  return (
    <div className=" my-10">
      <h1 className=" font-semibold capitalize text-2xl md:text-3xl">
        Terms and Conditions | Policies | Cookies
      </h1>
      {/* privacy */}
      <div className=" my-2">
        <Link href={`/policies`}>
          <p className=" text-start  underline text-xs font-semibold hover:text-blue-500 cursor-pointer">
            Privacy Policy
          </p>
        </Link>
      </div>
      {/* terms and co */}
      <div className="my-5">
        <h1 className=" capitalize font-normal">Terms and conditions of use</h1>
        <p className=" text-sm text-neutral-500">
          Our Terms and Conditions were last updated on 05-09-2023
        </p>
      </div>

      {/* welcome */}
      <main className="flex mt-8 flex-col gap-y-7">
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">welcome</h1>
          <p className=" text-neutral-700 leading-8 text-sm">
            Welcome to the Doctor of the Future website and online services,
            your one-stop destination for health and nutrition solutions. Here,
            you can access a range of services that cater to your specific needs
            and goals, such as diabetes management, weight loss, hypertension
            control, gut health, and sexual wellness. You may also consult with
            our qualified and experienced health professionals, who will provide
            you with personalized and holistic advice, support, and guidance.
            Whether you want to prevent or treat a chronic condition, improve
            your physical and mental well-being, or enhance your quality of
            life, we are here to help you achieve your health and nutrition
            objectives.
          </p>
        </div>
        {/* general terms */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            general terms
          </h1>
          <p className=" text-neutral-700 leading-8 text-sm">
            By accessing and using the Doctor of the future website, you confirm
            that you are in agreement with and bound by the Terms of Use
            contained in the terms & conditions outlined below. These terms
            apply to the entire website and any email or other type of
            communication between you and Doctor of the Future. These Terms of
            Use cover the uses for all of this Site. You may also need to comply
            with other rules, policies, and notices that we post or refer to on
            the Site, such as the Privacy Policy.
          </p>
        </div>
        {/* definations */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            definitions
          </h1>
          <p className=" text-neutral-700 leading-8 text-sm">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="my-4 flex px-5 leading-8 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 leading-8 text-sm">
              <span className=" text-black font-semibold">
                “Doctor of the Future”
              </span>{" "}
              also “We”, “Our”, “Us”, “Site”, “Platform”, refers to this
              website..
            </li>
            <li className=" text-neutral-700 leading-8 text-sm">
              <span className=" text-black font-semibold">“You”</span> , also
              “Your” or “The User”, “Consumer”, “Patient” refers to the user of
              this website.
            </li>
            <li className=" text-neutral-700 leading-8 text-sm">
              <span className=" text-black font-semibold">
                “Terms and Conditions”
              </span>{" "}
              also referred to as "Terms of Use" or
              <span className=" text-black font-semibold">“Terms”</span> means
              these Terms that form the entire agreement between You and Doctor
              of the Future regarding the use of the Service.
            </li>
            <li className=" text-neutral-700 leading-8 text-sm">
              <span className=" font-semibold text-black">“The Parties”</span>{" "}
              refers to Doctor of the Future and The User
            </li>
            <li className="text-neutral-700 leading-8 text-sm">
              <span className=" text-black font-semibold">“Provider”</span>{" "}
              refers to a Licensed Healthcare Provider
            </li>
          </ul>
        </div>

        {/* disclaimer */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            disclaimer
          </h1>
          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              We provide information, content, products, and services based on
              our research and experience to help you learn about health and
              medical topics that may affect you. Nothing in the information,
              content, products or services should be considered, or used as a
              substitute for, medical advice, diagnosis, or treatment. This Site
              and its services do not constitute the practice of any medical,
              nursing, or other professional health care advice, diagnosis, or
              treatment. You should always talk to your health care provider for
              diagnosis and treatment, including your specific medical needs.
              None of the products or services offered through this Site
              represents or warrants that any particular service or product is
              safe, appropriate, or effective for you. We advise the user to
              always seek the advice of a physician or other qualified
              healthcare provider with any questions regarding personal health
              or medical conditions.
            </li>
            <li className=" leading-8">
              IF YOU HAVE OR SUSPECT THAT YOU HAVE A MEDICAL PROBLEM OR
              CONDITION, YOU SHOULD CONTACT A QUALIFIED HEALTHCARE PROFESSIONAL
              WITHOUT DELAY. YOU SHOULD NOT DISREGARD OR POSTPONE A DOCTOR’S
              PROFESSIONAL ADVICE OR APPOINTMENT WITH A DOCTOR BECAUSE OF THE
              INFORMATION YOU HAVE ACCESSED OR HEARD IN THE DOCTOR OF THE FUTURE
              PLATFORM.
            </li>
          </ul>
        </div>
        {/* changes to terms */}

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Changes to Terms and Conditions
          </h1>
          <ul className=" px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future reserves the right to amend these terms and
              conditions at any time, and such amendments shall take effect
              immediately upon being posted on our Site. You agree to review the
              agreement periodically to be informed of such amendments, and your
              access or use of the service signifies your acceptance of the
              agreement as it is at the time of your access or use.
              Occasionally, we may offer Site visitors the opportunity to
              participate in additional features or services through this Site.
              You may need to enter into additional agreements or authorizations
              before you can access such features or services.
            </li>
          </ul>
        </div>

        {/* age requiremnts */}

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Age Requirements
          </h1>
          <ul className=" px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              The Site is designed for use by individuals who are 18 years of
              age or older. This Site is not intended for use by children under
              the age of 18. Users under the age of 18 should seek the
              assistance of a parent or guardian to use this Site
            </li>
          </ul>
        </div>

        {/* acceptance and limits */}

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Order Process, Acceptance and Limitations
          </h1>
          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              The Site does not make any offer by its Consultation services,
              rate cards, quotations or estimates. When the User orders Products
              and/or Services from the Site, or accepts a quotation, rate card,
              or estimate, for Products and/or Services, the User is making an
              offer to buy such Products and/or Services from the Company under
              these Terms and Conditions
            </li>

            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future does not accept the User’s order (and no
              contract is made, or considered to be made, between the Parties)
              until the platform sends a written confirmation of the order to
              the User or (if sooner) delivers the relevant Products and/or
              Services to the Consumer.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The User must ensure that their order, and any related
              specification(s), are complete and accurate. You can find all the
              information you need about our plans and pricing on our Site.
              There, you can compare the features and benefits of each plan or
              product and choose the one that suits your needs and budget.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We reserve the right to reject or cancel any order you place with
              us from the Site, or to limit quantities on any order, without
              giving any reason. If we reject your order, we will generally
              attempt to notify you using the email address you provided us when
              you placed the order.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We reserve the right, at our sole discretion, to limit the
              quantity of items purchased per person, per household, or per
              order. These limitations may apply to orders placed by the same
              account, the same credit card, and also to orders that use the
              same billing and/or shipping address. We will notify the User if
              such limitations are imposed. Please note that certain orders
              constitute improper use of the Site or purchase of products. Your
              account may also be restricted or terminated for any reason, at
              our sole discretion.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future also reserves the right, at our sole
              discretion, to prohibit sales to dealers or resellers. For
              purposes of these Terms of Use, reselling shall be defined as
              buying or intending to buy any product(s) from Doctor of the
              Future for the purpose of engaging in a commercial sale of that
              same product(s) with a third party
            </li>
          </ul>
        </div>

        {/* prohibited user */}

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Prohibited Uses and Security of the Site
          </h1>
          <p className=" text-sm font-normal text-neutral-700 mb-5 capitalize">
            {" "}
            you agree not to
          </p>
          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Use this website for any unlawful purpose or in contravention of
              any local, state, national, or international laws.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Use this Site to disseminate advertising or other unsolicited
              material to any third party. For example, you should not use this
              Site to spam other people with ads, promotions, or requests that
              they did not ask for or agree to receive.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Use this website to post or transmit material that is illegal,
              obscene, defamatory, threatening, harassing, abusive, slanderous,
              hateful, or embarrassing to any other person or entity.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Attempt to disable, “hack,” or otherwise interfere with the proper
              functioning of this website.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Violate or attempt to violate the security of the Site by, among
              other things:
              <ul className=" list-disc px-3">
                <li>
                  Accessing data that is not intended for Site users or logging
                  onto a server or an account that Site users are not authorized
                  to access;
                </li>
                <li>
                  Attempting to probe, scan or test the vulnerability of a
                  system or network or to breach security or authentication
                  measures without proper authorization; or
                </li>
                <li>
                  Accessing or using the Site or any part thereof without
                  authorization, in breach of these Terms of Use or applicable
                  law.
                </li>
                <li>
                  Use any scraper, crawler, spider, robot, or other automated
                  means of any kind to access or copy data on the Site, link to
                  any feature or content on the Site, or circumvent our robot
                  exclusion headers or other measures we use to prevent or
                  restrict access to the Site.
                </li>
                <li>
                  Use any device, software, routine, or any other means to
                  interfere or attempt to interfere with the proper working of
                  this Site or any activity being conducted on this Site
                </li>
              </ul>
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Breaching the system or network security may result in civil or
              criminal liability. Doctor of the Future will investigate
              incidents that may involve such breaches and may involve and
              cooperate with law enforcement authorities in prosecuting users
              who are involved in such breaches.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              If you need a user ID and password to access the Site or part of
              it that are restricted to authorized users (“Protected Areas”),
              you agree to use only your user ID and password that Doctor of the
              Future provided you to access Protected Areas. You agree to keep
              your user ID and password secret and not share or tell them to
              anyone else. You agree that you are fully responsible for
              everything that happens under your user ID. Doctor of the Future
              can stop your access to the Site or Protected Areas at any time
              for any reason or no reason.
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Account Registration and Security
          </h1>
          <p className="mb-4 capitalize text-sm font-light text-neutral-700">
            you agree to the following
          </p>
          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              You agree to provide truthful, accurate, current, and complete
              information when registering to use the Site and creating an
              account (“Registration Information”).
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You agree to update the Registration Information regularly to
              ensure that it remains truthful, accurate, current, and complete.
              If you provide any information that is false, inaccurate,
              outdated, or incomplete, or Doctor of the Future has reasonable
              grounds to suspect that such information is false, inaccurate,
              outdated, or incomplete, Doctor of the Future reserves the right
              to suspend or terminate your account.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You agree that you are solely responsible for keeping any
              passwords and any usage and activities that occur in relation to
              your account confidential.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You agree not to permit others to access your account or use your
              password. Doing so will compromise the security of your account.
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Termination and Suspension
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future may, at its sole discretion, end your account
              or your use of the Site at any time. You are personally liable for
              any orders that you place or charges that you incur before
              termination
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We reserve the right to change, suspend, or stop all or any parts
              of the Site at any time without prior notice.
            </li>
          </ul>
        </div>
        {/* modifations */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Modification of the Site and User-Generated Content
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              If you send, upload, or post any comments, ideas, suggestions,
              information, files, videos, images, or other materials to us or
              our Site (“User-Generated Content”), you agree not to provide any
              User-Generated Content that:
              <ul className=" list-disc text-neutral-700 text-sm leading-8 px-4">
                <li>
                  Is defamatory, abusive, libelous, unlawful, obscene,
                  threatening, harassing, fraudulent, pornographic, or harmful,
                  or that could encourage criminal or unethical behavior
                </li>
                <li>
                  Violates or infringes the privacy, copyright, trademark, trade
                  dress, trade secrets, or intellectual property rights of any
                  person or entity, or
                </li>
                <li>
                  Contains or transmits a virus or any other harmful component
                </li>
              </ul>
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You agree not to contact other users of the Site through
              unsolicited e-mail, telephone calls, mailings, or any other method
              of communication.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You represent and warrant that you have the legal right and
              authorization to provide all User-Generated Content to the Site
              for the purposes and the Site’s use as set forth herein.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The Site shall have a royalty-free, irrevocable, transferable
              right and license to use the User-Generated Content in whatever
              manner the Site desires, including, without limitation, to copy,
              modify, delete in its entirety, adapt, publish, translate, create
              derivative works from, and/or sell and/or distribute such
              User-Generated Content and/or incorporate such User-Generated
              Content into any form, medium, or technology throughout the world.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The Site is and shall be under no obligation:
              <ul className="px-5 list-disc text-sm text-neutral-700 leading-8">
                <li>To keep any User-Generated Content confidential;</li>
                <li>
                  To pay you any compensation for any User-Generated Content; or
                </li>
                <li>To respond to any User-Generated Content.</li>
              </ul>
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The Site does not regularly review posted User-Generated Content
              but does reserve the right (but not the obligation) to monitor and
              edit or remove any User-Generated Content submitted to the Site
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You grant the Site the right to use the name that you submit in
              connection with any User-Generated Content
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You agree not to use a false email address, impersonate any person
              or entity, or otherwise mislead as to the origin of any
              User-Generated Content.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You are and shall remain solely responsible for the content of any
              User-Generated Content you make. The Site and its affiliates take
              no responsibility and assume no liability for any User-Generated
              Content submitted by you or any third party
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Payment Methods and Conditions
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              You must provide a valid credit card number, expiration date, and
              card security code for all purchases on the Doctor of the Future
              Shop. If we cannot charge the full cost of your purchase to the
              credit card you provide, we may cancel your order or ask you for
              another form of payment
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future’s chosen third-party payment gateway will
              collect your credit card information and related personal
              information for its use in processing your payment for the
              products or services you order. If you have any complaints or
              concerns about the processing of your payment, you should contact
              us through any of the Site’s communication channels (See Contact
              Us Clause below).
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You understand that the prices for products and services may
              change from time to time.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              {" "}
              If you sign up to make recurring payments automatically, all
              charges and fees will be billed to the credit card you select
              during the setup process. If you want to use a different credit
              card or if there is a change in your credit card, you must change
              your information online. This may temporarily delay your ability
              to make online payments while we verify your new payment
              information
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You represent and warrant that if you are making online payments,
              that:
              <ul className=" list-disc px-4 text-neutral-700 text-sm leading-8">
                <li>
                  Any credit card, debit card, or bank account information you
                  provide is true, correct, and complete
                </li>
                <li>
                  Your credit/debit card company or bank will honor the charges
                  and fees you incur
                </li>
                <li>
                  You will pay the charges and fees you incur in the amounts
                  posted, including any applicable taxes
                </li>
                <li>You are the person whose name is on the card, and</li>
                <li>
                  {" "}
                  You are authorized to make a purchase or other transaction
                  with the relevant credit card and credit card information.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* prescriptions */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Prescription Products, Supplements and User Choice
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future does not recommend any specific device,
              durable medical equipment, medication, pharmacy, or pharmacologic
              product (together “Prescription Product”).
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the future or its Provider may prescribe supplements
              depending on the health status of the patient. It is advised that
              you consult your healthcare provider before taking any supplements
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              If a Provider prescribes a Supplement, he/she will limit the
              amount based on state regulations and will only prescribe such
              supplement as decided in his/her own discretion and professional
              judgment. There is no guarantee that you will get a prescription.
              You agree that any prescriptions that you get from a Provider will
              be only for your personal use. You agree to read all the product
              information and labels that are provided and to contact a
              physician or pharmacist if you have any questions about the
              prescription.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future respects your right to choose and, if you get
              a prescription for a Supplement from Doctor of the Future or a
              Provider, you can always ask Doctor of the Future to send that
              prescription to the pharmacy that you choose.
            </li>
          </ul>
        </div>
        {/* charges */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Payment Responsibility and Insurance Coverage
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              You are solely responsible for paying all charges and applicable
              fees (including delivery charges, taxes and any fees charged by
              your bank) related to your order from the Doctor of the Future
              Shop.
            </li>
          </ul>
        </div>
        {/* indmem */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Indemnification
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              You agree to defend, indemnify, and hold harmless Doctor of the
              Future from and against any claims, damages, losses, liabilities,
              costs, or expenses (including reasonable attorneys' fees and
              costs) that Doctor of the Future may suffer or incur as a result
              of a claim by a third party arising from your breach of these
              Terms of Use or applicable law, User-Generated Content and any
              other materials you post or allow to be posted on the Site, your
              use or access of the Site, access of this Site by anyone using
              your user ID and password, or any other actions you take on the
              Site.
            </li>
          </ul>
        </div>
        {/* interllectural propoery */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Intellectual property
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              The content of this Site is protected by Nigerian and
              international laws on intellectual property rights. Without prior
              written consent from the owner of these rights, you are prohibited
              from copying, reproducing, republishing, uploading, posting,
              displaying, transmitting, or framing any of these materials. You
              may only view, download, display, and print a single copy of these
              materials on a single computer for your personal, noncommercial
              use, provided that: you do not alter or modify the materials in
              any manner; you include all relevant notices and disclaimers
              (including notices of ownership); and you do not use the materials
              in a manner that implies an affiliation with Doctor of the Future.
              You acknowledge and agree that you do not acquire any ownership
              rights to these materials by using them.
            </li>
          </ul>
        </div>

        {/* disclaer */}

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Disclaimer of Warranties and Limitation of Liability
          </h1>
        </div>
        {/* acklnwolegement */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            YOU ACKNOWLEDGE AND AGREE:
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future site and any services, content, or
              information provided on or by Doctor of the Future site are
              offered on an “as is” and “as available” basis
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future makes no express or implied warranties,
              representations, or endorsements of any kind (including, but not
              limited to, warranties of title, non-infringement,
              merchantability, or fitness for a particular purpose) regarding
              the service or any merchandise, information, or service provided
              through the service.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Furthermore, Doctor of the Future does not warrant that the use of
              Doctor of the Future Site will be uninterrupted, error-free,
              secure, or free from technological problems including, but not
              limited to, unavailability of information, downtime, service
              disruptions, viruses, or worms.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You understand and agree that you are solely responsible for
              implementing adequate procedures and checkpoints to ensure the
              accuracy and reliability of your data input and output.
            </li>
          </ul>
        </div>
        {/* changes */}
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Changes and Errors in Content, Prices, and Availability
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              We reserve the right to change the content, prices, and
              availability of products and services on the Site without prior
              notice. We will correct any errors that we discover, and we may
              revoke any offer and correct any errors, inaccuracies, or
              omissions, including after you have submitted an order and whether
              or not we have confirmed your order and charged your credit card.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              If we list a product or service at an incorrect price due to a
              typographical error or an error in the pricing information from
              our suppliers, we may refuse or cancel any orders placed for that
              product or service at the incorrect price. We may refuse or cancel
              such orders regardless of whether we have confirmed your order and
              charged your credit or debit card. If we have charged your credit
              or debit card for a purchase and then canceled your order, we will
              promptly issue a credit to your credit or debit card account for
              the amount of the incorrect price. The time it takes for the
              credit to appear in your account depends on your bank’s policies.
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            Accuracy and integrity of information
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future strives to ensure the integrity and accuracy
              of the Site and its content, but it does not guarantee or warrant
              the correctness or completeness of the Site and its content. The
              Site and its content may contain typographical errors,
              inaccuracies, or other errors, and unauthorized additions,
              deletions, and alterations may be made to the Site by third
              parties. If you notice any inaccuracy on the Site, please inform
              Doctor of the Future so that it can be corrected.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future may correct any inaccuracies on the Site at
              any time without prior notice. Doctor of the Future may also
              change or update the information or content on the Site at any
              time without prior notice. Moreover, Doctor of the Future is not
              responsible or liable for any information or content posted to the
              Site by any non-Doctor of the Future affiliated third party
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">liability</h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              YOU AGREE TO USE THE SITE AT YOUR OWN RISK. Doctor of the Future
              IS NOT LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL,
              SPECIAL, EXEMPLARY, PUNITIVE, OR ANY OTHER DAMAGES, FEES, FINES,
              PENALTIES, OR LIABILITIES ARISING OUT OF OR RELATING TO YOUR USE
              OF THE SITE OR THE SERVICE, OR THE SITES ACCESSED THROUGH THE SITE
              OR THE SERVICE, AND/OR THE CONTENT OR INFORMATION PROVIDED ON THE
              SITE OR THE SERVICE. IF YOU HAVE A CLAIM AGAINST Doctor of the
              Future OR ITS LIABILITY RELATING TO A PRODUCT OR SERVICE PURCHASED
              ON OUR SITE, YOUR CLAIM IS LIMITED TO THE AMOUNT YOU PAID FOR THE
              PRODUCT OR SERVICE.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              YOUR ONLY REMEDY FOR DISSATISFACTION WITH THE SITE OR THE SERVICE
              IS TO STOP USING THEM. YOU ACKNOWLEDGE THAT THIS PARAGRAPH APPLIES
              TO ALL CONTENT, MERCHANDISE, AND SERVICES AVAILABLE THROUGH THE
              SITE.
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            links to third party
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              The Site contains links to other sites operated by third parties,
              including but not limited to third party sites that may display
              the Doctor of the Future trademarks (“Third Party Sites”). These
              links are provided for your convenience and are intended to enable
              you to access these Third Party Sites for informational purposes
              only.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future does not guarantee or endorse the substance,
              quality, functionality, accuracy, suitability, or any other aspect
              of any Third Party Site or its content. A link to a Third Party
              Site on the Doctor of the Future Site does not imply any
              sponsorship, endorsement, approval, or responsibility by Doctor of
              the Future for any Third Party Site.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future disclaims any liability or responsibility for
              any products or services offered on any Third Party Site. The
              terms and conditions of use and privacy policy of any Third Party
              Site may differ significantly from the terms and conditions of use
              and legal notices that apply to your use of the Site. Please
              review the terms and conditions of use for all Third Party Sites
              carefully before you use them.
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">dispute</h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              All disputes between the Parties in relation to any matter
              whatsoever touching these Terms of Service shall be settled
              amicably by the parties. Where this fails, the dispute shall be
              referred to a single arbitrator appointed and agreed upon by the
              parties. Provided that, no provisions of this Agreement shall
              serve as a bar to either party pursuing redress or seeking any
              interlocutory relief in a court of competent jurisdiction where
              irreparable injury will occasion the aggrieved party if immediate
              redress is not sought and obtained.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The Laws of the Federal Republic of Nigeria apply to this
              agreement.
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-2xl capitalize mb-4 font-semibold">
            integration
          </h1>

          <ul className="px-5 list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              These terms are the only agreement between the parties. The Site
              shall not be bound by any other term, representation, warranty,
              promise or anything express or implied that is not written here.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Doctor of the Future does not waive any of its rights under these
              Terms even if it grants some relaxation or indulgence to the User
              at any time.
            </li>
          </ul>
        </div>
      </main>

      {/* contact us */}
      <main className=" my-5">
        <h1 className=" capitalize mb-4 font-normal">Contact us</h1>
        <p className=" mb-4">
          Don't hesitate to contact us if you have any questions
        </p>
        <ul className=" flex flex-col gap-y-4 capitalize">
          <li className=" flex flex-col gap-y-1">
            <span className=" font-semibold capitalize">via email</span>
            <a
              className="hover:text-neutral-400 lowercase text-blue-500"
              href="mailto:gidietsworld@gmail.com"
            >
              gidietsworld@gmail.com
            </a>
          </li>

          <li className=" flex flex-col gap-y-1">
            <span className=" font-semibold capitalize">via phone</span>
            <span>(+234) 9123185655</span>
          </li>
        </ul>
      </main>

      {/* privacy policy */}
      <div>
        <Link href={`/policies`}>
          <p className=" font-semibold underline hover:text-blue-500 cursor-pointer">
            Privacy Policy
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Terms;
