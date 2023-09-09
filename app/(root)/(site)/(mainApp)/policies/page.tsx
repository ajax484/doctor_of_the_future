import Link from "next/link";
import React from "react";

const Policies = () => {
  return (
    <div className="my-10">
      <h1 className=" capitalize font-semibold text-3xl mb-5">
        Privacy Policy
      </h1>

      {/* updateda on */}
      <div className=" my-2">
        <Link href={`/terms`}>
          <p className=" text-start capitalize  underline text-xs font-semibold hover:text-blue-500 cursor-pointer">
            terms and conditions
          </p>
        </Link>
      </div>
      <p className=" text-sm text-neutral-500">
        Our Privacy Policy was last updated on 05-09-2023
      </p>
      {/* data */}
      <div className=" my-6 flex flex-col gap-y-4">
        <p className=" text-neutral-700 text-sm leading-8 ">
          Doctor of the Future is committed to protecting your privacy. This
          Privacy Policy explains how your information is collected, used, and
          disclosed by Doctor of the Future. This Privacy Policy applies to our
          service, website – doctorofthefuture.com, and its associated
          subdomains.
        </p>

        <p className="  text-neutral-700 text-sm leading-8 ">
          By accessing or using our Service, you signify that you have read,
          understood, and agree to our collection, storage, use, and disclosure
          of your personal information as described in this Privacy Policy and
          our Terms of Service.
        </p>
      </div>
      {/* defination of terms */}
      <main className=" my-5">
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Definitions and key terms
          </h1>
          <p className="  mb-4 text-neutral-600 text-sm">
            For the purposes of this Privacy Policy:
          </p>
          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
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
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">“Cookies:</span> small amount of
              data generated by a website and saved by your web browser. It is
              used to identify your browser, provide analytics, and remember
              information about you such as your language preference or login
              information
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">Device:</span> any internet
              connected device such as a phone, tablet, computer or any other
              device that can be used to visit gidixlogistics.com and use the
              services.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">IP address:</span> Every device
              connected to the Internet is assigned a number known as an
              Internet protocol (IP) address. These numbers are usually assigned
              in geographic blocks. An IP address can often be used to identify
              the location from which a device is connecting to the Internet
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">Personnel:</span> refers to
              individuals who are employed by Gidix Logistics or are under
              contract to perform a service on behalf of one of the parties
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">our Information:</span> also
              “Information” refers to your Personal data & Protected Health
              Information
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              <span className=" font-semibold">Third-party service: </span>{" "}
              refers to advertisers, promotional and marketing partners, and
              others whose products or services we think may interest you.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            What Information Do We Collect?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              We collect information from you when you visit our service,
              register, place an order for our service, subscribe to our
              newsletter, respond to a survey or fill out a form. These
              information may include Personal data & Protected Health
              Information such as:
            </li>
            <ul className=" list-disc capitalize px-4">
              <li className="text-neutral-700 text-sm leading-8">
                Full Names / Usernames
              </li>
              <li className="text-neutral-700 text-sm leading-8">
                date of birth
              </li>
              <li className="text-neutral-700 text-sm leading-8">
                phone number
              </li>
              <li className="text-neutral-700 text-sm leading-8">
                email address
              </li>
              <li className="text-neutral-700 text-sm leading-8">age</li>
              <li className="text-neutral-700 text-sm leading-8">
                medical data{" "}
              </li>
              <li className="text-neutral-700 text-sm leading-8">
                mailing address
              </li>
              <li className="text-neutral-700 text-sm leading-8">
                user country
              </li>
            </ul>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            How Do We Use The Information We Collect?
          </h1>
          <p className="  mb-4 text-neutral-600 text-sm">
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>
          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              To personalize your experience (your information helps us to
              better respond to your individual needs)
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To improve our service (we continually strive to improve our
              service offerings based on the information and feedback we receive
              from you)
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To improve customer service (your information helps us to more
              effectively respond to your customer service requests and support
              needs)
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To process transactions
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To administer a promotion, survey or other site feature
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              to send periodic mail
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="capitalize mb-4 font-semibold">
            When do we use customer information from third parties?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We may receive some information from third parties when you
              contact us. For example, when you submit your email address to us
              to show interest in becoming our customer, we may receive
              information from a third party that provides automated fraud
              detection services to us.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Do we share the information we collect with third parties?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We may share the information that we collect with third parties
              such as advertisers or promotional and marketing partners.We may
              also share it with our current and future affiliated companies and
              business partners, and if we are involved in a merger, asset sale
              or other business reorganization, we may also share or transfer
              your personal and non-personal information to our
              successors-in-interest.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We may engage trusted third party service providers to perform
              functions and provide services to us, such as hosting and
              maintaining our servers and our service, database storage and
              management, email management, storage marketing, credit card
              processing, customer service and fulfilling orders for services
              you may purchase through our service. We will likely share your
              information with these third parties to enable them to perform
              these services for us and for you
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the service in a shared location, and
              type of device used to visit the service. They may aggregate
              information about our advertising and what you see on the service
              and then provide auditing, research and reporting for us and our
              advertisers.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We may also disclose personal and non-personal information about
              you to government or law enforcement officials or private parties
              as we, in our sole discretion, believe necessary or appropriate in
              order to respond to claims & legal process (including subpoenas),
              to protect our rights and interests or those of a third party, the
              safety of the public or any person, to prevent or stop any
              illegal, unethical, or legally actionable activity, or to
              otherwise comply with applicable court orders, laws, rules and
              regulations.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Where and when is information collected from customers and end
            users?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We will collect the information that you submit to us
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We may also receive personal information about you from third
              parties as described above
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            How Do We Use Your Email Address?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              By submitting your email address on our service, you agree to
              receive emails from us
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We only send emails to people who have authorized us to contact
              them, either directly, or through a third party. We do not send
              unsolicited commercial emails, because we hate spam as much as you
              do.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              By submitting your email address, you also agree to allow us to
              use your email address for customer audience targeting on sites
              like Facebook, where we display custom advertising to specific
              people who have opted-in to receive communications from us
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Email addresses submitted only through the order processing page
              will be used for the sole purpose of sending you information and
              updates pertaining to your order. If, however, you have provided
              the same email to us through another method, we may use it for any
              of the purposes stated in this Policy.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You can cancel your participation in any of these email lists at
              any time by clicking on the opt-out link or other unsubscribe
              option that is included in the respective email
            </li>

            <li className="text-neutral-700 text-sm leading-8">
              If at any time you would like to unsubscribe from receiving future
              emails, we include detailed unsubscribe instructions at the bottom
              of each email.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Could my information be transferred to other countries?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We are incorporated in Nigeria. However, To compare data between
              countries and for the purpose of customer service and fulfilling
              orders for services you may purchase through our Site, the
              Information collected via Our Site, through direct interactions
              with you, or from use of our services may be transferred from time
              to time to our offices or personnel located throughout the world.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              This information may be viewed and hosted anywhere in the world,
              including countries that may not have laws of general
              applicability regulating the use and transfer of such data
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To the fullest extent allowed by applicable law, by using any of
              the above, you voluntarily consent to the trans- border transfer
              and hosting of such information
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Is the information collected through our service secure?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We take precautions to protect the security of your information.
              We have physical, electronic, and managerial procedures to help
              safeguard, prevent unauthorized access, maintain data security,
              and correctly use your information. However, neither people nor
              security systems are foolproof, including encryption systems. In
              addition, people can commit intentional crimes, make mistakes or
              fail to follow policies. Therefore, while we use reasonable
              efforts to protect your personal information, we cannot guarantee
              its absolute security. If applicable law imposes any
              non-disclaimable duty to protect your personal information, you
              agree that intentional misconduct will be the standards used to
              measure our compliance with that duty.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Can I update or correct my information?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              The rights you have to request updates or corrections to the
              information we collect depend on your relationship with us.
              <ul className=" px-4 list-disc">
                <li>
                  Personnel may update or correct their information as detailed
                  in our internal company employment policies
                </li>
                <li>
                  Customers have the right to request the restriction of certain
                  uses and disclosures of personally identifiable
                  information.You can contact us in order to:
                  <ul className=" px-4 list-decimal">
                    <li>
                      Update or correct your personally identifiable information
                    </li>
                    <li>
                      Change your preferences with respect to communications and
                      other information you receive from us, or
                    </li>
                    <li>
                      Delete the personally identifiable information maintained
                      about you on our systems by canceling your account.
                      Provided that, such updates, corrections, changes and
                      deletions will have no effect on other information that we
                      have provided to third parties in accordance with this
                      Privacy Policy prior to such update, correction, change or
                      deletion.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              To protect your privacy and security, we may take reasonable steps
              (such as requesting a unique password) to verify your identity
              before granting you profile access or making corrections.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You are responsible for maintaining the secrecy of your unique
              password and account information at all times.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You should be aware that it is not technologically possible to
              remove each and every record of the information you have provided
              to us from our system. The need to back up our systems to protect
              information from inadvertent loss means that a copy of your
              information may exist in a non-erasable form that will be
              difficult or impossible for us to locate
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Promptly after receiving your request, all personal information
              stored in the databases we actively use, and other readily
              searchable media will be updated, corrected, changed or deleted,
              as appropriate, as soon as and to the extent reasonably and
              technically practicable.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">personnel</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-decimal">
            <li className="text-neutral-700 text-sm leading-8">
              <ul className=" px-4 list-disc">
                <li> Update or correct your information</li>
                <li>
                  Change your preferences with respect to communications and
                  other information you receive from us, or
                </li>
                <li>
                  Receive a record of the information we have relating to you.
                </li>
              </ul>
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Such updates, corrections, changes and deletions will have no
              effect on other information that we maintain, or information that
              we have provided to third parties in accordance with this Privacy
              Policy prior to such update, correction, change or deletion.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            How Long Do We Keep Your Information?
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We keep your information only so long as we need it to provide
              service to you and fulfill the purposes described in this policy.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              This is also the case for anyone that we share your information
              with and who carries out services on our behalf.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              When we no longer need to use your information and there is no
              need for us to keep it to comply with our legal or regulatory
              obligations, we'll either remove it from our systems or
              depersonalize it so that we cannot identify you.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">Affiliates</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We may disclose information (including personal information) about
              you to our Corporate Affiliates. For purposes of this Privacy
              Policy, "Corporate Affiliate" means any person or entity which
              directly or indirectly controls, is controlled by or is under
              common control with us, whether by ownership or otherwise. Any
              information relating to you that we provide to our Corporate
              Affiliates will be treated by those Corporate Affiliates in
              accordance with the terms of this Privacy Policy.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">sale of business</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We reserve the right to transfer information to a third party in
              the event of a sale, merger or other transfer of all or
              substantially all of our assets or any of its Corporate Affiliates
              (see also sub-clause 1–Do We Share The Information We Collect With
              Third Parties?), or that portion of us or any of its Corporate
              Affiliates to which the Service relates, or in the event that we
              discontinue our business or file a petition or have filed against
              us a petition in bankruptcy, reorganization or similar proceeding,
              provided that the third party agrees to adhere to the terms of
              this Privacy Policy.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            how we protect your information
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              We offer the use of a secure server. All supplied sensitive/credit
              information is transmitted via Secure Socket Layer (SSL)
              technology and then encrypted into our Payment gateway providers
              database only to be accessible by those authorized with special
              access rights to such systems, and are required to keep the
              information confidential. After a transaction, your private
              information (credit cards, social security numbers, financials,
              etc.) is never kept on file. We cannot, however, ensure or warrant
              the absolute security of any information you transmit to us or
              guarantee that your information on the Service may not be
              accessed, disclosed, altered, or destroyed by a breach of any of
              our physical, technical, or managerial safeguards.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">governing law</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              The laws of Nigeria, excluding its conflicts of law rules, shall
              govern this Agreement and your use of our service.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Your use of our service may also be subject to other local, state,
              national, or international laws.
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">your consent</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              By using our service, registering an account, or making a
              purchase, you consent to this Privacy Policy.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            Links to Other Websites
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              This applies solely to businesses
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              The Services may contain links to other websites that are not
              operated or controlled by us. We are not responsible for the
              content, accuracy or opinions expressed on such websites, and such
              websites are not investigated, monitored or checked for accuracy
              or completeness by us.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Please note that when you use a link to go from the Services to
              another website, our Privacy Policy is no longer in effect. Your
              browsing and interaction on any other website, including those
              that have a link on our platform, is subject to that website’s own
              rules and policies. Such third parties may use their own cookies
              or other methods to collect information about you.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">cookies</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We use "Cookies" to identify the areas of our website that you
              have visited. A Cookie is a small piece of data stored on your
              computer or mobile device by your web browser. We use Cookies to
              personalize the Content that you see on our website. Most web
              browsers can be set to disable the use of Cookies.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              If you choose to disable Cookies, you may not be able to access
              functionality on our website correctly or at all. We never place
              Personally Identifiable Information in Cookies
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            remarketing services
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              Our company employs remarketing services. Remarketing is a digital
              marketing technique that shows ads to people who have previously
              browsed our website.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">Payement details</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We do not store or handle any of your payment information. All
              transactions are processed securely by a trusted third-party
              payment gateway.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">kids privacy</h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We do not address anyone under the age of 18. We do not knowingly
              collect personally identifiable information from anyone under the
              age of 18.
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              If You are a parent or guardian and You are aware that Your child
              has provided Us with Personal Data, please contact Us
            </li>

            <li className="text-neutral-700 text-sm leading-8">
              If We become aware that We have collected Personal Data from
              anyone under the age of 18 without verification of parental
              consent, We take steps to remove that information from our
              servers.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            changes to our privacy policy
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              If we decide to change our privacy policy, we will post those
              changes on this page, and/or update the Privacy Policy
              modification date.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className=" capitalize mb-4 font-semibold">
            third party services
          </h1>

          <ul className="my-4 flex px-5 flex-col gap-y-4 text-sm list-disc">
            <li className="text-neutral-700 text-sm leading-8">
              We may display, include or make available third-party content
              (including data, information, applications and other products
              services) or provide links to third-party websites or services
              ("Third- Party Services").
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              You acknowledge and agree that we shall not be responsible for any
              Third-Party Services, including their accuracy, completeness,
              timeliness, validity, copyright compliance, legality, decency,
              quality or any other aspect thereof. We do not assume and shall
              not have any liability or responsibility to you or any other
              person or entity for any Third-Party Services
            </li>
            <li className="text-neutral-700 text-sm leading-8">
              Third-Party Services and links thereto are provided solely as a
              convenience to you and you access and use them entirely at your
              own risk and subject to such third parties' terms and conditions.
            </li>
          </ul>
        </div>
      </main>

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
        <Link href={`/terms`}>
          <p className=" font-semibold underline ubder hover:text-blue-500 cursor-pointer">
            Terms and Conditions
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Policies;
