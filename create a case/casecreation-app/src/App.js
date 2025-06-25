import React, { useState } from "react";

const CreateCasePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({});
  const [firFile, setFirFile] = useState(null);

  const styles = {
    pageWrapper: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f2f2f2",
      padding: "20px",
    },
    container: {
      textAlign: "center",
      maxWidth: "800px",
      width: "100%",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    optionsBox: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    optionCard: {
      background: "#fff",
      padding: "20px 40px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      cursor: "pointer",
      fontSize: "18px",
    },
    formBox: {
      background: "#fff",
      padding: "25px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "left",
    },
    fieldGroup: {
      marginBottom: "10px",
    },
    label: {
      fontWeight: "bold",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "4px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "8px",
      marginTop: "4px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      marginTop: "4px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
      minHeight: "70px",
      boxSizing: "border-box",
    },
    button: {
      padding: "8px 16px",
      margin: "8px 5px 0 0",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      cursor: "pointer",
    },
    submitBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    backBtn: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    otherBtn: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    resetBtn: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
  };

  const crimeTypes = ["Fraud", "Cybercrime", "Theft", "Harassment", "Other"];
  const transactionModes = ["NEFT", "RTGS", "IMPS", "UPI", "Cheque", "Card", "Others"];
  const serviceTypes = ["Prepaid", "Postpaid", "Data Card", "Broadband"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFirFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("FIR PDF:", firFile);
    alert("Form submitted! Check console for data.");
  };

  const handleReset = () => {
    setFormData({});
    setFirFile(null);
    alert("Form reset!");
  };

  const renderField = (label, name, type = "text") => (
    <div style={styles.fieldGroup}>
      <div style={styles.label}>{label}</div>
      <input
        style={styles.input}
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
      />
    </div>
  );

  const renderSelect = (label, name, options) => (
    <div style={styles.fieldGroup}>
      <div style={styles.label}>{label}</div>
      <select
        style={styles.select}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  const renderTextarea = (label, name) => (
    <div style={styles.fieldGroup}>
      <div style={styles.label}>{label}</div>
      <textarea
        style={styles.textarea}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
      />
    </div>
  );

  const commonFields = (
    <>
      {renderField("Case ID / FIR Number", "caseId")}
      {renderField("Date of Incident", "incidentDate", "date")}
      {renderSelect("Type of Crime", "crimeType", crimeTypes)}
    </>
  );

  const intermediaryFields = (
    <>
      {commonFields}
      {renderField("Name of Intermediary", "intermediaryName")}
      {renderField("Registered Address", "intermediaryAddress")}
      {renderField("POC Email", "pocEmail", "email")}
      {renderField("Account/User ID of Suspect", "suspectUserId")}
      {renderField("Account/User ID of Victim", "victimUserId")}
      {renderField("Transaction ID / Order ID", "transactionId")}
      {renderField("Date & Time of Transaction", "transactionDateTime", "datetime-local")}
      {renderField("Nature of Service Provided", "serviceNature")}
      {renderTextarea("Log Records / Access Logs / Chat History (Optional)", "logRecords")}
      {renderField("Action Requested", "actionRequested")}
    </>
  );

  const bankFields = (
    <>
      {commonFields}
      {renderField("Bank Name", "bankName")}
      {renderField("Branch Name & Address", "branchName")}
      {renderField("Victim's Account Number", "victimAccount")}
      {renderField("Suspect's Account Number", "suspectAccount")}
      {renderField("Transaction ID / Reference Number", "bankTransactionId")}
      {renderField("Date & Time of Transaction", "bankTransactionDate", "datetime-local")}
      {renderSelect("Mode of Transaction", "transactionMode", transactionModes)}
      {renderField("Amount Lost", "amountLost")}
      {renderField("Amount Frozen", "amountFrozen")}
      {renderTextarea("Purpose of Transaction", "transactionPurpose")}
      {renderTextarea("Supporting Documents (Optional)", "supportDocs")}
      {renderField("Action Requested", "bankActionRequested")}
    </>
  );

  const tspFields = (
    <>
      {commonFields}
      {renderField("TSP Name", "tspName")}
      {renderField("Registered Office Address", "tspAddress")}
      {renderField("Victim Number", "victimNumber")}
      {renderField("Suspect Number", "suspectNumber")}
      {renderField("IMEI / IMSI Number", "imei")}
      {renderSelect("Type of Service", "serviceType", serviceTypes)}
      {renderField("Date & Time of Incident", "incidentDateTime", "datetime-local")}
      {renderTextarea("Cell Tower / Location Data Request", "cellTowerRequest")}
      {renderTextarea("Call Detail Records Request", "cdrRequest")}
      {renderField("Action Requested", "tspActionRequested")}
    </>
  );

  const renderOptions = () => (
    <div style={styles.container}>
      <h1 style={styles.title}>Create a Case</h1>
      <div style={styles.optionsBox}>
        {["Intermediary", "Bank", "TSP"].map((option) => (
          <div
            key={option}
            style={styles.optionCard}
            onClick={() => setSelectedOption(option.toLowerCase())}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );

  const renderForm = () => (
    <div style={styles.container}>
      <h1 style={styles.title}>{selectedOption.toUpperCase()} CASE FORM</h1>
      <form style={styles.formBox} onSubmit={(e) => e.preventDefault()}>
        {selectedOption === "intermediary" && intermediaryFields}
        {selectedOption === "bank" && bankFields}
        {selectedOption === "tsp" && tspFields}

        <div style={styles.fieldGroup}>
          <div style={styles.label}>Upload FIR PDF</div>
          <input
            style={styles.input}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <button
            type="button"
            style={{ ...styles.button, ...styles.submitBtn }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.backBtn }}
            onClick={() => setSelectedOption(null)}
          >
            Back
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.otherBtn }}
            onClick={() => alert("Mail sent (placeholder)!")}
          >
            Get Mail
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.resetBtn }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div style={styles.pageWrapper}>
      {selectedOption ? renderForm() : renderOptions()}
    </div>
  );
};

export default CreateCasePage;
