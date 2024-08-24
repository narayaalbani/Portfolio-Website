// export default function Overview() {
//   const links = [
//     { name: "Open roles", href: "#" },
//     { name: "Internship program", href: "#" },
//     { name: "Our values", href: "#" },
//     { name: "Meet our leadership", href: "#" },
//   ];
//   const stats = [
//     { name: "Offices worldwide", value: "12" },
//     { name: "Full-time colleagues", value: "300+" },
//     { name: "Hours per week", value: "40" },
//     { name: "Paid time off", value: "Unlimited" },
//   ];

//   return (
//     <div
//       id="overview"
//       className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
//     >
//       <div
//         aria-hidden="true"
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div
//         aria-hidden="true"
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             Work with us
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-300">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//             lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//             fugiat aliqua.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//             {links.map((link) => (
//               <a key={link.name} href={link.href}>
//                 {link.name} <span aria-hidden="true">&rarr;</span>
//               </a>
//             ))}
//           </div>
//           <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="flex flex-col-reverse">
//                 <dt className="text-base leading-7 text-gray-300">
//                   {stat.name}
//                 </dt>
//                 <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
//                   {stat.value}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";

// export default function Overview() {
//   const links = [
//     { name: "Open roles", href: "#" },
//     { name: "Internship program", href: "#" },
//     { name: "Our values", href: "#" },
//     { name: "Meet our leadership", href: "#" },
//   ];
//   const stats = [
//     { name: "Offices worldwide", value: "12" },
//     { name: "Full-time colleagues", value: "300+" },
//     { name: "Hours per week", value: "40" },
//     { name: "Paid time off", value: "Unlimited" },
//   ];

//   return (
//     <Box
//       id="overview"
//       position="relative"
//       overflow="hidden"
//       bg="dark"
//       py={{ base: 24, sm: 32 }}
//     >
//       <Box
//         aria-hidden="true"
//         display={{ base: "none", sm: "block" }}
//         position="absolute"
//         top={{ sm: -10 }}
//         right={{ sm: "50%" }}
//         zIndex={-10}
//         mr={{ sm: 10 }}
//         transform="scale(1)"
//         filter="blur(64px)"
//       >
//         <Box
//           width="68.5625rem"
//           height="auto"
//           bgGradient="linear(to-tr, #ff4694, #776fff)"
//           opacity={0.2}
//           clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         />
//       </Box>
//       <Box
//         aria-hidden="true"
//         position="absolute"
//         top={{ base: -52, sm: "-28rem" }}
//         left="50%"
//         zIndex={-10}
//         transform="translateX(-50%)"
//         filter="blur(64px)"
//       >
//         <Box
//           width="68.5625rem"
//           height="auto"
//           bgGradient="linear(to-tr, #ff4694, #776fff)"
//           opacity={0.2}
//           clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         />
//       </Box>
//       <Box mx="auto" maxW="7xl" px={{ base: 6, lg: 8 }}>
//         <Box mx="auto" maxW="2xl" textAlign={{ lg: "left" }}>
//           <Heading
//             as="h2"
//             fontSize={{ base: "4xl", sm: "6xl" }}
//             fontWeight="bold"
//             lineHeight="tight"
//             color="white"
//           >
//             Work with us
//           </Heading>
//           <Text mt={6} fontSize="lg" lineHeight="8" color="gray.300">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//             lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//             fugiat aliqua.
//           </Text>
//         </Box>
//         <Box mx="auto" mt={10} maxW="2xl" textAlign={{ lg: "left" }}>
//           <Grid
//             templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "auto" }}
//             columnGap={8}
//             rowGap={6}
//             fontSize="lg"
//             fontWeight="semibold"
//             lineHeight="7"
//             color="white"
//           >
//             {links.map((link) => (
//               <Link key={link.name} href={link.href} isExternal>
//                 {link.name}{" "}
//                 <Box as="span" aria-hidden="true">
//                   &rarr;
//                 </Box>
//               </Link>
//             ))}
//           </Grid>
//           <Grid
//             mt={{ base: 16, sm: 20 }}
//             templateColumns={{
//               base: "1fr",
//               sm: "repeat(2, 1fr)",
//               lg: "repeat(4, 1fr)",
//             }}
//             gap={8}
//           >
//             {stats.map((stat) => (
//               <Box key={stat.name} display="flex" flexDir="column-reverse">
//                 <Text fontSize="lg" lineHeight="7" color="gray.300">
//                   {stat.name}
//                 </Text>
//                 <Text
//                   fontSize="2xl"
//                   fontWeight="bold"
//                   lineHeight="9"
//                   color="white"
//                 >
//                   {stat.value}
//                 </Text>
//               </Box>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// import { Box, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";

