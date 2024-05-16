import React, { useState } from "react";
import { Button, Input, Select, Form } from "antd";
import { useArrayContext } from "../../Context";

function AddPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addItem } = useArrayContext();

  const handleSubmit = () => {
    const newItem = {
      category: selectedCategory,
      name,
      description,
      price: parseFloat(price), // Convert price to a float
      key: Date.now(), // Use timestamp as key
    };

    console.log(newItem);
    addItem(newItem); // Add new item to context
    // Clear form fields
    setName("");
    setDescription("");
    setPrice("");
    setSelectedCategory("");
  };

  const onChangeCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="add-product-page">
      <div className="product-main-container">
        <h1 className="heading">Add Product Form</h1>
        <div className="product-container">
          <Form layout="vertical">
            <Form.Item label="Category" name="category">
              <Select
                onChange={onChangeCategory}
                placeholder="Select category"
                value={selectedCategory}
              >
                {["Books", "Clothing", "Electronics"].map((category) => (
                  <Select.Option key={category} value={category}>
                    {category}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Name" name="name">
              <Input
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input
                type="number"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleSubmit}>
                ADD ITEM
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
