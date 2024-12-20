import { Container } from "@/ul/components/container/container"
import { Navigation } from "@/ul/components/navigation/navigation"
import { Seo } from "@/ul/components/seo/seo"
import { Avatar } from "@/ul/disign-system/avatar/avatar"
import { Button } from "@/ul/disign-system/button/button"
import { Logo } from "@/ul/disign-system/logo/logo"
import { Spinner } from "@/ul/disign-system/spinner/spinner"
import { RiUser6Fill } from "react-icons/ri"
import { RiShieldUserLine } from "react-icons/ri"
import { RiUser6Line } from "react-icons/ri"
import { Typography } from "@/ul/disign-system/typography/typography"

export default function DisignSystem() {
    return (
      <>
 
      <Seo title="joecoder" description="description..." />
   <Navigation />
      <Container className="space-x-5 py-10">
      <Typography theme="primary" variant="display" component="div" >
        Joe coder
      </Typography>
      <Typography theme="secondary" variant="body-lg" component="h1" >
        Joe coder
      </Typography>
      <Typography theme="gray" variant="lead" component="div" >
        Joe coder
      </Typography>
      <Typography variant="body-sm" component="div" >
        Joe coder
      </Typography>

      <Typography variant="caption3" component="div" >
        Joe coder
      </Typography>
      <Typography variant="caption4" component="div" >
        Joe coder
      </Typography>
      </Container>
      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />

      </div>
      <div className="flex gap-2">
        <Avatar src="/assets/images/avatar-svgrepo-com (1).svg" alt="" size="small" />
        <Avatar src="/assets/images/avatar-svgrepo-com (1).svg" alt="" />
        <Avatar src="/assets/images/avatar-svgrepo-com (1).svg" alt="" size="large" />
      </div>
      <div className="flex spae-y-2">
        <Logo size="very-small" />
        <Logo size="small" />
        <Logo />
        <Logo size="large" />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small" variant="accent" disabled icon={{ icon: RiUser6Fill }} iconPosition="left">Accent</Button>
        <Button isLoading size="small" variant="secondary" icon={{ icon: RiUser6Fill }}>secondary</Button>
        <Button isLoading size="small" variant="outline">outline</Button>
        <Button isLoading size="small" variant="disabled">disabled</Button>
        <Button isLoading size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="medium" variant="accent">Accent</Button>
        <Button size="medium" variant="secondary">secondary</Button>
        <Button size="medium" variant="outline">outline</Button>
        <Button size="medium" variant="disabled">disabled</Button>
        <Button size="medium" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large" variant="accent">Accent</Button>
        <Button size="large" variant="secondary">secondary</Button>
        <Button size="large" variant="outline">outline</Button>
        <Button size="large" variant="disabled">disabled</Button>
        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} iconTheme="secondary" />
        <Button size="large" variant="ico" icon={{ icon: RiShieldUserLine }} iconTheme="gray" />
        <Button size="large" variant="ico" icon={{ icon: RiUser6Line }} />
      </div>

    </>       
    );
}