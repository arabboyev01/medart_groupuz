import React, {useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.scss";

const Faq = ({data}) => {
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
                                <Typography>{acc.question_uz}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordDet">
                                <Typography>{acc.answer_uz}</Typography>
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
                                <Typography>{acc.question_uz}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{acc.answer_uz}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
