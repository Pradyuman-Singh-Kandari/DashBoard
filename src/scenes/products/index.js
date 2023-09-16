import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const cardStyle = {
  width: "300px",
  height: "250px",
  margin: "20px",
  padding: "0px",
  borderRadius: "25px",
  boxShadow: "0px 4px 6px #24eded",
  transition: "transform 0.2s ease-in-out",
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "#1379c2"
};

const buttonStyle = {
  marginTop: "10px",
};

const ProductPage = ({ userEmail }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const apiUrl ="seller/products/" + localStorage.getItem("userEmail");

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(productData);
  }, []);

  return (
    <>
      <Sidebar />
      <main className="content">
        <Topbar />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {productData.map((product, index) => (
            <Card key={index} style={cardStyle}>
              <CardContent style={cardContentStyle}>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1">
                  Description: {product.description}
                </Typography>
                <Typography variant="body1">
                  Total Quantity: {product.totalQuantity}
                </Typography>
                <Typography variant="body1">
                  Remaining Quantity: {product.remainQuantity}
                </Typography>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    style={buttonStyle}
                    onClick={() => alert(`You clicked on ${product.name}`)}
                  >
                    Edit
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProductPage;
