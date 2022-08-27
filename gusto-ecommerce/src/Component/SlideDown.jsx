
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideDown({ data, display }) {
  return (


   










    <Menu >
      <MenuButton
        px={2}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {data.heading}

        < IoIosArrowDown />
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
    </Menu >







 
  );
}
