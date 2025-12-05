import Link from "next/link";

import { FormSignUpStepTwo } from "@/components/organisms/FormSignUpStepTwo";

export function SignUpStepTwo() {
  return (
    <section className="flex items-center justify-center py-5">
      <div className="flex w-80 flex-col items-center justify-between gap-6">
        <h1 className="text-4xl font-bold text-white">
          Sign up to start listening
        </h1>
        <FormSignUpStepTwo />
        <div className=" flex w-full flex-col items-center justify-center gap-8">
          <p className="text-start text-sm">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
