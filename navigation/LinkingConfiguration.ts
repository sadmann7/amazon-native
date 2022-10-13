import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "one",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "two",
            },
          },
          Cart: {
            screens: {
              CartScreen: "three",
            },
          },
          Others: {
            screens: {
              OthersScreen: "four",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
