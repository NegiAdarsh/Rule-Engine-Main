# Rule Engine with AST

![image](https://github.com/user-attachments/assets/b650b1d0-88f5-4d4c-98bb-ced66a42cf36)

This project is a **3-tier rule engine application** designed to determine user eligibility based on attributes such as **age, department, income, spend**, and more. It leverages an **Abstract Syntax Tree (AST)** to represent conditional rules, enabling dynamic creation, combination, and modification of these rules.

## 🚀 Objective

The application evaluates complex rules dynamically based on a user's data attributes. It offers APIs for:

- Creating rules and converting them into ASTs.
- Efficiently combining multiple rules.
- Evaluating rules against user data for eligibility determination.

---

## 🌟 Key Features

- **AST Representation**: Uses AST (Abstract Syntax Tree) to define and evaluate rules.
- **Dynamic Rule Creation**: Create rules from strings and convert them into AST format dynamically.
- **Efficient Rule Combination**: Combine multiple rules while minimizing redundant checks.
- **Rule Evaluation**: Evaluate user attributes against rules to determine eligibility.

---

## 🛠️ Functionalities

### For Users:
- **Create Rules**: Define conditional rules using a user-friendly UI, then convert them into ASTs.
- **Modify Rules**: Update operators, operands, or sub-expressions within the AST.
- **Evaluate Rules**: Test rules against user data (e.g., age, department, salary) for eligibility checks.
- **Combine Rules**: Merge multiple rules into a single AST using efficient strategies to reduce redundant checks.

### For Administrators:
- **Manage Rules**: Create, update, or delete rules within a centralized catalog.
- **View Rule Details**: View and validate rules in AST format for debugging.

### General Features:
- **Simple UI**: Easy-to-use interface for creating and managing rules.
- **API Integration**: RESTful API endpoints for rule creation, combination, and evaluation.
- **Data Persistence**: Persist rules and metadata in a PostgreSQL database.
- **Error Handling**: Robust error handling for invalid rule strings or formats.
- **Validation**: Ensure attributes meet predefined criteria from the rule catalog.

---

## 📸 Snapshots

### Rule Details
![image](https://github.com/user-attachments/assets/ffa09c6e-60d1-4548-9fcf-b79eed581eb4)

### Create Rule
![image](https://github.com/user-attachments/assets/72ddecab-3748-4311-bb55-48de39061435)

### Evaluate Rule
![image](https://github.com/user-attachments/assets/b3bf84c1-0a2f-458b-bac2-5a8c88ce8078)

### Database Schema
![image](https://github.com/user-attachments/assets/f53ec406-2810-4b55-92f4-c9c95898055b)



---

## 🛠️ Installation & Setup

### Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd rule-engine
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file with the following keys:

   ```bash
   DB_URL=<your_database_url>
   ```

5. **Run both the Frontend and Backend:**

   **To start the frontend:**

   ```bash
   npm start
   ```

   **To start the backend:**

   ```bash
   node index.js
   ```

6. **Access the application:**

   - **Frontend**:
   ```bash
      Open `http://localhost:3000` in your browser.
   ```
   - **Backend**:
   ```bash
    API will run on `http://localhost:5000`.
   ```

---

## 🛠️ Tech Stack

- **Frontend**: React.js (or similar)
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Rule Engine**: Abstract Syntax Tree (AST)
- **Deployment**: Docker or cloud services (optional)

---

## 🤝 Contact

For any questions or contributions, feel free to reach out via:
- [LinkedIn](https://www.linkedin.com/in/shaswat-gusain-2924a324a/)
- [Email](mailto:shaswatgusain1@example.com)

---

