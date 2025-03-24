import { useExtend } from "@pixi/react";
import { Container } from "pixi.js";
import { useEffect, useRef, useState, type FC } from "react";

interface TextBoxProps {
    text: string;
}

const TextBox: FC<TextBoxProps> = ({ text }) => {
    useExtend({ Container, Text });
    const currentTextProp = useRef(text);
    const [currentDisplayedText, setCurrentDisplayedText] = useState("");

    useEffect(() => {
        if (currentTextProp.current !== text) {
            currentTextProp.current = text;
        }
    }, [text]);

    return (
        <pixiContainer>
            <pixiText text={currentDisplayedText}></pixiText>
        </pixiContainer>
    );
};

export default TextBox;
