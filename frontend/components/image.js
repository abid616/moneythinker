import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
import {buildUrl} from 'cloudinary-build-Url'

const Images = ({ image, style, width, height, className }) => {
    const imageUrl = getStrapiMedia(image);

    return (
        <Image
            src={imageUrl}
            alt={image.alternativeText || image.name}
            width={1080}
            height={810}
            layout="intrinsic"
            objectFit="cover"
            loading="lazy"
            style={style}
            className={className}
        />
    );
};

export default Images;