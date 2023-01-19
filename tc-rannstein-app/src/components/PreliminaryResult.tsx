import React, {useEffect, useState} from "react";
import i18n from "../i18n/i18n";


function PreliminaryResult(props: any) {

    const [paragraphs, setParagraphs] = useState([""]);
    useEffect( () => {
        const steps = props.steps;
        let paragraphs: string[] = [];
        let p: string = "";
        for(let i in steps) {
            let choice = steps[i].value;
            if(typeof choice !== "undefined" && typeof steps[i].metadata !== "undefined") {
                p = steps[i].metadata.paragraphs[choice];
                if(typeof p !== "undefined") {
                    paragraphs.push(p);
                }
            }
        }
        paragraphs = paragraphs.flat(1);
        setParagraphs(paragraphs);
    }, []);

        return(
        <div>
            <div>
            {paragraphs.map((number, index) => {
                return <div key={index}>§{i18n.t(`paragraphs.${number}.title`)}</div>
            })}
            </div>
        </div>
    );
}

export default PreliminaryResult;