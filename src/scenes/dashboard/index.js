import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme, Paper, Select } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import LineChart from "../../components/LineChart";
import Sidebar from "../global/Sidebar"
import Topbar from "../global/Topbar"
import { MenuItem } from "@mui/material"; // Use @mui/material for MenuItem

const Dashboard = ({ userEmail }) => {
  const theme = useTheme();
  const [rq, setRq] = useState(0);
  const [tq, setTq] = useState(0);
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(""); // State to store the selected product

  useEffect(() => {
    const apiUrl = "seller/products/" + localStorage.getItem("userEmail");

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(productData);
  }, []);

  const handleVeggie = async () => {
    if (!selectedProduct) {
      console.error("Please select a product.");
      return;
    }
    console.log(selectedProduct);
    const eM = localStorage.getItem("userEmail");
    const data = {"name": selectedProduct, "email": eM}
    // Fetch the data from the backend using the selected product
    const apiUrl = "/seller/products/particularProduct";
    console.log(data);
    try {
      let response = await fetch(apiUrl, {
        // mode: 'no-cors',
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      });
      if (response.ok) {
        const data = await response.json();
        // Update the state variables rq and tq with the fetched data
        setRq(data.remainQuantity);
        setTq(data.totalQuantity);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  var sales = (userData.totalQuantity - userData.remainQuantity) * 500;

  return (
    <>
      <Sidebar />
      <main className="content">
        <Topbar />

        <Box m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadOutlinedIcon />}
            >
              Download Reports
            </Button>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            <Box gridColumn="span 4" gridRow="span 2">
              <Paper elevation={3} sx={{ height: "100%" }}>
                <Box
                  bgcolor={colors.primary[400]}
                  p="30px"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h5" fontWeight="600">
                    Product Remaining
                  </Typography>
                  <div>
                    <Select
                      value={selectedProduct} // Set the selected value
                      onChange={(e) => setSelectedProduct(e.target.value)} // Handle selection change
                    >
                      {productData.map((product) => (
                        <MenuItem key={product.id} value={product.name}>
                          {product.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <button onClick={handleVeggie}>Submit</button>
                  </div>
                  <ProgressCircle progress={rq/tq} size="125" />
                  <Box>
                    <Typography
                      variant="h5"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "15px" }}
                    >
                      {userData.remainQuantity}
                    </Typography>
                    <Typography>Out of</Typography>
                    <Typography
                      variant="h4"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "3px" }}
                    >
                      {userData.totalQuantity}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>

            <Box gridColumn="span 4" gridRow="span 2">
              <Paper elevation={3} sx={{ height: "100%" }}>
                <Box
                  bgcolor={colors.primary[400]}
                  p="30px"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h5" fontWeight="600">
                    Sales This Month
                  </Typography>
                  <ProgressCircle progress="0.30" size="125" />
                  <Box>
                    <Typography
                      variant="h2"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "35px" }}
                    >
                      {sales}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>

            <Box gridColumn="span 4" gridRow="span 2">
              <Paper elevation={3} sx={{ height: "100%" }}>
                <Box
                  bgcolor={colors.primary[400]}
                  p="30px"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/user.png"}
                    alt="profile-user"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                  <Typography variant="h5" fontWeight="600" sx={{ mt: "15px" }}>
                    {userData.userName}
                  </Typography>
                  <Typography variant="body2">
                    {userData.userDescription}
                  </Typography>
                </Box>
              </Paper>
            </Box>

            <Box gridColumn="span 12" gridRow="span 2">
              <Paper elevation={3} sx={{ height: "100%" }}>
                <LineChart isDashboard={true} />
              </Paper>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Dashboard;
