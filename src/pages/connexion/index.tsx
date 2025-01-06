import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { LoginContainer } from "@/ul/modules/authentification/login/login.container";





export default function Connexion() {
  return (
    <>

      <Seo title="connexion" description="description..." />

      <Layout >
      <LoginContainer /> 
      </Layout>

    </>
  );
}
