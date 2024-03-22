import Colors from "./colors";

const Screens = {
  CATEGORIES: "Categories",
  DRAWER: "Drawer",
  FAVORITES: "Favorites",
  MEALS_OVERVIEW: "MealsOverview",
  MEAL_DETAILS: "MealDetails",
};

const drawerStyles = {
  drawerActiveBackgroundColor: Colors.accent,
  drawerActiveTintColor: Colors.primaryDark,
  drawerInactiveTintColor: Colors.accent,
  drawerContentStyle: {
    backgroundColor: Colors.primaryDark,
  },
  sceneContainerStyle: {
    backgroundColor: Colors.primaryMedium,
  },
};
const stackStyles = {
  contentStyle: {
    backgroundColor: Colors.primaryMedium,
  },
};

export const screenOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.primaryDark,
  },
  ...stackStyles,
  ...drawerStyles,
};

export default Screens;
