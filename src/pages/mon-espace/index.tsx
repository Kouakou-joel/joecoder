import { Seo } from "@/ul/components/seo/seo";
import { Layout } from "@/ul/components/layout/layout";
import { UserAccountContainer } from "@/ul/modules/user-profils/user-acount/user-acount.container";




export default function MonCompte() {
  return (
    <>

      <Seo title="Mon espace" description="description..." />

      <Layout WithSidebar>
    
        <UserAccountContainer />
      </Layout>

    </>
  );
}
