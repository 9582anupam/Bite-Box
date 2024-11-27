

const Product = () => {

    const categories = ["Todays Deal", "Top Offer", "Best Seller", "Fruits", "Vegetables", "Snacks"];
    
    return (
        <div>
            <h2>Products</h2>
            <div>
                {categories.map((category) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        {/* Product List */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;