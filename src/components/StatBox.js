import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({
  title,
  subtitle1,
  subtitle2,
  quantity1,
  quantity2,
  icon,
  progress,
  remaining,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Box display="flex" gap="87px" mt="2px">
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {subtitle1}
            </Typography>
            <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
              {quantity1}
            </Typography>
          </Box>
          <Box display="flex" gap="50px" mt="2px">
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {subtitle2}
            </Typography>
            <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
              {quantity2}
            </Typography>
          </Box>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
          <Typography
          display="flex"
          justifyContent="center"
          mt="3px"
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {remaining}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
