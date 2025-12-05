import Link from "next/link";

import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { CustomIcon } from "@/components/atoms/CustomsIcon";
import { FormSignUpStepOne } from "@/components/organisms/FormSignUpStepOne";

export function SignUpStepOne() {
  return (
    <section className="flex items-center justify-center py-5">
      <div className="flex w-80 flex-col items-center justify-between gap-6">
        <h1 className="text-4xl font-bold text-white">
          Sign up to start listening
        </h1>
        <FormSignUpStepOne />
        <div className="flex w-full flex-col items-center justify-center gap-3 border-b border-zinc-700 pb-8">
          <ButtonIcon
            icon={CustomIcon.FacebookIcon}
            text="CONTINUE WITH FACEBOOK"
            variant="outline"
          />
          <ButtonIcon
            icon={CustomIcon.AppleIcon}
            text="CONTINUE WITH APPLE"
            variant="outline"
          />
          <ButtonIcon
            icon={CustomIcon.GoogleIcon}
            text="CONTINUE WITH GOOGLE"
            variant="outline"
          />
        </div>
        <div className=" flex w-full flex-col items-center justify-center gap-8">
          <span className="text-base text-zinc-400">
            Already have an account?{" "}
            <Link href="/login" className="text-white underline">
              Log in here.
            </Link>
          </span>
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
