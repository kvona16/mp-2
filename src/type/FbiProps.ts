export type FbiImageProps = {
    large: string;
    thumb: string;
    original: string;
    caption: string;
};

export type FbiProps = {
    uid: string;
    title: string;
    sex: string;
    description: string;
    warning_message: string;
    images: FbiImageProps[];
};