import React from "react";
import Sidebar from "../sidebar";
import AvatarIcon from "../../assets/icons/avatar-outline.svg";
import CardIcon from "../../assets/icons/card.svg";
import SupportIcon from "../../assets/icons/circle-help.svg";
import ReservationIcon from "../../assets/icons/customer-reservation.svg";
import WishlistIcon from "../../assets/icons/heart-outlined-black.svg";

const userMenu = [
  {
    icon: AvatarIcon,
    alt: "profile",
    link: "/user-dashboard/account",
  },

  {
    icon: ReservationIcon,
    alt: "reservation",
    link: "/user-dashboard/reservation",
  },

  {
    icon: WishlistIcon,
    alt: "wishlist",
    link: "/user-dashboard/wishlist",
  },

  {
    icon: CardIcon,
    alt: "payment",
    link: "/user-dashboard/payment",
  },

  {
    icon: SupportIcon,
    alt: "help",
    link: "/user-dashboard/support",
  },
];

function UserLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar menu={userMenu} />
      <div className="flex-1 max-w-[90rem] mx-auto md-m:!bg-none">
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
