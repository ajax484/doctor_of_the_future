"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// supbase
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import Modal from "@/components/utils/Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthClient = () => {
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account to access all the features"
      isOpen={isOpen}
      onChange={onChange}
    >
      <div className=" h-[400px]">
        <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
        />
      </div>
    </Modal>
  );
};

export default AuthClient;
