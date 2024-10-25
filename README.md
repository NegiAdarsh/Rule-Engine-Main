# Rule Engine with AST
<img width="1440" alt="Screenshot 2024-10-25 at 5 03 26 PM" src="https://github.com/user-attachments/assets/669e660b-f4d7-429e-8a66-16458f59dc98">



This project is a **3-tier rule engine application** designed to determine user eligibility based on attributes such as **age, department, income, spend**, and more. It leverages an **Abstract Syntax Tree (AST)** to represent conditional rules, enabling dynamic creation, combination, and modification of these rules.

## 🚀 Objective

The application evaluates complex rules dynamically based on a user's data attributes. It offers APIs for:

- Creating rules and converting them into ASTs.
- Efficiently combining multiple rules.
- Evaluating rules against user data for eligibility determination.
<img width="1440" alt="Screenshot 2024-10-25 at 5 06 59 PM" src="https://github.com/user-attachments/assets/3a526744-47bb-4e2f-8981-0f59454775f5">


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
<img width="1440" alt="Screenshot 2024-10-25 at 5 14 06 PM" src="https://github.com/user-attachments/assets/5bba9763-8138-4f46-a503-83cf5e53d1fd">


### Create Rule
<img width="423" alt="Screenshot 2024-10-25 at 5 14 46 PM" src="https://github.com/user-attachments/assets/e6abdc55-1ca5-4a48-aed2-fd2f2cb57b9d">


### Evaluate Rule
<img width="423" alt="Screenshot 2024-10-25 at 5 15 09 PM" src="https://github.com/user-attachments/assets/83486c83-40d4-47eb-aa85-fa0bc6db2132">


### Database Schema
<img width="1440" alt="Screenshot 2024-10-25 at 5 06 13 PM" src="https://github.com/user-attachments/assets/e0b85228-27ce-456d-aadc-7087b364b0e7">




---

## 🛠️ Installation & Setup

### Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/NegiAdarsh/Rule-Engine-Main)
   ```

2. **Navigate to the project directory:**

   ```bash
   cd rule-engine
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```



4. **Run both the Frontend and Backend:**

   **To start the frontend:**
   

   ```bash
   npm start
   (If errors use npm i, before starting) 
   ```

   **To start the backend:**

   ```bash
   node index.js
   (If errors use npm i, before starting) 
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
- **Database**: MongoDB
- **Rule Engine**: Abstract Syntax Tree (AST)
- **Deployment**: Docker or cloud services (optional)

---



