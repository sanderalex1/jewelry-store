import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Header({ onMenuClick }) {
  return (
    <>
      <div className="lg:pb-0 px-[20px] py-[16px] w-full flex flex-row justify-between bg-white">
        <div className="flex gap-4">
          <MenuIcon onClick={onMenuClick} />
        </div>
        <h1>Logo</h1>
        <ShoppingBagIcon />
      </div>
    </>
  );
}

export default Header;
