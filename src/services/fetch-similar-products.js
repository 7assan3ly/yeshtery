const fetchSimilarProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export default fetchSimilarProducts;
