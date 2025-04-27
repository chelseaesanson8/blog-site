import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <div>
                    <Image
                        className="rounded-lg not-prose w-auto h-auto"
                        src={urlFor(props.value)
                            .width(500)
                            .height(500)
                            .quality(100)
                            .auto("format")
                            .url()}
                        alt={props?.value?.alt || ""}
                        width="400"
                        height="200"
                    />
                    <p className="font-sans dark:text-stone-400 text-stone-500">({props?.value?.alt})</p>
                </div>
            ) : null,

    },
};