import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { MealsList } from "./MealsList";
import { useState } from "react";
import axios from "../../api/axios";

function Meals() {
  const [test, setTest] = useState();

  return (
    <div>
      <div className="fixed bottom-10 right-[50px] z-10">
        <Link to="/createMeal">
          <Fab color="primary">
            <AddIcon></AddIcon>
          </Fab>
        </Link>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[1076px]">
        <MealsList />
      </div>
      <div
        className=""
        onClick={async () => {
          await axios
            .get("http://localhost:8080/api/v1/ingredients")
            .then((res) => console.log(res));
        }}
      >
        asdsadasdasdasd
      </div>
    </div>
  );
}

export default Meals;