// export default function Overview() {
//   const links = [
//     { name: "Open roles", href: "#" },
//     { name: "Internship program", href: "#" },
//     { name: "Our values", href: "#" },
//     { name: "Meet our leadership", href: "#" },
//   ];
//   const stats = [
//     { name: "Offices worldwide", value: "12" },
//     { name: "Full-time colleagues", value: "300+" },
//     { name: "Hours per week", value: "40" },
//     { name: "Paid time off", value: "Unlimited" },
//   ];

//   return (
//     <Box
//       id="overview"
//       position="relative"
//       overflow="hidden"
//       bg="gray.900"
//       py={{ base: 24, sm: 32 }}
//     >
//       <Box
//         aria-hidden="true"
//         display={{ base: "none", sm: "block" }}
//         position="absolute"
//         top={{ sm: -10 }}
//         right={{ sm: "50%" }}
//         zIndex={-10}
//         mr={{ sm: 10 }}
//         transform="scale(1)"
//         filter="blur(64px)"
//       >
//         <Box
//           width="68.5625rem"
//           height="auto"
//           bgGradient="linear(to-tr, #ff4694, #776fff)"
//           opacity={0.2}
//           clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         />
//       </Box>
//       <Box
//         aria-hidden="true"
//         position="absolute"
//         top={{ base: -52, sm: "-28rem" }}
//         left="50%"
//         zIndex={-10}
//         transform="translateX(-50%)"
//         filter="blur(64px)"
//       >
//         <Box
//           width="68.5625rem"
//           height="auto"
//           bgGradient="linear(to-tr, #ff4694, #776fff)"
//           opacity={0.2}
//           clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         />
//       </Box>
//       <Box mx="auto" maxW="7xl" px={{ base: 6, lg: 8 }}>
//         <Grid
//           templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
//           gap={{ base: 10, lg: 16 }}
//           alignItems="center"
//         >
//           <Image
//             src="/profile.jpg"
//             alt="Image description"
//             minH="75%"
//             objectFit="cover"
//           />
//           <Box maxW="2xl" mx="auto" textAlign={{ lg: "left" }}>
//             <Heading
//               as="h2"
//               fontSize={{ base: "4xl", sm: "6xl" }}
//               fontWeight="bold"
//               lineHeight="tight"
//               color="white"
//             >
//               Work with us
//             </Heading>
//             <Text mt={6} fontSize="lg" lineHeight="8" color="gray.300">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//               lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//               fugiat aliqua.
//             </Text>
//             <Grid
//               mt={10}
//               templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
//               columnGap={8}
//               rowGap={6}
//               fontSize="lg"
//               fontWeight="semibold"
//               lineHeight="7"
//               color="white"
//             >
//               {links.map((link) => (
//                 <Link key={link.name} href={link.href} isExternal>
//                   {link.name}{" "}
//                   <Box as="span" aria-hidden="true">
//                     &rarr;
//                   </Box>
//                 </Link>
//               ))}
//             </Grid>
//             <Grid
//               mt={{ base: 16, sm: 20 }}
//               templateColumns={{
//                 base: "1fr",
//                 sm: "repeat(2, 1fr)",
//                 lg: "repeat(4, 1fr)",
//               }}
//               gap={8}
//             >
//               {stats.map((stat) => (
//                 <Box key={stat.name} display="flex" flexDir="column-reverse">
//                   <Text fontSize="lg" lineHeight="7" color="gray.300">
//                     {stat.name}
//                   </Text>
//                   <Text
//                     fontSize="2xl"
//                     fontWeight="bold"
//                     lineHeight="9"
//                     color="white"
//                   >
//                     {stat.value}
//                   </Text>
//                 </Box>
//               ))}
//             </Grid>
//           </Box>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Overview() {
  return (
    <Box id={"overview"} w={"100%"} bg={"dark"} px={[6, 8]} textColor={"light"}>
      <Flex direction={{ base: "column", lg: "row" }} justify={"space-between"}>
        <Image
          src={"/profile.jpg"}
          alt={"Profile photo"}
          objectFit={"cover"}
          h={["20rem", "28rem"]}
        />
        <Flex
          direction={"column"}
          px={{ base: 8, lg: 0 }}
          pl={{ base: 0, lg: 8 }}
          w={["100%", "2/3"]}
          justify={"center"}
        >
          <Heading textAlign={["center", "start"]} fontSize={["3xl"]}>
            Naraya Albani
          </Heading>
          <Text textAlign={["center", "start"]} fontSize={["xl"]}>
            Programmer
          </Text>
          <Text mt={4} fontSize={["lg"]} textAlign={"justify"}>
            Hello! I'm Muhammad Ariq Farhan. I'm an enthusiastic and highly
            motivated individual who loves a good challenge. I have strong
            leadership skills, a knack for taking initiative, and a passion for
            continuous learning. I adapt quickly and perform well under
            pressure, and my keen eye for detail and problem-solving skills make
            me a valuable asset in the IT field. I actively seek out
            opportunities to learn and grow, tackling every challenge with a
            solutions-oriented mindset. I also have skills and experience in
            color grading with DaVinci Resolve and have worked on several film
            and videography projects.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
