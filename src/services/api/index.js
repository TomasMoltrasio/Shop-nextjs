const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    putProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUsers: `${API}/api/${VERSION}/users/`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategories: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`,
  },
};

export default endPoints;
