import { NavigationMap } from "./types";
// import { ReactComponent as Briefcase } from "briefcase.svg";
// import { ReactComponent as Calendar } from "calendar.svg";
// import { ReactComponent as Car } from "car.svg";
// import { ReactComponent as Chart } from "chart.svg";
// import { ReactComponent as EmptyWalletChange } from "empty-wallet-change.svg";
// import { ReactComponent as Home } from "home.svg";
// import { ReactComponent as InfoCircle } from "info-circle.svg";
// import { ReactComponent as Logout } from "logout.svg";
// import { ReactComponent as Message } from "message.svg";
// import { ReactComponent as Setting } from "setting.svg";
import { Briefcase } from "@/components/svg/icons";
import { Calendar } from "@/components/svg/icons";
import { Car } from "@/components/svg/icons";
import { Chart } from "@/components/svg/icons";
import { EmptyWalletChange } from "@/components/svg/icons";
import { Home } from "@/components/svg/icons";
import { InfoCircle } from "@/components/svg/icons";
import { Logout } from "@/components/svg/icons";
import { Message } from "@/components/svg/icons";
import { Setting } from "@/components/svg/icons";

export const dashboardNavigation: NavigationMap = {
  "main menu": [
    {
      icon: <Home />,
      label: "Dashboard",
      path: "/account",
    },
    {
      icon: <Car />,
      label: "Car rent",
      path: "/account/car-rent",
    },
    {
      icon: <Chart />,
      label: "Insight",
      path: "/account/insight",
    },
    {
      icon: <EmptyWalletChange />,
      label: "Reimburse",
      path: "/account/reimburse",
    },
    {
      icon: <Message />,
      label: "Inbox",
      path: "/account/inbox",
    },
    {
      icon: <Calendar />,
      label: "Calendar",
      path: "/account/calendar",
    },
  ],
  preferences: [
    {
      icon: <Setting />,
      label: "Settings",
      path: "/account/settings",
    },
    {
      icon: <InfoCircle />,
      label: "Help center",
      path: "/account/help",
    },
    {
      icon: <Briefcase />,
      label: "Dark mode",
      path: "/account/",
    },
  ],
};
