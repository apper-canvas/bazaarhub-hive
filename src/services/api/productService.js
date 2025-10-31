import { getApperClient } from "@/services/apperClient";

const productService = {
  async getAll() {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords("product_c", {
        fields: [
          { field: { Name: "title_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "price_c" } },
          { field: { Name: "original_price_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "subcategory_c" } },
          { field: { Name: "brand_c" } },
          { field: { Name: "rating_c" } },
          { field: { Name: "review_count_c" } },
          { field: { Name: "in_stock_c" } },
          { field: { Name: "specifications_c" } },
          { field: { Name: "images_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        return [];
      }

      // Parse JSON fields and map to expected format
      return response.data.map(p => ({
        Id: p.Id,
        title: p.title_c,
        title_c: p.title_c,
        description: p.description_c,
        description_c: p.description_c,
        price: p.price_c,
        price_c: p.price_c,
        originalPrice: p.original_price_c,
        original_price_c: p.original_price_c,
        category: p.category_c,
        category_c: p.category_c,
        subcategory: p.subcategory_c,
        subcategory_c: p.subcategory_c,
        brand: p.brand_c,
        brand_c: p.brand_c,
        rating: p.rating_c,
        rating_c: p.rating_c,
        reviewCount: p.review_count_c,
        review_count_c: p.review_count_c,
        inStock: p.in_stock_c,
        in_stock_c: p.in_stock_c,
        specifications: p.specifications_c ? JSON.parse(p.specifications_c) : {},
        specifications_c: p.specifications_c,
        images: p.images_c ? JSON.parse(p.images_c) : [],
        images_c: p.images_c ? JSON.parse(p.images_c) : []
      }));
    } catch (error) {
      console.error("Error fetching products:", error?.response?.data?.message || error);
      return [];
    }
  },

  async getById(id) {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.getRecordById("product_c", parseInt(id), {
        fields: [
          { field: { Name: "title_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "price_c" } },
          { field: { Name: "original_price_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "subcategory_c" } },
          { field: { Name: "brand_c" } },
          { field: { Name: "rating_c" } },
          { field: { Name: "review_count_c" } },
          { field: { Name: "in_stock_c" } },
          { field: { Name: "specifications_c" } },
          { field: { Name: "images_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        return null;
      }

      const p = response.data;
      return {
        Id: p.Id,
        title: p.title_c,
        title_c: p.title_c,
        description: p.description_c,
        description_c: p.description_c,
        price: p.price_c,
        price_c: p.price_c,
        originalPrice: p.original_price_c,
        original_price_c: p.original_price_c,
        category: p.category_c,
        category_c: p.category_c,
        subcategory: p.subcategory_c,
        subcategory_c: p.subcategory_c,
        brand: p.brand_c,
        brand_c: p.brand_c,
        rating: p.rating_c,
        rating_c: p.rating_c,
        reviewCount: p.review_count_c,
        review_count_c: p.review_count_c,
        inStock: p.in_stock_c,
        in_stock_c: p.in_stock_c,
        specifications: p.specifications_c ? JSON.parse(p.specifications_c) : {},
        specifications_c: p.specifications_c,
        images: p.images_c ? JSON.parse(p.images_c) : [],
        images_c: p.images_c ? JSON.parse(p.images_c) : []
      };
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  },

  async searchProducts(query) {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords("product_c", {
        fields: [
          { field: { Name: "title_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "price_c" } },
          { field: { Name: "original_price_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "subcategory_c" } },
          { field: { Name: "brand_c" } },
          { field: { Name: "rating_c" } },
          { field: { Name: "review_count_c" } },
          { field: { Name: "in_stock_c" } },
          { field: { Name: "specifications_c" } },
          { field: { Name: "images_c" } }
        ],
        where: [
          {
            FieldName: "title_c",
            Operator: "Contains",
            Values: [query]
          }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        return [];
      }

      return response.data.map(p => ({
        Id: p.Id,
        title: p.title_c,
        title_c: p.title_c,
        description: p.description_c,
        description_c: p.description_c,
        price: p.price_c,
        price_c: p.price_c,
        originalPrice: p.original_price_c,
        original_price_c: p.original_price_c,
        category: p.category_c,
        category_c: p.category_c,
        subcategory: p.subcategory_c,
        subcategory_c: p.subcategory_c,
        brand: p.brand_c,
        brand_c: p.brand_c,
        rating: p.rating_c,
        rating_c: p.rating_c,
        reviewCount: p.review_count_c,
        review_count_c: p.review_count_c,
        inStock: p.in_stock_c,
        in_stock_c: p.in_stock_c,
        specifications: p.specifications_c ? JSON.parse(p.specifications_c) : {},
        specifications_c: p.specifications_c,
        images: p.images_c ? JSON.parse(p.images_c) : [],
        images_c: p.images_c ? JSON.parse(p.images_c) : []
      }));
    } catch (error) {
      console.error("Error searching products:", error?.response?.data?.message || error);
      return [];
    }
  },

  async filterProducts(filters, sortBy = null) {
    try {
      const apperClient = getApperClient();
      
      const whereConditions = [];

      // Category filter
      if (filters.category && filters.category !== "All") {
        whereConditions.push({
          FieldName: "category_c",
          Operator: "EqualTo",
          Values: [filters.category]
        });
      }

      // Subcategory filter
      if (filters.subcategory) {
        whereConditions.push({
          FieldName: "subcategory_c",
          Operator: "EqualTo",
          Values: [filters.subcategory]
        });
      }

      // Price range filters
      if (filters.minPrice !== undefined) {
        whereConditions.push({
          FieldName: "price_c",
          Operator: "GreaterThanOrEqualTo",
          Values: [filters.minPrice]
        });
      }

      if (filters.maxPrice !== undefined) {
        whereConditions.push({
          FieldName: "price_c",
          Operator: "LessThanOrEqualTo",
          Values: [filters.maxPrice]
        });
      }

      // Rating filter
      if (filters.minRating !== undefined) {
        whereConditions.push({
          FieldName: "rating_c",
          Operator: "GreaterThanOrEqualTo",
          Values: [filters.minRating]
        });
      }

      // Stock filter
      if (filters.inStockOnly) {
        whereConditions.push({
          FieldName: "in_stock_c",
          Operator: "EqualTo",
          Values: [true]
        });
      }

      // Build order by
      let orderBy = [];
      if (sortBy && sortBy.criteria) {
        let fieldName;
        switch (sortBy.criteria) {
          case 'price':
            fieldName = 'price_c';
            break;
          case 'rating':
            fieldName = 'rating_c';
            break;
          case 'name':
            fieldName = 'title_c';
            break;
          default:
            fieldName = null;
        }

        if (fieldName) {
          orderBy.push({
            fieldName,
            sorttype: sortBy.direction === 'desc' ? 'DESC' : 'ASC'
          });
        }
      }

      const response = await apperClient.fetchRecords("product_c", {
        fields: [
          { field: { Name: "title_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "price_c" } },
          { field: { Name: "original_price_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "subcategory_c" } },
          { field: { Name: "brand_c" } },
          { field: { Name: "rating_c" } },
          { field: { Name: "review_count_c" } },
          { field: { Name: "in_stock_c" } },
          { field: { Name: "specifications_c" } },
          { field: { Name: "images_c" } }
        ],
        where: whereConditions,
        orderBy: orderBy.length > 0 ? orderBy : undefined
      });

      if (!response.success) {
        console.error(response.message);
        return [];
      }

      return response.data.map(p => ({
        Id: p.Id,
        title: p.title_c,
        title_c: p.title_c,
        description: p.description_c,
        description_c: p.description_c,
        price: p.price_c,
        price_c: p.price_c,
        originalPrice: p.original_price_c,
        original_price_c: p.original_price_c,
        category: p.category_c,
        category_c: p.category_c,
        subcategory: p.subcategory_c,
        subcategory_c: p.subcategory_c,
        brand: p.brand_c,
        brand_c: p.brand_c,
        rating: p.rating_c,
        rating_c: p.rating_c,
        reviewCount: p.review_count_c,
        review_count_c: p.review_count_c,
        inStock: p.in_stock_c,
        in_stock_c: p.in_stock_c,
        specifications: p.specifications_c ? JSON.parse(p.specifications_c) : {},
        specifications_c: p.specifications_c,
        images: p.images_c ? JSON.parse(p.images_c) : [],
        images_c: p.images_c ? JSON.parse(p.images_c) : []
      }));
    } catch (error) {
      console.error("Error filtering products:", error?.response?.data?.message || error);
      return [];
    }
  }
};

export default productService;