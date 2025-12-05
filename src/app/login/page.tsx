import { HeaderIcon } from "@/components/molecules/HeaderIcon";
import { SeactionFormLogin } from "@/components/organisms/SeactionFormLogin";

export default function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-start overflow-y-auto bg-white">
      <HeaderIcon />
      <SeactionFormLogin />
    </main>
  );
}
