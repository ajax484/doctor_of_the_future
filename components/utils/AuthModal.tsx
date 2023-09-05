"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

// supabase
// supbase
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// router
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session?.user.id) {
      router.refresh();
      setIsOpen(false);
    }
  }, [session, router]);



  return (
    <Dialog
     
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-7">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto p-4  w-[500px] rounded bg-white">
          <Dialog.Title className="text-black text-center font-semibold capitalize">
            <div>
              <h1 className="mb-3">Hey There, Welcome</h1>
              <p className=" text-xs font-light text-neutral-400">
                sign into your account to access all contents
              </p>
            </div>
          </Dialog.Title>

          <Dialog.Description>
            <div className="h-[430px] container">
              <Auth
                supabaseClient={supabase}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: "Your email address",
                      password_label: "Your strong password",
                    },
                  },
                }}
                view={"sign_in"}
                providers={["google"]}
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AuthModal;
