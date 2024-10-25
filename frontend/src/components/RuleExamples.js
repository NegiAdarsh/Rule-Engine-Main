import React from 'react';

const RuleExamples = () => {
    const rules = [
        {
            title: "Allowed Fields",
            description: "The only fields allowed are **age**, **department**, **salary**, and **experience**. Please ensure you follow the current syntax for every rule you mention."
        },
        {
            title: "Adding a Rule",
            description: "To add a new rule, use any combination of valid parameters along with logical conditions. For example: **age > 23 && department === 'Computer Science' || age < 30 && department === 'Tech' && experience > 5**."
        },
        {
            title: "Combining Rules",
            description: "To combine rules, use the names of the rules you specified when adding them. For instance, if you named rules **SDE** and **SDE2**, you can merge them by writing: **SDE, SDE2** (strict syntax required)."
        },
        {
            title: "Evaluating a Rule",
            description: "When evaluating the rules, you can enter values in any order in the input field. For example, for RULE **SDE**, you can enter: **{\"age\": 21, \"department\": \"Tech\", \"salary\": 450000, \"experience\": 10}**."
        },
        {
            title: "Viewing and Editing Rules",
            description: "You are free to view all rules under 'Rules Details'. You can edit them as needed to fit your requirements."
        }
    ];

    // Render the rules as needed

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Examples of Rules</h1>
            <ul style={styles.list}>
                {rules.map((rule, index) => (
                    <li key={index} style={styles.rule}>
                        <h3 style={styles.ruleTitle}>{rule.title}</h3>
                        <p style={styles.ruleDescription}>{rule.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    },
    title: {
        marginBottom: '10px',
        color: '#333'
    },
    list: {
        listStyleType: 'none',
        padding: 0
    },
    rule: {
        marginBottom: '15px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px'
    },
    ruleTitle: {
        fontSize: '1.2em',
        color: '#007bff'
    },
    ruleDescription: {
        fontSize: '0.9em',
        color: '#555'
    }
};

export default RuleExamples;
