import AuthForm from "@/components/ui/authCard";

export default function login() {
  return (
    <div className="px-4 md:px-8 lg:px-16 space-y-4 pt-6">
      <h1 className="text-2xl font-black text-center">Sign In/Up</h1>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}