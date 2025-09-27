import axios from "axios"


export const fetchProducts= async()=>{
    try {
        const response=await axios.get('/api/products')
        return response.data

    } catch (error) {
        console.log(error)
        throw error
    }
}

// order place

export const placeOrder = async (orderData) => {
  console.log("orderData", orderData);
  try {
    const formData = new FormData();
    formData.append("firstName", orderData.firstName);
    formData.append("lastName", orderData.lastName);
    formData.append("address", orderData.address);
    formData.append("cart", JSON.stringify(orderData.cart)); // ✅ stringify cart

    const response = await axios.post("/api/orders", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // important
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
