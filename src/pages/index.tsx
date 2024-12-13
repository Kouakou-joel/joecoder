import Image from "next/image";
import { Seo } from "@/ul/components/seo";
import { Typography } from "@/ul/disign-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="joecoder" description="description..." />
     <Typography variant="h1" component="h1" >
     Joe coder
     </Typography>
    </>
  );
}
