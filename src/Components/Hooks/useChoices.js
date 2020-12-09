import { useState } from 'react';

export const useChoices = () => {

    const [choice, setChoice] = useState();

    const checkChoice = e => {
        setChoice(e.target.value);
    };

    return {choice, checkChoice};
};