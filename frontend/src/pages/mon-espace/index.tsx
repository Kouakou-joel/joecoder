import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { UserAccountContainer } from "@/ul/modules/user-profils/user-acount/user-acount.container";
import { REGISTERED } from "@/ul/session-status";




export default function MonCompte() {
  return (
    <>

      <Seo title="Mon espace" description="Page de l utilisateur auth..." />

      <Layout WithSidebar sessionStatus={REGISTERED}>
    
        <UserAccountContainer  />
      </Layout>

    </>
  );
}
