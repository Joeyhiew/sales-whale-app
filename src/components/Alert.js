import { Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Alert.css";

function AlertDismissible(props) {
  useEffect(() => {
    setTimeout(props.onHide, 3000);
  });
  return (
    <div className="alert">
      <Alert variant="success" onClose={props.onHide}>
        <Alert.Heading>Successfully added!</Alert.Heading>
      </Alert>
    </div>
  );
}

export default AlertDismissible;
