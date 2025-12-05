"use client";

import { ButtonSign } from "@/components/atoms/ButtonSign";
import { InputPassword } from "@/components/atoms/InputPassword";

export function FormSignUpStepTwo() {
  return (
    <form className="flex w-full flex-col items-start justify-center gap-3">
      <InputPassword.Container label="Password" variant="secundary">
        <InputPassword.Input placeholder="Your password" variant="secundary" />
      </InputPassword.Container>
      <InputPassword.Container
        label="Confirm your password"
        variant="secundary"
      >
        <InputPassword.Input placeholder="Your password" variant="secundary" />
      </InputPassword.Container>
      <ButtonSign text="Create account" variant="green" />
    </form>
  );
}
