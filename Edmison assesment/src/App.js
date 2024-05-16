import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import AddPage from "./components/AddPage";
import TablePage from "./components/TablePage";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(["Books", "Clothing", "Electronics"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([
    {
      category: "Electronics",
      name: "Smartphone",
      description: "Latest model smartphone with all the newest features.",
      price: 699,
      key: "1",
    },
    // Additional product data...
  ]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeCategory = (value) => {
    setSelectedCategory(value);
  };

  const doFilters = () => {
    console.log(name, description, selectedCategory);
    // Implement filtering logic here
  };

  return (
    <div className="App">
      <div className="main-data">
        <div className="heading">
          <h1>Product Management Application</h1>
        </div>
        <div className="filter-box">
          <p>Filter</p>
          <Input className="input" onChange={onChangeName} placeholder="Name" />
          <Input className="input" onChange={onChangeDescription} placeholder="Description" />
          <Select className="input" onChange={onChangeCategory} placeholder="Category" value={selectedCategory}>
            {category.map((fruit, index) => (
              <Select.Option key={index} value={fruit}>
                {fruit}
              </Select.Option>
            ))}
          </Select>
          <Button onClick={doFilters} type="primary">
            Search
          </Button>
        </div>
        <TablePage products={products} />
        {/* <AddPage/> */}
      </div>
    </div>
  );
};

export default App;
