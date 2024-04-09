import { Alert, Fab, Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAppDispatch from "../../hooks/useAppDispatch";
import React, { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import CreateIngredient from "../../components/CreateIngredient";

import { resetError, resetSuccessMessage } from "../../store/snackbarSlice";
import IngredientsList from "./IngredientsList";

function Ingredients() {
  const dispatch = useAppDispatch();
  // const error = useAppSelector((state) => state.ingredients.error);
  const error = useAppSelector((state) => state.snackbars.errorMessage);
  const successMsg = useAppSelector((state) => state.snackbars.successMessage);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] =
    useState<boolean>(false);

  useEffect(() => {
    setErrorSnackbarOpen(Boolean(error));
  }, [error]);

  useEffect(() => {
    setSuccessSnackbarOpen(Boolean(successMsg));
  }, [successMsg]);

  const handleCloseErrorSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason != "clickaway") {
      console.log(reason);
      dispatch(resetError());
      setErrorSnackbarOpen(false);
    }
  };

  const handleCloseSuccessSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason: string
  ): void => {
    if (reason != "clickaway") {
      console.log(reason);
      dispatch(resetSuccessMessage());
      setSuccessSnackbarOpen(false);
    }
  };

  return (
    <div className="">
      <Snackbar
        open={errorSnackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleCloseErrorSnackbar}
      >
        <Alert onClose={handleCloseErrorSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={successSnackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleCloseSuccessSnackbar}
        autoHideDuration={1000}
      >
        <Alert security="submit">{successMsg}</Alert>
      </Snackbar>
      <div className="fixed bottom-10 mt-24 right-[50px] z-10">
        <CreateIngredient>
          <Fab color="primary">
            <AddIcon></AddIcon>
          </Fab>
        </CreateIngredient>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[976px]">
        <IngredientsList />
      </div>
    </div>
  );
}

export default Ingredients;
