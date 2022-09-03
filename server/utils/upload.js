import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://user:codeforinterview@ac-jn0w3em-shard-00-00.eleepbm.mongodb.net:27017,ac-jn0w3em-shard-00-01.eleepbm.mongodb.net:27017,ac-jn0w3em-shard-00-02.eleepbm.mongodb.net:27017/?ssl=true&replicaSet=atlas-12f3is-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1)
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage});
