import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./CategoriesScreen";
import MealsOverviewScreen from "./MealsOverviewScreen";
import MealDetailsScreen from "./MealDetailsScreen";
import FavoritesScreen from "./FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Screens, { screenOptions } from "../utils/constants/screens";
import FavoritesContextProvider from "../store/context/favorites-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={screenOptions}>
    <Drawer.Screen
      name={Screens.CATEGORIES}
      component={CategoriesScreen}
      options={{
        drawerIcon: (iconProps) => <Ionicons name="list" {...iconProps} />,
        title: "All Categories",
      }}
    />
    <Drawer.Screen
      name={Screens.FAVORITES}
      component={FavoritesScreen}
      options={{ drawerIcon: (p) => <Ionicons name="star" {...p} /> }}
    />
  </Drawer.Navigator>
);

export default function Navigation() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            component={DrawerNavigator}
            name={Screens.DRAWER}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={MealsOverviewScreen}
            name={Screens.MEALS_OVERVIEW}
          />
          <Stack.Screen
            component={MealDetailsScreen}
            name={Screens.MEAL_DETAILS}
            options={{ title: "About the Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}
