import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { LandingPageViews } from "@/ul/modules/landing-page/landing-page.views";




export default function Home() {
  return (
    <>

      <Seo title="joecoder" description="description..." />

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageViews />
      </Layout>

    </>
  );
}
