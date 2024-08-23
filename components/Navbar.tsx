import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";

const Links = [
  "Overview",
  "Skills and Tools",
  "Portfolio",
  "Certificate",
  "Contact",
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    isOpen ? onClose() : onOpen();
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    setMenuOpen(false);
    onClose();
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        if (menuOpen && isOpen) {
          setMenuOpen(false);
          onClose();
        }
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={[6, 8]}
      position="sticky"
      top={scrollDirection === "down" ? "-100px" : "0"}
      width="100%"
      zIndex={2}
      boxShadow="md"
      transition="top 0.3s ease-in-out"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box>
          <Link href={`/`}>
            <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
          </Link>
        </Box>
        {/* Desktop Menu */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <Link
              key={link}
              href={`/#${link.toLowerCase().replace(/\s+/g, "")}`}
              fontSize={"lg"}
              position="relative"
              display="block"
              _after={{
                content: '""',
                position: "absolute",
                width: "0",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: "dark",
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
            >
              {link}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          icon={
            isOpen ? (
              <Image src="/close.svg" alt="Close menu" width={24} height={24} />
            ) : (
              <Image src="/menu.svg" alt="Open menu" width={24} height={24} />
            )
          }
          aria-label="Toggle Navigation"
          display={{ md: "none" }}
          onClick={handleToggle}
          background="transparent"
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          _focus={{ boxShadow: "none" }}
          w={6}
          h={6}
          alignItems={"end"}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Link
                key={link}
                onClick={() =>
                  handleLinkClick(`/#${link.toLowerCase().replace(/\s+/g, "")}`)
                }
                py={1}
                rounded="md"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "teal.500",
                  transition: "width 0.3s ease-in-out",
                }}
                _hover={{
                  _after: {
                    width: "100%",
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
