import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "EduCert Embed",
    chainId: "galileo-4",
    createdDate: "2025-01-06T12:01:03.296Z",
    modifiedDate: "2025-01-06T12:01:03.296Z",
    id: "educertembed",
    collections: [
        {
            crowdfund: "andr1g4destcaaecxplzg35avcsa4fcujzgduuejmu4df78h5r2f7zhhqeh5484",
            cw721: "andr195rlrw5mh9u7ax54fufvtse4x0gf62dcmv5dhf9qtp72tsdl62ms3lcp40",
            name: "EduCert Embed NFT",
            type: ICollectionType.CROWDFUND,
            id: "educert-embed"
        }
    ],
};

export default CONFIG;