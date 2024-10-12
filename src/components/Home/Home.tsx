import { useTranslation } from "react-i18next"
import React, { Context, useState } from "react";
import DropZone from "../DropZone/DropZone";
import Toolbar from "../ImageWindow/Toolbar";
import SideBar from "../ImageWindow/SideBar";
import Canva from "../ImageWindow/Canva";

import "../ImageWindow/image.css"
import "./home.css"

type FileContextProviderProps = {
    value: FileList,
    children: React.ReactNode
}

export const FileContext: Context<FileList | null> = React.createContext<FileList | null>(null)
const FileContextProvider = ({ value, children }: FileContextProviderProps) => {
    return <FileContext.Provider value={value}>{children}</FileContext.Provider>
}


function Home() {
    const [t] = useTranslation("global")

    const [files, setFiles] = useState<FileList | null>(null);

    return (
        <section>
            <div className="heading">
                <h1>
                    {t("home.heading")}
                </h1>
            </div>
            <div className="description">
                <p>
                    {t("home.description")}
                </p>
            </div>

            <DropZone setFiles={setFiles} />

            {files &&
                <div className="imagewindow" >

                    <FileContextProvider value={files as FileList}>
                        <Toolbar></Toolbar>
                        <SideBar></SideBar>
                        <Canva></Canva>
                    </FileContextProvider>

                </div>
            }
        </section>
    )
}

export default Home