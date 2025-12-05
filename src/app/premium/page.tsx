import { BannerPremium } from "@/components/organisms/BannerPremium";
import { BenefitsPremium } from "@/components/organisms/BenefitsPremium";
import { HeaderAd } from "@/components/organisms/HeaderAd";
import { benefitsPremium } from "@/database/benefitPremium";
import { InfoPlans } from "@/components/organisms/InfoPlans";
import { FooterMain } from "@/components/organisms/FooterMain";

export default function Premium() {
  return (
    <main className="flex h-screen flex-col overflow-y-auto">
      <HeaderAd variant="primary" />
      <BannerPremium />
      <BenefitsPremium data={benefitsPremium} />
      <InfoPlans />
      <FooterMain />
    </main>
  );
}
