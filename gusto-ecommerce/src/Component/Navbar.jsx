import { Box, HStack } from "@chakra-ui/react";
import SlideDown from "./SlideDown";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

export default function Navbar() {
  
  const navbarData = [
    {
      heading: "Payroll and more",
      data: [
        {
          heading: "Payroll",
          link: "/payroll",
          description:
            "Automatic deductions and filings, direct deposits, W-2s, and 1099s",
        },
        {
          heading: "Employee benifits",
          description: "Health benifits, automatic savings, 401(k)s, and more",
        },
        {
          heading: "Hiring and onboarding",
          description: "Offer letters, checklists, software setup, and more",
        },
        {
          heading: "Time tools",
          description:
            "Simple time tracking, time-off requests, and PTO policies",
        },
        {
          heading: "HR Experts",
          description:
            "Direct access to certified HR professionals and other resources",
        },
        {
          heading: "Gusto Wallet",
          description: "A free employee app for smart saving and spending",
        },
      ],
      button: ["See demo", "Integrations"],
    },
    {
      heading: "For Accountants",
      link: "/accounting",
      data: [
        {
          heading: "Become a partner",
          description: "Grow your accounting or bookkeeping practice",
        },
        {
          heading: "People Advisory",
          description:
            "Combine financial expertise with people-focused advising",
        },
        {
          heading: "Gusto Pro",
          description: "Save time with Gusto's modern accounting dashboard",
        },
        {
          heading: "Trainings",
          description:
            "Get People Advisory Certified and take the Accelerator course",
        },
        {
          heading: "Gusto partner blog",
          description: "Get tools and advice for modern accountants",
        },
        {
          heading: "Gusto Next 2022",
          description:
            "Sign up for our live accounting event on September 27-28",
        },
      ],
    },
    {
      heading: "Resources",
      link: "/resources",
      data: [
        {
          heading: "Calculator and tools",
          description:
            "Tax calculators, checklists, compensation tools, and more",
        },
        {
          heading: "Talk Shop blog",
          description: "Expert articles and answers to all your questions",
        },
        {
          heading: "Help Center",
          description: "Expert answers and how-to guides for using Gusto",
        },
        {
          heading: "Small business guides",
          description: "Simple steps to run payroll, add benifits, and more",
        },
        {
          heading: "Find an accountant",
          description: "Browse accountants in our Partner Directory",
        },
        {
          heading: "Gusto Embedded Payroll",
          description: "APIs for building payroll into your own platform",
        },
      ],
    },
    {
      heading: "Built for you",
      link: "/built",
      data: [
        {
          heading: "Gusto for new business",
          description:
            "Set your new business up with payroll, benifits, and more",
        },
        {
          heading: "Switching to Gusto",
          description:
            "Transfer your payroll, benifits, and HR from another provider",
        },
      ],
    },
  ];
  return (
    <header>
      <HStack
        sx={{
          display: "flex",
          justifyContent: {
            base: "space-evenly",
            sm: "space-evenly",
            md: "space-evenly",
            lg: "space-evenly",
            xl: "space-evenly",
            "2xl": "center",
          },
          gap: "1rem"

        }}
      >
        <Link to="/">
          <Box color="brand.300" fontSize="40px" fontWeight="700">
            gusto
          </Box>
        </Link>
        <Link to="/whygusto">
          <Box
            _hover={{ color: "brand.200" }}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          >
            Why Gusto
          </Box>
        </Link>

        <SlideDown
          data={navbarData[0]}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
        />
        <Box
          _hover={{ color: "brand.200" }}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
        >
          Pricing
        </Box>
        <SlideDown
          data={navbarData[1]}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
        />
        <SlideDown
          data={navbarData[2]}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "block",
          }}
        />
        <SlideDown
          data={navbarData[3]}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
        />
        <Link to="/search">
          <Box>
            <Search2Icon color="brand.200" />
            {"  "}Search
          </Box>
        </Link>
        <Link to="/signin">
          <Box bg="brand.100" padding="10px 20px" borderRadius="7px">
            Sign in
          </Box>
        </Link>
        <Link to="/signup">
          <Box
            bg="brand.300"
            color="white"
            padding="10px 20px"
            borderRadius="7px"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            Create account
          </Box>
        </Link>
      </HStack>
    </header>
  );
}
