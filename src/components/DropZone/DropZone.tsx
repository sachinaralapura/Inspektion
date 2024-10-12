import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { checkFileType, ErrorMessage } from '../../Utils/files';
import "./../Home/home.css"


type DropZoneProps = {
    setFiles: (value: FileList) => void;
}



function DropZone(props: DropZoneProps) {

    const { setFiles } = props;

    const [t] = useTranslation("global")
    const [error, setError] = useState<ErrorMessage>();


    function handleImageUpload(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList
        }
        var isError: ErrorMessage = checkFileType(target.files)
        if (!isError.error) {
            setFiles(target.files)
        }
        else {
            setError(isError);
        }
    }

    function handleOnDrop(event: React.DragEvent) {
        event.preventDefault();
        const imagefiles: FileList = event.dataTransfer.files;
        var isError: ErrorMessage = checkFileType(imagefiles)
        if (!isError.error) {
            setFiles(imagefiles)
        }
        else {
            setError(isError);
        }
    }


    function handleOnDrapOver(event: React.DragEvent) {
        event.preventDefault();
    }

    return (
        <div className="dragdrop" onDrop={handleOnDrop} draggable={true} onDragOver={handleOnDrapOver}>
            <h1>
                {t("home.dragdrop")}
            </h1>
            <input type="file" name="image" multiple
                accept="image/png , image/jpg , image/jpeg"
                onChange={handleImageUpload}
            />
            <br />
            <br />
            {error?.error && <p className="error">Image File type Expected</p>}
        </div>
    )
}

export default DropZone