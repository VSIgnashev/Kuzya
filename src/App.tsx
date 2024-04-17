import "./App.css";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utilities/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Meals from "./pages/Meals";

import MealLists from "./pages/MealLists";
import MealList from "./pages/MealList";
import Header from "./components/Header";
import Ingredients from "./pages/Ingredients";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Header></Header>

        <Routes>
          <Route path="/" element={<CreateRecipe />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/mealList" element={<MealList />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
