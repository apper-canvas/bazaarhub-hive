import { getApperClient } from "@/services/apperClient";

const categoryService = {
  async getAll() {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.fetchRecords("category_c", {
        fields: [
          { field: { Name: "name_c" } },
          { field: { Name: "product_count_c" } },
          { field: { Name: "subcategories_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        return [];
      }

      // Parse subcategories from JSON string to array
      return response.data.map(cat => ({
        ...cat,
        name: cat.name_c,
        productCount: cat.product_count_c,
subcategories: cat.subcategories_c ? cat.subcategories_c.split(',').map(s => s.trim()).filter(s => s) : []
      }));
    } catch (error) {
      console.error("Error fetching categories:", error?.response?.data?.message || error);
      return [];
    }
  },

  async getById(id) {
    try {
      const apperClient = getApperClient();
      
      const response = await apperClient.getRecordById("category_c", parseInt(id), {
        fields: [
          { field: { Name: "name_c" } },
          { field: { Name: "product_count_c" } },
          { field: { Name: "subcategories_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        return null;
      }

      const cat = response.data;
      return {
        ...cat,
        name: cat.name_c,
        productCount: cat.product_count_c,
subcategories: cat.subcategories_c ? cat.subcategories_c.split(',').map(s => s.trim()).filter(s => s) : []
      };
    } catch (error) {
      console.error(`Error fetching category ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  }
};

export default categoryService;