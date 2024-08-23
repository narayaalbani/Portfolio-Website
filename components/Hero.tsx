import {
  Box,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
  const SosmedItem = [
    { name: "X", href: "https://x.com/" },
    {
      name: "GitHub",
      href: "https://github.com/",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
    },
  ];

  return (
    <Box
      bgImage="url('/gradation.png')"
      bgPos="bottom"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        px={[6, 8]}
        mx="auto"
        maxW="7xl"
        textAlign="center"
        h="80vh"
      >
        <Box
          mb={4}
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="semibold"
          lineHeight="none"
        >
          <Heading as="h1">Hey!👋👋</Heading>
          <Heading as="h1">
            I&apos;m Naraya Albani, a{" "}
            <Box as="span" display={{ md: "block", lg: "inline-block" }}>
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-yellow underline">Programmer</span>',
                    '<span class="text-blue underline">Designer</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>
          </Heading>
        </Box>
        <Text
          mb={8}
          fontSize={["lg", null, "xl"]}
          fontWeight="normal"
          px={[4, 8, 16]}
        >
          I develop and design experience that make user’s life easier
        </Text>
        <Flex gap={10} mx="auto">
          {SosmedItem.map((item) => (
            <ChakraLink
              as={Link}
              key={item.name}
              href={item.href + "narayaalbani"}
              isExternal
              display="inline-flex"
            >
              <Image
                src={"/icon/" + item.name + ".svg"}
                alt={"Naraya Albani's " + item.name + " Account"}
                boxSize={[8, 9, 10]}
                filter="grayscale(100%)"
                _hover={{
                  filter: "grayscale(0%)",
                  transform: "scale(1.3)",
                  transition: "transform 0.2s ease-in-out",
                }}
                _active={{ transform: "scale(1)", filter: "grayscale(100%)" }}
              />
            </ChakraLink>
          ))}
        </Flex>
        <ChakraLink href="#overview" mt={10} mx="auto" display="inline-block">
          <Image
            src="/icon/downArrow.svg"
            alt="For More"
            boxSize={[8, 9, 10]}
            className="animate-bounce"
          />
        </ChakraLink>
      </Flex>
    </Box>
  );
}
