import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { RegisterContainer } from "@/ul/modules/authentification/register/register.container";
import { GUEST } from "@/ul/session-status";




export default function Inscription() {
  return (
    <>

      <Seo title="inscription" description="description..." />

      <Layout sessionStatus={GUEST}>
    <RegisterContainer />
      </Layout>

    </>
  );
}
