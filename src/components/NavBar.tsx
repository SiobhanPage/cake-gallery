import { HStack, Heading, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading size="lg">🎂 Cake Gallery</Heading>
      <IconButton
        aria-label="Toggle colour mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </HStack>
  );
};

export default NavBar;
