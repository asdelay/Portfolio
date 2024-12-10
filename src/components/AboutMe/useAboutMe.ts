import { useState, useEffect } from "react";

const useAboutMe = (text: string, typingSpeed: number) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length-1) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            }
            return;
    
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [text, typingSpeed]);

    return displayedText;
};

export default useAboutMe;
