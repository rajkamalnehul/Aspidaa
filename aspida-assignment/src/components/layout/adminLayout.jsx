import React from "react";
import Sidebar from "../sidebar";
import HomeIcon from "../../assets/icons/home.svg";
import AvatarIcon from "../../assets/icons/avatar-outline.svg";
import CardIcon from "../../assets/icons/card.svg";
import ReservationIcon from "../../assets/icons/customer-reservation.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";

const adminMenu = [
  {
    icon: HomeIcon,
    alt: "home",
    link: "/admin-dashboard",
  },
  {
    icon: AvatarIcon,
    alt: "profile",
    link: "/admin-dashboard/account",
  },
  {
    icon: CalendarIcon,
    alt: "calendar",
    link: "/admin-dashboard/wishlists",
  },
  {
    icon: ReservationIcon,
    alt: "reservation",
    link: "/admin-dashboard/reservation",
  },

  {
    icon: CardIcon,
    alt: "payment",
    link: "/admin-dashboard/payment",
  },
];

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar menu={adminMenu} />
      <div className="flex-1 max-w-[90rem] mx-auto md-m:!bg-none">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
