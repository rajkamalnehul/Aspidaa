import React from "react";
import Sidebar from "../sidebar";
import HomeIcon from "../../assets/icons/home.svg";
import CardIcon from "../../assets/icons/card.svg";
import SupportIcon from "../../assets/icons/circle-help.svg";
import ReservationIcon from "../../assets/icons/customer-reservation.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";

const superadminMenu = [
  {
    icon: HomeIcon,
    alt: "home",
    link: "/super-admin-dashboard",
  },

  {
    icon: CalendarIcon,
    alt: "calendar",
    link: "/super-admin-dashboard/wishlists",
  },
  {
    icon: ReservationIcon,
    alt: "reservation",
    link: "/super-admin-dashboard/reservation",
  },

  {
    icon: CardIcon,
    alt: "payment",
    link: "/super-admin-dashboard/payment",
  },

  {
    icon: SupportIcon,
    alt: "help",
    link: "/super-admin-dashboard/support",
  },
];

function SuperAdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar menu={superadminMenu} />
      <div className="flex-1 max-w-[90rem] mx-auto md-m:!bg-none">
        {children}
      </div>
    </div>
  );
}

export default SuperAdminLayout;
