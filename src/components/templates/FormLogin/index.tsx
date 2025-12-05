import { ButtonSign } from "@/components/atoms/ButtonSign";
import { InputNormal } from "@/components/atoms/InputNormal";
import { InputPassword } from "@/components/atoms/InputPassword";

export function FormLogin() {
  return (
    <form className="flex flex-col items-start justify-center gap-4 border-b border-b-zinc-300 pb-5">
      <InputNormal.ContainerLabelInput
        label="Email address or username"
        variant="primary"
      >
        <InputNormal.Input
          type="text"
          placeholder="Email address or username"
          variant="primary"
        />
      </InputNormal.ContainerLabelInput>

      <InputPassword.Container label="Password" variant="primary">
        <InputPassword.Input placeholder="Password" variant="primary" />
      </InputPassword.Container>
      <a href="#" className="text-base text-black underline">
        Forgot your password?
      </a>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-sm border-2 border-green-500 accent-green-500"
          />
          <span className="text-sm text-black">Remember me</span>
        </div>
        <div>
          <ButtonSign text="Log In" variant="green" />
        </div>
      </div>
    </form>
  );
}
