/* eslint-disable no-unused-vars */
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import { Calculate } from "@mui/icons-material";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return ( 
        <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridAutoRows="auto"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box gridColumn="1/1" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
        <StatBox
            title="Apple"
            subtitle1="Total Quantity"
            quantity1="500"
            subtitle2="Remaining Quantity"
            quantity2="200"
            progress="0.25"
            remaining= "10%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2*/}
        <Box gridColumn="1/1" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
        <StatBox
            title="Mango"
            subtitle1="Total Quantity"
            quantity1="500"
            subtitle2="Remaining Quantity"
            quantity2="200"
            progress="0.75"
            remaining="14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 3*/}
        <Box gridColumn="1/1" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
        <StatBox
            title="Banana"
            subtitle1="Total Quantity"
            quantity1="500"
            subtitle2="Remaining Quantity"
            quantity2="200"
            progress="0.75"
            remaining="14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 4*/}
        <Box gridColumn="1/1" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
        <StatBox
            title="Pear"
            subtitle1="Total Quantity"
            quantity1="500"
            subtitle2="Remaining Quantity"
            quantity2="200"
            progress="0.75"
            remaining="14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 5*/}
        <Box gridColumn="1/1" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
        <StatBox
            title="Melon"
            subtitle1="Total Quantity"
            quantity1="500"
            subtitle2="Remaining Quantity"
            quantity2="200"
            progress="0.75"
            remaining="14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

      </Box>
    );
}

export default Products;