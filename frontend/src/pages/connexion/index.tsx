import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { LoginContainer } from "@/ul/modules/authentification/login/login.container";
import { GUEST } from "@/ul/session-status";

export default function Connexion() {
  return (
    <>

      <Seo title="connexion" description="description..." />

      <Layout sessionStatus={GUEST}>
      <LoginContainer /> 
      </Layout>

    </>
  );
}
