import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import { Link } from "react-router-dom";

const TablePage = ({ products }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productData, setProductData] = useState();

  useEffect(() => {
    setProductData(products);
  }, [products]);

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text}`, // Format price
    },
    {
      title: "Actions",
      key: "Actions",
      render: (record) => (
        <div className="edit-delete">
          <Button onClick={() => onEditProduct(record)} className="buttons">
            Edit
          </Button>
          <Button onClick={() => onDeleteProduct(record)} className="delete-button">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const onDeleteProduct = (record) => {
    console.log(record);
    setProductData((prev) => prev.filter((product) => product.key !== record.key));
  };

  const onEditProduct = (record) => {
    setIsEditing(true);
    setEditingProduct(record);
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };

  return (
    <div className="table-page">
      <Link to="/addproduct">
        <Button className="add-button">Add Product</Button>
      </Link>

      <Table className="table-container" columns={columns} dataSource={productData} />
      
      <Modal
        title="Product Editing"
        visible={isEditing}
        okText="Save"
        onCancel={resetEditing}
        onOk={() => {
          setProductData((prev) =>
            prev.map((product) => (product.key === editingProduct.key ? editingProduct : product))
          );
          resetEditing();
        }}
      >
        <Input
          value={editingProduct?.name}
          onChange={(e) => setEditingProduct((prev) => ({ ...prev, name: e.target.value }))}
        />
        <Input
          value={editingProduct?.category}
          onChange={(e) => setEditingProduct((prev) => ({ ...prev, category: e.target.value }))}
        />
        <Input
          value={editingProduct?.description}
          onChange={(e) => setEditingProduct((prev) => ({ ...prev, description: e.target.value }))}
        />
        <Input
          value={editingProduct?.price}
          onChange={(e) => setEditingProduct((prev) => ({ ...prev, price: e.target.value }))}
        />
      </Modal>
    </div>
  );
};

export default TablePage;
