import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, NewsContainer } from "../../style/news";


const messages = [
    "Usa categoria para una mejor navegacion",
    "Recuerda que puedes crear una lista",
    "Disfruta de tu estancia",
];

export default function News() {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setShow(false)
        }, 3000);

        const intervalid = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);

            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 3000);

        }, 4000);

        return () => {
            clearInterval(intervalid);
        }

    }, [])

    return (
        <NewsContainer ref = {containerRef} >
            <Slide
                container={containerRef.current}
                direction={show ? "left" : "right"}
                in={show}
                timeout = {{
                    enter: 500,
                    exit: 300,
                }}
            >
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </NewsContainer>
    );
}