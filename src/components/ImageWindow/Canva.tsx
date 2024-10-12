import  { useContext, useEffect, useRef, useState } from 'react'
import "./image.css"
import { FileContext } from '../Home/Home'

type ImageSize = {
    width: number,
    height: number
}

function Canva() {

    const files = useContext(FileContext) as FileList

    const canvaRef = useRef<HTMLCanvasElement>(null)
    const [scale, setScale] = useState<number>(1.0);
    const [canvasSize, setCanvasSize] = useState<ImageSize>({ width: window.innerWidth, height: window.innerHeight });
    const [currentContext, setContex] = useState<CanvasRenderingContext2D | null>(null);
    const [currentBitMap, setBitmap] = useState<ImageBitmap>()


    const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        var increment: number = 1;
        if (event.deltaY < 0)
            increment = scale - 0.1;
        if (event.deltaY > 0)
            increment = scale + 0.1;
        setScale(increment)
    };

    const handleWindowResize = (_event: UIEvent) => {
        setCanvasSize({ width: window.innerWidth, height: window.innerHeight })
    }

    function resizeImage(imageWidth: number, imageHeight: number, MAXW: number, MAXH: number): [width: number, height: number] {
        if (imageWidth > imageHeight) {
            if (imageWidth > MAXW) {
                imageHeight *= MAXW / imageWidth;
                imageWidth = MAXW;
            }
        } else {
            if (imageHeight > MAXH) {
                imageWidth *= MAXH / imageHeight;
                imageHeight = MAXH;
            }
        }
        return [imageWidth, imageHeight]
    }

    function drawImage(Canvas: HTMLCanvasElement, Context: CanvasRenderingContext2D | null) {
        createImageBitmap(files[0]).then((bitmap: ImageBitmap) => {
            setBitmap(bitmap);
            let [imageWidth, imageHeight] = resizeImage(bitmap.width, bitmap.height, Canvas.width, Canvas.height);
            let xpos = (Canvas.width - (imageWidth * scale)) / 2;
            let ypos = (Canvas.height - (imageHeight * scale)) / 2;
            Context?.drawImage(bitmap, xpos, ypos, imageWidth * scale, imageHeight * scale);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        // -------------- draw image on canva ---------------------
        const Canvas: HTMLCanvasElement = canvaRef?.current as HTMLCanvasElement;
        const Context: CanvasRenderingContext2D = Canvas?.getContext("2d") as CanvasRenderingContext2D;
        Context.imageSmoothingEnabled = false;
        setContex(Context)
        if (files != null)
            drawImage(Canvas, Context);
        // Context?.scale(3, 2)
        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }

    }, []);


    useEffect(() => {
        // -------------- redraw image on wheel event ---------------------
        const Canvas: HTMLCanvasElement = canvaRef?.current as HTMLCanvasElement;
        Canvas.addEventListener("wheel", handleWheel);

        if (currentBitMap !== undefined) {
            currentContext?.clearRect(0, 0, Canvas.width, Canvas.height);

            let [imageWidth, imageHeight] = resizeImage(currentBitMap.width, currentBitMap.height, Canvas.width, Canvas.height);

            let xpos = (Canvas.width - imageWidth * scale) / 2;
            let ypos = (Canvas.height - imageHeight * scale) / 2;

            currentContext?.drawImage(currentBitMap as ImageBitmap, xpos, ypos, imageWidth * scale, imageHeight * scale);
        }


        return () => {
            Canvas.removeEventListener("wheel", handleWheel)
        };

    }, [scale, canvasSize])



    return (

        <div className='imagearea'>
            {/* {

                files!.map((file: File, id: number) => {
                    console.log(id);
                    })
                    } */}
            <canvas className="view-canva" ref={canvaRef} width={canvasSize.width - 300} height={canvasSize.height - 50}></canvas>
        </div>

    )
}

export default Canva
