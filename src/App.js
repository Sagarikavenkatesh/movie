import React from 'react';

export default function NewCaseForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleReset = () => {
    document.getElementById('caseForm').reset();
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px auto',
      padding: '20px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      width: '95%',
      maxWidth: '800px'
    },
    header: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center'
    },
    label: {
      fontWeight: 'bold',
      marginTop: '10px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '5px 0 10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    bankRow: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    bankInput: {
      flex: '1',
      padding: '10px',
      margin: '5px 0 10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    submitButton: {
      padding: '12px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      width: '100%',
      marginTop: '15px',
    },
    actionButton: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginTop: '10px',
      width: '48%',
      cursor: 'pointer',
    },
    actionRow: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>New Case Creation</div>
      <form id="caseForm" onSubmit={handleSubmit}>
        <label style={styles.label}>Crime Number</label>
        <input type="text" name="crimeNumber" placeholder="Enter Crime Number" style={styles.input} />

        <label style={styles.label}>Victim Name</label>
        <input type="text" name="victimName" placeholder="Enter Victim Name" style={styles.input} />

        <label style={styles.label}>Victim Details</label>
        <textarea name="victimDetails" rows="3" placeholder="Enter Victim Details" style={styles.input}></textarea>

        <label style={styles.label}>DO</label>
        <input type="text" name="do" placeholder="Enter DO" style={styles.input} />

        <label style={styles.label}>DR</label>
        <input type="text" name="dr" placeholder="Enter DR" style={styles.input} />

        <label style={styles.label}>Amount Lost</label>
        <input type="number" name="amountLost" placeholder="Enter Amount Lost" style={styles.input} />

        <label style={styles.label}>Amount Frozen</label>
        <input type="number" name="amountFrozen" placeholder="Enter Amount Frozen" style={styles.input} />

        <label style={styles.label}>Gist of the Case</label>
        <textarea name="gistOfCase" rows="4" placeholder="Enter Gist of the Case" style={styles.input}></textarea>

        <label style={styles.label}>FIR Registered on Date</label>
        <input type="date" name="firDate" style={styles.input} />

        <label style={styles.label}>Particulars of Suspects</label>
        <textarea name="suspectDetails" rows="3" placeholder="Enter Particulars of Suspects" style={styles.input}></textarea>

        <div style={styles.bankRow}>
          <input type="text" name="bankName" placeholder="Bank Name" style={styles.bankInput} />
          <input type="text" name="accountNo" placeholder="Account No" style={styles.bankInput} />
          <input type="text" name="ifscCode" placeholder="IFSC Code" style={styles.bankInput} />
        </div>

        <label style={styles.label}>Upload FIR Document</label>
        <input type="file" name="firFile" accept=".pdf,.doc,.docx" style={styles.input} />

        <button type="submit" style={styles.submitButton}>Get Mail</button>

        <div style={styles.actionRow}>
          <button type="button" style={styles.actionButton} onClick={handleReset}>Reset Form</button>
          <button type="button" style={styles.actionButton}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

