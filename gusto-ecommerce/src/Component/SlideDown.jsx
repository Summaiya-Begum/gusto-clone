import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
} from "@chakra-ui/react";

export default function SlideDown({ data, display }) {
  return (
    <Menu>
      <MenuButton
        _hover={{ color: "brand.200" }}
        className="my-box"
        transition="all 0.2s"
      >
        {data.heading}
        <ChevronDownIcon
          sx={{
            ".my-box:hover &": {
              transform: "Rotate(180deg)",
            },
          }}
        />
      </MenuButton>
      <MenuList
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,280px)" }}
      >
        {/* MenuItems are not rendered unless Menu is open */}
        {data.data?.map((el) => (
          <MenuItem display="flex" flexDirection="column">
            <Box color="brand.200" sx={{ textAlign: "left" }}>
              {el.heading}
            </Box>
            <Box>{el.description}</Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}