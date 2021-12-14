import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
import {buildUrl} from 'cloudinary-build-Url'

const Images = ({ image, style, width, height, className }) => {
    const imageUrl = getStrapiMedia(image);

    return (
        <Image
            src={imageUrl}
            alt={image.alternativeText || image.name}
            width={width}
            height={height}
            layout="intrinsic"
            loading="lazy"
            style={style}
            className={className}
        />
    );
};

export default Images;