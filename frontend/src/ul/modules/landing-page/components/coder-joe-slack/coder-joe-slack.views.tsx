import { Container } from "@/ul/components/container/container"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
import { Button } from "@/ul/disign-system/button/button"
import { LinkTypes } from "@/lib/link-types"
import { Logo } from "@/ul/disign-system/logo/logo"

export const CoderJoeSlackViews = () => {

    return (
        <Container className="flex justify-between max-sm:px-40 max-lg:px-44 max-xl:px-52 py-4 max-sm:w-max max-lg:w-max max-xl:w-max">

            <div className="flex flex-col max-sm:flex-1 justify-center space-y-5 py-2 max-w-2xl">
                <div className="flex items-center gap-2">
                    <Logo size="very-small"
                    />
                    <Typography variant="caption2" component="p" className="max-w-lg">
                        Créé par Joe Coder
                    </Typography>


                </div>

                <Typography variant="h2" component="h2" >
                    Rejoins nous sur le slack des singes coders
                </Typography>
                <Typography
                    variant="body-lg"
                    component="p"
                    theme="gray"
                    className="max-w-lg"
                >
                    Rejoins-nous et obtiens de l aide, des conseil et pourquoi
                    de nouvelle potes | {""}
                </Typography>
                <Button baseUrl="/#"
                    linkType={LinkTypes.EXTERNAL}
                >
                    Rejoins le groupe d aide
                </Button>
            </div>
            <div className="relative max-sm:justify-end w-[300px] h-300px]">
                <Image fill
                    src="/assets/images/slack.avif"
                    alt="description slack"
                    className="rounded"/>
            </div>
        </Container >
    )
}