import Image from "next/image";
import { colors, typography } from "../styles";


export default function FeatureCard({
    title,
    description,
    image,
    imageAlt,
    imageHeight=122,
    imageWeight=100,
    badge,
    className = "",
}) {
    return (
        <article
            className={`rounded-4xl border p-5 bg-white ${className}`}
            style={{
                borderColor: colors.border.light,
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between flex-col">
                {badge}
                <h3
                    className={`${typography.text.h3} ${typography.fontWeight.semibold} mt-2`}
                    style={{ color: colors.text.primary }}
                >
                    {title}
                </h3>
            </div>

            {/* Image */}

            <div className="my-12 flex justify-center">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={imageWeight}
                    height={imageHeight}
                    className="object-contain"
                />
            </div>

            {/* Description */}

            <p
                className={typography.text.body}
                style={{
                    color: colors.text.secondary,
                }}
            >
                {description}
            </p>
        </article>
    );
}