import UserDetailScreen from "../pages/user-detail";
import UserListScreen from "../pages/user-list";

const publicRoutes = [
  { path: "/", name: "user-list", Component: UserListScreen },
  {
    path: "/user-detail/:id",
    name: "user-detail",
    Component: UserDetailScreen,
  },
];

export default publicRoutes;
