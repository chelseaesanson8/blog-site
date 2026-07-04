import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <div>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                            className="not-prose w-full h-auto"
                            src={urlFor(props.value)
                                .width(1200)
                                .quality(100)
                                .auto("format")
                                .url()}
                            alt={props?.value?.alt || ""}
                            width={props.value.asset.metadata.dimensions.width}
                            height={props.value.asset.metadata.dimensions.height}
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                    <p className="mt-2 not-prose font-sans dark:text-white/40 text-stone-500">({props?.value?.alt})</p>
                </div>
            ) : null,

    },
};