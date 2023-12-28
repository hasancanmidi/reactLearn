import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { getCategories } from "../Services/CategoryListService";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Komponent yüklendiğinde ürünleri çek
    const fetchProducts = async () => {
      const data = await getCategories();
      setCategories(data); // Çekilen veriyi state'e set et
    };

    fetchProducts();
  }, []); // Boş bağımlılık dizisi, bu effect'in bir kez çalışmasını sağlar

  return (
    <div>
      {categories.map((category) => (
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>{category}</Menu.Header>
          </Menu.Item>
        </Menu>
      ))}
    </div>
  );
};

export default CategoryList;
