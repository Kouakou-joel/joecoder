import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { ForgetPasswordContainer } from "@/ul/modules/authentification/forget-password/forget-password.container";




export default function motDePasseOublie() {
  return (
    <>

      <Seo title="mot De Passe Oublie" description="description..." />

      <Layout >
    <ForgetPasswordContainer />
      </Layout>

    </>
  );
}
