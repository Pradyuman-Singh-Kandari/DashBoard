import React, { useState } from 'react';
//import { useUserContext } from './UserContext';
import { Box, Button, TextField, responsiveFontSizes } from '@mui/material';

function ProductForm() {
  //const { userEmail } = useUserContext();

  const [formData, setFormData] = useState({
    name: '', // Change 'name' to 'product'
    price: '', // Change 'price' to 'pricePerKg'
    description: '',
    category: '', // You might want to add this to your form
    totalQuantity: '',
    ProductPhoto: null, // For file upload
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set remainingQuantity to be the same as totalQuantity
    formData.remainQuantity = formData.totalQuantity;

    // Add the user's email to the form data
    formData.email = "pradyumandang@gmail.com";

    // Send the form data to the backend
  
    console.log(formData);
    try {
      var response = await fetch('https://veggies-xzv7.onrender.com/seller/RegisterProduct', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      response = await response.json();
      console.log(response);
      // Handle the response from the server as needed.
    } catch (error) {
      // Handle errors
    }
    
  };

  return (
    <Box m="20px">
      {/* Header component missing */}
      {/* You should include a Header component */}
      <form onSubmit={handleSubmit} className="product-form">
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Name"
            onBlur={handleChange}
            onChange={handleChange}
            value={formData.product} // Change 'values.product' to 'formData.product'
            name="name"
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Category"
            onBlur={handleChange}
            onChange={handleChange}
            value={formData.product} // Change 'values.product' to 'formData.product'
            name="category"
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Description"
            onBlur={handleChange}
            onChange={handleChange}
            value={formData.description} // Change 'values.productDescription' to 'formData.description'
            name="description"
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Total Quantity"
            onBlur={handleChange}
            onChange={handleChange}
            value={formData.totalQuantity}
            name="totalQuantity"
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Price per kg"
            onBlur={handleChange}
            onChange={handleChange}
            value={formData.pricePerKg} // Change 'values.pricePerKg' to 'formData.pricePerKg'
            name="price"
          />
          <Box>
            <pre>Enter Product Image: <input type="file" name="ProductPhoto" onChange={handleChange} required /></pre>
          </Box>
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ProductForm;