import productsData from "@/services/mockData/products.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const productService = {
  async getAll() {
    await delay(300);
    return [...productsData];
  },

  async getById(id) {
    await delay(200);
    const product = productsData.find((p) => p.Id === parseInt(id));
    if (!product) {
      throw new Error("Product not found");
    }
    return { ...product };
  },

  async getByCategory(category) {
    await delay(300);
    return productsData.filter((p) => p.category === category);
  },

  async searchProducts(query) {
    await delay(300);
    const lowerQuery = query.toLowerCase();
    return productsData.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
  },

async filterProducts(filters, sortBy = null) {
    await delay(300);
    let filtered = [...productsData];

    if (filters.category && filters.category !== "All") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.subcategory) {
      filtered = filtered.filter((p) => p.subcategory === filters.subcategory);
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    if (filters.minRating !== undefined) {
      filtered = filtered.filter((p) => p.rating >= filters.minRating);
    }

    if (filters.inStockOnly) {
      filtered = filtered.filter((p) => p.inStock === true);
    }
// Apply sorting if specified
    if (sortBy && sortBy.criteria) {
      filtered.sort((a, b) => {
        let compareValue = 0;
        
        switch (sortBy.criteria) {
          case 'price':
            compareValue = a.price - b.price;
            break;
          case 'rating':
case 'rating':
            compareValue = a.rating - b.rating;
            break;
          case 'name':
            compareValue = (a.title || '').localeCompare(b.title || '');
            break;
            compareValue = 0;
        }
        
        return sortBy.direction === 'desc' ? -compareValue : compareValue;
      });
    }

    return filtered;
  }
};

export default productService;