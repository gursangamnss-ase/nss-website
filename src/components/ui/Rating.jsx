import Image from "next/image";
import RatingStars from "./RatingStars";

export default function Rating({
    image,
    imageAlt,
    rating,
    stars = rating,
    reviews,
    sizes = "60px",
    boxSize = "h-15 w-15",
    className = "",
}) {
    return (
        <div className={`flex items-center gap-5 ${className}`}>
            <div className={`relative flex ${boxSize} items-center justify-center rounded-2xl bg-white shadow-sm`}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes={sizes}
                    className="object-contain p-3"
                />
            </div>

            <div className="space-y-2">
                <RatingStars rating={stars} />

                <p className="text-sm w-full">
                    <span className="font-semibold text-primary">
                        {rating.toFixed(1)}/5
                    </span>

                    <span className="text-textSecondary text-10">
                        {" "}
                        Based on {reviews} reviews
                    </span>
                </p>
            </div>
        </div>
    );
}
