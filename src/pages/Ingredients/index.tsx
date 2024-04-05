import { Alert, Fab, Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useAppDispatch from "../../hooks/useAppDispatch";

import { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import CreateIngredient from "../../components/CreateIngredient";
import { fetchIngredients, resetError } from "../../store/ingredientsSlice";

function Ingredients() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.ingredients.error);

  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] =
    useState<boolean>(false);

  useEffect(() => {
    setErrorSnackbarOpen(Boolean(error));
  }, [error]);

  const handleCloseSnackbar = (): void => {
    setErrorSnackbarOpen(false);
    dispatch(resetError());
  };

  return (
    <div className="">
      <Snackbar
        open={errorSnackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}{" "}
        </Alert>
      </Snackbar>
      {/* <Snackbar
        open={successSnackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert>{successMessage}</Alert>
      </Snackbar> */}
      <div className="fixed bottom-10 mt-24 right-[50px] z-10">
        <Fab color="primary">
          <AddIcon></AddIcon>
        </Fab>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[976px]">
        <CreateIngredient>asasas</CreateIngredient>
        <div className="" onClick={() => console.log(error)}>
          state
        </div>
        <div className="">{error}</div>
      </div>
    </div>
  );
}

export default Ingredients;
