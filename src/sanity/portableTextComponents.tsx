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
                            className="object-cover not-prose"
                            src={urlFor(props.value)
                                .width(500)
                                .height(500)
                                .quality(100)
                                .auto("format")
                                .url()}
                            alt={props?.value?.alt || ""}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                    <p className="mt-2 not-prose font-sans dark:text-stone-400 text-stone-500">({props?.value?.alt})</p>
                </div>
            ) : null,

    },
};