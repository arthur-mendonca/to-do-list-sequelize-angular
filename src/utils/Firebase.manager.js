const { v4: uuidv4 } = require("uuid");
const AppError = require("../app/errors/AppError");
const firebase = require("firebase/compat/app");
require("firebase/compat/storage");

class FirebaseManager {
    constructor() {
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
        };

        this.app = firebase.initializeApp(firebaseConfig);
    }

    async sendFileToFirebase(url, fileString, fileType) {
        try {
            const buffer = Buffer.from(fileString, "base64");
            const blob = new Blob([buffer], { type: fileType });

            const fileId = uuidv4();

            const fileUrl = await this.app
                .storage()
                .ref(`${url}/${fileId}`)
                .put(blob)
                .then(() =>
                    this.app.storage().ref(`${url}/${fileId}`).getDownloadURL()
                )
                .then((downloadUrl) => downloadUrl)
                .catch((error) => {
                    throw new AppError(error.statusCode, error.message);
                });

            return fileUrl;
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }

    async deleteFileFromFirebase(fileUrl) {
        try {
            const storage = this.app.storage();
            const fileRef = storage.refFromURL(fileUrl);

            await fileRef.delete().catch((error) => {
                throw new AppError(error.statusCode, error.message);
            });

            return { message: "Foto deletada com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }
}

module.exports = new FirebaseManager();
