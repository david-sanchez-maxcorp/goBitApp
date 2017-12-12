import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    container: {
      flex: 1
    },
    logo: {
      height: 180,
      width: 180,
      resizeMode: "contain"
    },
    centered: {
      alignItems: "center"
    }
  }
};

export default ApplicationStyles;
