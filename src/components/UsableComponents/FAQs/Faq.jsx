import React, {useContext, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.scss";
import {LanguageContext} from "../../../context/langContext";

const Faq = ({data}) => {

    const lang = useContext(LanguageContext);
    const [expanded, setExpanded] = useState(`panel${data[1].faq_id}`);
    const [expanded2, setExpanded2] = useState(`panel${data[8].faq_id}`);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : `panel${data[0].faq_id}`);
    };
    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(isExpanded ? panel : `panel${data[5].faq_id}`);
    };

    return (
        <div className="faq">
            <h1 className="title">FAQs</h1>
            <div className="accordeons">
                <div className="firstacc">
                    {data.slice(0, 5).map((acc) => (
                        <Accordion
                            sx={{width: "100%", boxShadow: "none"}}
                            key={acc.faq_id}
                            expanded={expanded === `panel${acc.faq_id}`}
                            onChange={handleChange(`panel${acc.faq_id}`)}
                        >
                            <AccordionSummary
                                style={{color: expanded !== `panel${acc.faq_id}` ? 'black' : '#0093FF'}}
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls={`panel${acc.faq_id}bh-content`}
                                id={`panel${acc.faq_id}bh-header`}
                            >
                                <Typography>{lang === "uz" ? acc.question_uz : acc.question_ru}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordDet">
                                <Typography>{lang === "uz" ? acc.answer_uz : acc.answer_ru}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
                <div className="secondacc">
                    {data.slice(5, 10).map((acc) => (
                        <Accordion
                            sx={{width: "100%", boxShadow: "none"}}
                            key={acc.faq_id}
                            expanded={expanded2 === `panel${acc.faq_id}`}
                            onChange={handleChange2(`panel${acc.faq_id}`)}
                        >
                            <AccordionSummary
                                style={{color: expanded2 !== `panel${acc.faq_id}` ? 'black' : '#0093FF'}}
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls={`panel${acc.faq_id}bh-content`}
                                id={`panel${acc.faq_id}bh-header`}
                            >
                                <Typography>{lang === "uz" ? acc.question_uz : acc.question_ru}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{lang === "uz" ? acc.answer_uz : acc.answer_ru}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
