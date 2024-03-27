import { createTheme } from "@mui/material/styles";
import LinkBehavior from "./linkBehavior";

import { LinkProps } from "@mui/material/Link";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
