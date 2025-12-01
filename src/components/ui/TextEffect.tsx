import { motion, Variants } from "framer-motion";
import React from "react";

type TextEffectProps = {
    text: string;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
    variants?: Variants;
    perWord?: boolean;
};

export const TextEffect = ({
    text,
    tag: Wrapper = "div",
    className,
    variants,
    perWord = false,
}: TextEffectProps) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const splitText = perWord ? text.split(" ") : text.split("");

    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.03 }}
                aria-hidden
            >
                {splitText.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={variants || item}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                        {perWord && index < splitText.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
