import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
import {buildUrl} from 'cloudinary-build-Url'

const Images = ({ image, style, width, height }) => {
    const imageUrl = getStrapiMedia(image);
    return (
        <Image
            src={imageUrl}
            alt={image.alternativeText || image.name}
            width={400}
            height={500}
            layout="intrinsic"
            loading="lazy"
            style={style}
        />
    );
};

export default Images;