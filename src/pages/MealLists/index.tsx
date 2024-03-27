import MealListCard from "../../components/MealListCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function MealLists() {
  return (
    <div className="">
      <div className="fixed bottom-10 right-[50px] z-10 ">
        <Fab color="primary">
          <AddIcon></AddIcon>
        </Fab>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[1076px]">
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
        <MealListCard />
      </div>
    </div>
  );
}

export default MealLists;
