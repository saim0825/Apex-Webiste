import { SignUp } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return <AuthLayout mode="sign-up"><SignUp routing="path" path="/sign-up" forceRedirectUrl="/admin" appearance={{ variables: { colorBackground: "#ffffff", colorForeground: "#123767", colorMutedForeground: "#7181a5", colorInput: "#ffffff", colorInputForeground: "#123767", colorPrimary: "#f15b2a", colorDanger: "#c2410c" }, elements: { card: "border border-white/70 shadow-2xl", headerTitle: "text-[#123767]", headerSubtitle: "text-[#7181a5]", formFieldLabel: "text-[#123767]", formFieldInput: "border-[#d5ddea] bg-white text-[#123767]", formButtonPrimary: "bg-[#f15b2a] hover:bg-[#d94d21] text-white", footerActionText: "text-[#7181a5]", footerActionLink: "text-[#f15b2a]" } }} /></AuthLayout>;
}
