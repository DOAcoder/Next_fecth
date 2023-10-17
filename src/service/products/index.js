import api from "../axios";

const usePostsApi = {
  getAll: async () => api.get('/products', { cache: 'force-cache' }),
  getOneById: async (id) => api.get(`/products/${id}`)

}

export default usePostsApi;