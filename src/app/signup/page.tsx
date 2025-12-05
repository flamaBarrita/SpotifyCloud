import { HeaderAd } from "@/components/organisms/HeaderAd";
import { SignUpStepOne } from "@/components/templates/SignUpStepOne";
// import { SignUpStepTwo } from '@/components/templates/SignUpStepTwo'

export default function SignUp() {
  return (
    <main className="flex h-screen flex-col items-center overflow-y-auto bg-zinc-950">
      <HeaderAd variant="secundary" />
      <SignUpStepOne />
    </main>
  );
}
