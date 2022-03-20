import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebaseApp from "../firebase.js";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import DefaultAvatar from "../assets/default-avatar.png";
import AlertDismissible from "./Alert";
import { getTeams } from "../redux/Team/team.actions";
import "./CreateModal.css";

function CreateModal(props) {
  const dispatch = useDispatch();
  //   const [campaignsCount, setCampaignsCount] = useState(0);
  //   const [leadsCount, setLeadsCount] = useState(0);
  //   const [teamName, setTeamName] = useState("");
  //   const [teamDesc, setTeamDesc] = useState("");
  //   const [teamPic, setTeamPic] = useState(DefaultAvatar);
  const [showAlert, setAlertShow] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.teamName) {
      errors.teamName = "Required";
    } else if (values.teamName.length > 15) {
      errors.teamName = "Must be 15 characters or less";
    }

    if (!values.teamDesc) {
      errors.teamDesc = "Required";
    }

    if (!values.leadsCount) {
      errors.leadsCount = "Required";
    } else if (isNaN(values.leadsCount)) {
      errors.leadsCount = "Must be a number";
    }

    if (!values.campaignsCount) {
      errors.campaignsCount = "Required";
    } else if (isNaN(values.campaignsCount)) {
      errors.campaignsCount = "Must be a number";
    }

    if (values.teamPic.indexOf("https://") == -1 && values.teamPic != "") {
      errors.teamPic = "Image link needs to be a url link (e.g. https://)";
    } else if (values.teamPic.match(/\.(jpeg|jpg|png)$/) == null) {
      errors.teamPic =
        "Image link needs to have a file extension: jpg/jpeg/png";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      teamName: "",
      teamDesc: "",
      teamPic: "",
      campaignsCount: 0,
      leadsCount: 0,
    },
    validate,
    onSubmit: (values) => {
      props.onHide();
      const today = new Date();
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const date =
        today.getDate() +
        " " +
        month[today.getMonth()] +
        " " +
        today.getFullYear();
      let teamsRef = firebaseApp.database().ref("teams");
      const data = teamsRef.once("value", (snapshot) => {
        const dataSnapshot = snapshot.val();
        const teamLength = dataSnapshot.length;
        var urlLink = values.teamPic;
        if (urlLink.length === 0) {
          urlLink =
            "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png";
        }
        firebaseApp
          .database()
          .ref("teams")
          .child(teamLength)
          .set({
            campaigns_count: parseInt(values.campaignsCount, 10),
            created_at: date,
            description: values.teamDesc,
            id: teamLength + 1,
            image: urlLink,
            is_archived: false,
            is_favorited: false,
            leads_count: parseInt(values.leadsCount, 10),
            name: values.teamName,
          })
          .then(() => {
            setAlertShow(true);
            let teamsRef = firebaseApp.database().ref("teams");
            return teamsRef.once("value", (snapshot) => {
              const data = snapshot.val();
              dispatch(getTeams(data));
            });
          })
          .catch(alert);
        return dataSnapshot;
      });
    },
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New {props.navTab.slice(0, -1)}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                id="teamName"
                name="teamName"
                type="text"
                placeholder="Enter new team name"
                onChange={formik.handleChange}
                value={formik.values.teamName}
              />
            </Form.Group>
            {formik.errors.teamName ? (
              <div className="error">{formik.errors.teamName}</div>
            ) : null}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Team Image</Form.Label>
              <Form.Control
                id="teamPic"
                name="teamPic"
                type="text"
                placeholder="Insert url link of team image"
                onChange={formik.handleChange}
                value={formik.values.teamPic}
                // accept=".png,.jpg,.jpeg,.webp"
              />
              <Form.Text className="text-muted">
                Default team image will be used if left blank
              </Form.Text>
            </Form.Group>
            {formik.errors.teamPic ? (
              <div className="error">{formik.errors.teamPic}</div>
            ) : null}
          </Form>
          <Form.Group className="mb-3">
            <Form.Label>Team Description</Form.Label>
            <Form.Control
              id="teamDesc"
              name="teamDesc"
              type="text"
              placeholder="Enter new team description"
              onChange={formik.handleChange}
              value={formik.values.teamDesc}
            />
          </Form.Group>
          {formik.errors.teamDesc ? (
            <div className="error">{formik.errors.teamDesc}</div>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Campaign Count</Form.Label>
            <Form.Control
              id="campaignsCount"
              name="campaignsCount"
              type="text"
              placeholder="Enter number of campaigns"
              onChange={formik.handleChange}
              value={formik.values.campaignsCount}
            />
          </Form.Group>
          {formik.errors.campaignsCount ? (
            <div className="error">{formik.errors.campaignsCount}</div>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Leads Count</Form.Label>
            <Form.Control
              id="leadsCount"
              name="leadsCount"
              type="text"
              placeholder="Enter number of leads"
              onChange={formik.handleChange}
              value={formik.values.leadsCount}
            />
          </Form.Group>
          {formik.errors.leadsCount ? (
            <div className="error">{formik.errors.leadsCount}</div>
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {showAlert == true ? (
        <AlertDismissible
          show={showAlert}
          onHide={() => setAlertShow(false)}
          className="alert-div"
        />
      ) : null}
    </>
  );
}

export default CreateModal;
