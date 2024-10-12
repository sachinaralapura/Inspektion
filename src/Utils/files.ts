export type ErrorMessage = {
    error: boolean;
    errorMessage?: string;
}

export function checkFileType(files: FileList): ErrorMessage {
    const imageMimeType: RegExp = /image\/(png|jpg|jpeg)/i;
    for (var i = 0; i < files.length; i++) {
        if (!files[i]?.type?.match(imageMimeType)) {
            var errorMsg: ErrorMessage = { error: true, errorMessage: `${files[i].name} is not image type` };
            return errorMsg;
        }
    }
    return { error: false };
}
