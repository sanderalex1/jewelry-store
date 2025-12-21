import { Divider } from "@mui/material";

function Footer({ data, onNewsClick }) {
  return (
    <>
      <Divider />
      <div className="px-8 flex flex-col gap-4 py-16">
        {data.map((data, i) => (
          <ul key={i} className="main-font text-sm uppercase">
            {data.category}
          </ul>
        ))}
        <p onClick={onNewsClick} className="main-font text-sm uppercase">
          newsletter lunaria
        </p>
      </div>
    </>
  );
}

export default Footer;
