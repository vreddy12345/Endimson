### Product Management Application

This project is a robust product management application built using React, Ant Design, and TypeScript/Javascript. It provides a user-friendly interface for managing products, including features for viewing, adding, editing, and deleting products.

#### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Additional Features](#additional-features)
5. [Evaluation Criteria](#evaluation-criteria)
6. [Contributing](#contributing)
7. [License](#license)

---

### Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate into the project directory:

```
cd product-management-app
```

3. Install dependencies:

```
npm install
```

4. Start the application:

```
npm start
```

### Usage

Once the application is running, you can access it through your web browser. The application consists of two main pages:

- **Product List Page:** Displays a list of products with filtering, editing, and deletion capabilities.
- **Add Product Page:** Allows users to add new products with category, name, description, and price fields.

### Features

#### Product List Page

- **Statistics:** Displays the total number of products and the number of unique product categories. Updates automatically when products are added, edited, or deleted.
- **Filters:** Allows users to filter products based on product name, description, and category.
- **Product Table:** Displays the list of products with category, name, description, and price. Each row has different color coding for better visualization of categories.
- **Add Product Button:** Navigates to the "Add Product" page.

#### Add Product Page

- **Add Product Form:** Allows users to add new products with category, name, description, and price fields. Form validation prevents incomplete submissions.
- **Submission:** After successful submission, navigates back to the product list page and adds the new product to the product table.

### Additional Features

- **Responsive Design:** Adapts well to different screen sizes for a seamless user experience on various devices.
- **State Management:** Utilizes React's Context API/Redux/Zustand/Recoil for effective state management, ensuring data consistency across the application.
- **Pagination (Bonus):** Implements pagination for the product table to handle large numbers of products efficiently.
- **Sorting (Bonus):** Adds sorting functionality to the product table, allowing users to sort products by any displayed column.
- **Robust Form Validation (Bonus):** Implements thorough form validation for both add and edit product forms, providing clear error messages.
- **Styling and Theming (Bonus):** Customizes the appearance of Ant Design components to align with specific themes or branding styles.

### Evaluation Criteria

- **Functionality:** The application meets all specified requirements.
- **Code Quality:** Code is well-structured, readable, and maintainable with meaningful variable and function names, effective state management, and organized code.
- **UI/UX:** The user interface is intuitive, user-friendly, and visually appealing.
- **Responsiveness:** The application adapts well to different screen sizes.
- **State Management:** The chosen state management approach is used effectively to manage application state.
- **Documentation:** The README.md file provides clear and comprehensive instructions for installation, usage, and additional features.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the [MIT License](LICENSE).