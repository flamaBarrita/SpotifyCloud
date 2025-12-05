"use client";

import { useRouter } from "next/navigation";

import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { ButtonSign } from "@/components/atoms/ButtonSign";
import { FormLogin } from "@/components/templates/FormLogin";

import { CustomIcon } from "@/components/atoms/CustomsIcon";

export function SeactionFormLogin() {
  const navigation = useRouter();

  function handleNavigateSignUp() {
    navigation.push("/signup");
  }

  return (
    <section className="flex flex-col items-center justify-center gap-8 pb-2 pt-4 md:py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <ButtonIcon
          icon={CustomIcon.FacebookIcon}
          text="CONTINUE WITH FACEBOOK"
          variant="facebook"
        />
        <ButtonIcon
          icon={CustomIcon.AppleIcon}
          text="CONTINUE WITH APPLE"
          variant="primary"
        />
        <ButtonIcon
          icon={CustomIcon.GoogleIcon}
          text="CONTINUE WITH GOOGLE"
          variant="white"
        />
      </div>

      <div className="flex w-full items-center justify-center gap-4">
        <div className="h-[2px] w-full bg-zinc-300" />
        <strong className="text-sm text-black">OR</strong>
        <div className="h-[2px] w-full bg-zinc-300" />
      </div>

      <FormLogin />
      <div className="flex flex-col items-center justify-center gap-5">
        <strong className="text-base text-black">
          {`Don't have an account?`}
        </strong>
        <ButtonSign
          text="Sign up for Spotify"
          variant="secundaryRounded"
          onClick={handleNavigateSignUp}
        />
      </div>
    </section>
  );
}
