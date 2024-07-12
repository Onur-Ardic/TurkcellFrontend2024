const apiUrl = "http://localhost:5500";

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
};

export const getProducts = async () => {
    return fetchData(`${apiUrl}/clothesProduct`, { cache: "no-store" });
};

export const getHomepageComments = async () => {
    return fetchData(`${apiUrl}/homepageComment`, { cache: "no-store" });
};

export const getProductById = async (id) => {
    const products = await getProducts();
    return products.find((product) => product.id.toString() === id);
};

export const getProductsForCategory = async (style) => {
    const products = await getProducts();
    return products.filter((product) => product.style === style);
};

export const postProductComment = async (productId, comment) => {
    try {
        const product = await getProductById(productId);
        product.comments.push(comment);

        const response = await fetch(`${apiUrl}/clothesProduct/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error("Failed to update product");
        }

        return await response.json();
    } catch (error) {
        console.error("Error posting comment:", error);
        throw new Error("Failed to post comment");
    }
};
