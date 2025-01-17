import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { LandingPageViews } from "@/ul/modules/landing-page/landing-page.views";




export default function Home() {
  return (
    <>

      <Seo  title="Devs-studios" description="Site d appentissage des developpeurs..." />

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageViews />
      </Layout>

    </>
  );
}
