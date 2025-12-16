import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function Header() {
  return (
    <>
      <div className="lg:pb-0 px-[20px] py-[16px] full-width flex flex-row justify-between">
        <div>
          <MenuIcon />
          <SearchIcon />
        </div>
        <h1>Logo</h1>
        <ShoppingBagIcon />
      </div>
    </>
  );
}

export default Header;
