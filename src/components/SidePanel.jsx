import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  InputBase,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const searchBarStyles = {
  display: "flex",
  justifySelf: "center",
  MaxWidth: "24rem",
  backgroundColor: "#E0E0E0",
  padding: "0.5625rem 0.75rem",
  fontSize: "0.875rem",
  color: "#555",
  "&::placeholder": {
    color: "#9a9a9a",
    opacity: 1,
  },
};

function SidePanel({ open, onClose, body, material, collections }) {
  const content = () => (
    <Box className="h-screen p-4 bg-[var(--bgColor)]" role="presentation">
      <Box className="flex flex-col gap-4">
        <IconButton
          sx={{ display: "flex", justifyContent: "flex-start", width: "3rem" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <InputBase placeholder="Search for..." sx={searchBarStyles} />
      </Box>
      <Box className="flex flex-wrap p-4 h-auto">
        <Box className="flex gap-36">
          <Box className="flex flex-col p-4">
            <h1 className="main-font capitalize font-bold">body</h1>
            <List>
              {body.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton sx={{ padding: 0 }} onClick={onClose}>
                    <ListItemText
                      primary={
                        <span className="main-font capitalize text-[#4B4B4B] text-sm">
                          {text}
                        </span>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className="flex flex-col p-4">
            <h1 className="main-font capitalize font-bold">material</h1>
            <List>
              {material.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton sx={{ padding: 0 }} onClick={onClose}>
                    <ListItemText
                      primary={
                        <span className="main-font capitalize text-[#4B4B4B] text-sm">
                          {text}
                        </span>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box className="flex flex-col p-4">
          <h1 className="main-font capitalize text-right font-bold">
            collections
          </h1>
          <List>
            {collections.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ padding: 0 }} onClick={onClose}>
                  <ListItemText
                    primary={
                      <span className="main-font capitalize text-[#4B4B4B] text-sm text-right">
                        {text}
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box className="flex h-[12rem] m-4 gap-2 justify-center">
        <img src="placeholder.jpg" alt="" />
        <img src="placeholder.jpg" alt="" />
      </Box>
      <Box className="flex justify-around main-font pt-4 pb-4">
        <Box className="flex flex-col text-left gap-2">
          <p className="uppercase">faq</p>
          <p className="capitalize">contact</p>
        </Box>
        <Box className="flex flex-col text-left gap-2">
          <p className="capitalize">instagram</p>
          <p className="capitalize">twitter</p>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {content()}
    </Drawer>
  );
}

export default SidePanel;
