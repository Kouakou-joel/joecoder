import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { RegisterContainer } from "@/ul/modules/authentification/register/register.container";




export default function Inscription() {
  return (
    <>

      <Seo title="inscription" description="description..." />

      <Layout >
    <RegisterContainer />
      </Layout>

    </>
  );
}
