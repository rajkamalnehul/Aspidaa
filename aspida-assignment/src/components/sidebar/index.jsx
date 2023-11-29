import { Link } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menu }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="px-3 bg-white shadow drop-shadow-xl flex-shrink-0 min-h-screen">
      <div className="px-4 py-5 sticky top-4">
        <div className="pt-4 m-auto w-fit">
          {menu?.map((item, idx) => (
            <Link key={idx} to={item.link}>
              <img
                src={item.icon}
                alt={item.alt}
                key={idx}
                className="py-4 mx-auto"
              />
            </Link>
          ))}
          <img
            src={LogoutIcon}
            alt={"logout"}
            className="py-4 mx-auto cursor-pointer"
            onClick={logout}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
