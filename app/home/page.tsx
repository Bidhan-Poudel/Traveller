import {
  DestinationsCard,
  EmailBanner,
  FormTabs,
  HeroImageBackground,
  ImageActionBanner,
  Recommendation,
  Stories,
} from "./components";

export default function Home() {
  return (
    <>
      <HeroImageBackground />
      <FormTabs />
      <ImageActionBanner />
      <DestinationsCard />
      <Recommendation />
      <Stories />
      <EmailBanner />
    </>
  );
}
