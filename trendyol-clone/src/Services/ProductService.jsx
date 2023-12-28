import axios from 'axios';

// API'nin temel URL'sini ayarlayın
const API_URL = 'https://fakestoreapi.com/products';

// Ürünleri çeken fonksiyon
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Veriyi döndür
  } catch (error) {
    // Hata durumunda, hatayı konsola yazdır
    console.error("Ürünler çekilirken hata oluştu:", error);
    return [];  // Hata durumunda boş bir dizi döndür
  }
};
