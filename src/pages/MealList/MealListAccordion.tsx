import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MealListAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          Sunday
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Monday</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Tuesday</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Wednesday</AccordionSummary>
      </Accordion>
    </div>
  );
}

export default MealListAccordion;
