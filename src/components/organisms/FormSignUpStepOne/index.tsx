import { ButtonSign } from "@/components/atoms/ButtonSign";
import { InputNormal } from "@/components/atoms/InputNormal";
import Link from "next/link";

export function FormSignUpStepOne() {
  return (
    <form className="flex w-full flex-col items-start justify-center gap-3">
      <InputNormal.ContainerLabelInput
        label="Email address"
        variant="secundary"
      >
        <InputNormal.Input
          type="text"
          placeholder="email@domain.com"
          variant="secundary"
        />
      </InputNormal.ContainerLabelInput>
      <Link href="#" className="text-sm text-green-500 underline">
        Use phone number instead.
      </Link>
      <ButtonSign text="Next" variant="green" />
      <div className="flex w-full items-center justify-center gap-4">
        <div className="h-[1px] w-full bg-zinc-300" />
        <strong className="text-sm text-white">OR</strong>
        <div className="h-[1px] w-full bg-zinc-300" />
      </div>
    </form>
  );
}
