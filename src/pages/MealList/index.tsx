import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import MealListAccordion from "./MealListAccordion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  labelledby: string;
  id: string;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  value,
  labelledby,
  id,
}) => {
  return (
    <div
      id={id}
      className=""
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={labelledby}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function MealList() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };

  return (
    <div className=" mt-[90px] ">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: { xs: "90%", md: 976 },
        }}
      >
        <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth">
          <Tab label="Meal list" id={"MealList"} aria-controls="MealList-tab" />
          <Tab label="Ingredients" id={"Ingredients"} aria-controls="" />
        </Tabs>
      </Box>
      <TabPanel
        id="MealList-tab"
        value={selectedTab}
        index={0}
        labelledby="MealList"
      >
        <MealListAccordion></MealListAccordion>
      </TabPanel>
      <TabPanel
        id="Ingredients-tab"
        value={selectedTab}
        index={1}
        labelledby="Ingredients"
      ></TabPanel>
    </div>
  );
}

export default MealList;
