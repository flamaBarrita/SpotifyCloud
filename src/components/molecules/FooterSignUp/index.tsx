import { ButtonSign } from "@/components/atoms/ButtonSign";

export function FooterSignUp() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-2 bg-gradient-to-r from-Fuchsia-850  to-Cyan-550 p-2 sm:flex-row sm:p-6">
      <div className="flex w-full flex-col items-start justify-center">
        <h1 className="text-white">Preview of Spotify</h1>
        <h2 className="text-white">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </h2>
      </div>
      <div className="w-44 sm:w-40">
        <ButtonSign text="Sign up free" variant="primary" />
      </div>
    </footer>
  );
}
