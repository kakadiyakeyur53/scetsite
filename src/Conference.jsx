import React from "react";
import {
  Button,
  Alert,
  TextField,
  CssBaseline,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import { IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://scet.ac.in/">
        Scet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 3,
  },
}));

export default function Conference() {
  const classes = useStyles();

  const [FacultyName, setFacultyName] = React.useState("");
  const [FacultyDesignation, setFacultyDesignation] = React.useState("");
  const [TypeOfArticle, setTypeOfArticle] = React.useState("");
  const [Title, setTitle] = React.useState("");
  const [CoAuthors, setCoAuthors] = React.useState("");
  const [StatusOfArticle, setStatusOfArticle] = React.useState("");
  const [PublishedIn, setPublishedIn] = React.useState("");
  const [LevelOfArticle, setLevelOfArticle] = React.useState("");
  const [IndexedAt, setIndexedAt] = React.useState("");
  const [ISBN, setISBN] = React.useState("");
  const [ImpactFactor, setImpactFactor] = React.useState("");
  const [PublicationDate, setPublicationDate] = React.useState(new Date());
  const [ConferenceName, setConferenceName] = React.useState("");
  const [ResearchPaper, setResearchPaper] = React.useState("");
  const [Certificate, setCertificate] = React.useState("");
  const [Outcomes, setOutcomes] = React.useState("");
  const [Remarks, setRemarks] = React.useState("");

  const [alertmsg, setAlertmsg] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, [alert, success]);

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (
      FacultyName === "" ||
      FacultyDesignation === "" ||
      TypeOfArticle === "" ||
      Title === "" ||
      CoAuthors === "" ||
      StatusOfArticle === "" ||
      PublishedIn === "" ||
      LevelOfArticle === "" ||
      IndexedAt === "" ||
      ISBN === "" ||
      ImpactFactor === "" ||
      ConferenceName === "" ||
      ResearchPaper === "" ||
      Certificate === "" ||
      Outcomes === "" ||
      Remarks === ""
    ) {
      setAlert(true);
      setAlertmsg("Fill required details.");
      return;
    } else if (isNaN(ISBN)) {
      setAlert(true);
      setAlertmsg("Enter faculty participants number in Integer");
      return;
    }

    let formData = {
      FacultyName: FacultyName,
      FacultyDesignation: FacultyDesignation,
      TypeOfArticle: TypeOfArticle,
      Title: Title,
      CoAuthors: CoAuthors,
      StatusOfArticle: StatusOfArticle,
      PublishedIn: PublishedIn,
      LevelOfArticle: LevelOfArticle,
      IndexedAt: IndexedAt,
      ISBN: ISBN,
      ImpactFactor: ImpactFactor,
      PublicationDate: PublicationDate,
      ConferenceName: ConferenceName,
      ResearchPaper: ResearchPaper,
      Certificate: Certificate,
      Certificate: Certificate,
      Outcomes: Outcomes,
      Remarks: Remarks,
    };

    try {
      // form submission request is done here
    } catch {
      setAlert(true);
      setAlertmsg("Oops! Something went wrong.");
    }
    console.log(formData);
  }

  console.log(Certificate);

  const faculty = [
    "prof. (Dr.) Keyur Rana",
    "prof. (Dr.) Pariza Kamboj",
    "prof. (Dr.) Mayuri Mehta",
    "prof. Dipali Kasat",
    "prof. Snehal Gandhi",
    "prof. Bintu Kadhiwala",
    "prof. Urmi Desai",
    "prof. Bhumika Shah",
    "prof. Jaydeep Gheewala",
    "prof. Jayesh Chaudhari",
    "prof. Rakesh Patel",
    "prof. Dhatri Pandya",
    "prof. Bhavesh Patel",
    "prof. Purvi Rekh",
    "prof. Vasundhara Uchhala",
    "prof. Jaydeep Barad",
    "prof. Fagun Vankawala",
    "prof. (Dr.) Nirali Nanavati",
    "prof. Vandana Joshi",
    "Ms. Urvashi Mistry",
    "Ms. Karuna Patel",
    "Ms. Mitisha Patel"
  ];

  const faculty_dasignation = ["Professor", "Associate Professor", "Assistant Professor","Adhoc Assistant Professor","Lab Assistant","Adhoc Lab Assistant"];

  const type_of_article = [
    "Reasearch Paper",
    "Book Chapter",
    "Web Blog",
    "Book Chapter Review",
  ];

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div
        style={{ position: "fixed", top: "10px", zIndex: 10, width: "20rem" }}
      >
        {alert && <Alert severity="error">{alertmsg}</Alert>}
        {success && <Alert severity="success">{alertmsg}</Alert>}
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Conference Attended by Staff/ Paper Publication Details Entry Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="faculty-label">
                    Name of The Faculty Member
                  </InputLabel>
                  <Select
                    labelId="faculty-label"
                    id="faculty"
                    value={FacultyName}
                    label="Name of The Faculty Member"
                    onChange={(event) => {
                      setFacultyName(event.target.value);
                    }}
                  >
                    {faculty.map((val) => {
                      return <MenuItem value={val}>{val}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="faculty-designation-label">
                    Designation of the Faculty Member
                  </InputLabel>
                  <Select
                    labelId="faculty-designation-label"
                    id="faculty-designation"
                    value={FacultyDesignation}
                    label="Designation of the Faculty Member"
                    onChange={(event) => {
                      setFacultyDesignation(event.target.value);
                    }}
                  >
                    {faculty_dasignation.map((val) => {
                      return <MenuItem value={val}>{val}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="type-of-Article-label">
                    Type of the Article
                  </InputLabel>
                  <Select
                    labelId="type-of-Article-label"
                    id="type-of-Article"
                    value={TypeOfArticle}
                    label="Type of the Article"
                    onChange={(event) => {
                      setTypeOfArticle(event.target.value);
                    }}
                  >
                    {type_of_article.map((val) => {
                      return <MenuItem value={val}>{val}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Title of the Article"
                name="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CoAuthors"
                label="Name of Co-Authors"
                name="CoAuthors"
                onChange={(e) => setCoAuthors(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="Status-of-Article-label">
                    Status of Article
                  </InputLabel>
                  <Select
                    labelId="Status-of-Article-label"
                    id="Status-of-Article"
                    value={StatusOfArticle}
                    label="Status of the Article"
                    onChange={(event) => {
                      setStatusOfArticle(event.target.value);
                    }}
                  >
                    <MenuItem value="Published">Published</MenuItem>
                    <MenuItem value="Presented">Presented</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="Article-Published-In-label">
                    Published In
                  </InputLabel>
                  <Select
                    labelId="Article-Published-In-label"
                    id="Article-Published-In"
                    value={PublishedIn}
                    label="Published In"
                    onChange={(event) => {
                      setPublishedIn(event.target.value);
                    }}
                  >
                    <MenuItem value="Conference">Conference</MenuItem>
                    <MenuItem value="Journal">Journal</MenuItem>
                    <MenuItem value="Symposium">Symposium</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <FormControl fullWidth required>
                  <InputLabel id="Level-of-Article-label">
                    Level of an Article
                  </InputLabel>
                  <Select
                    labelId="Level-of-Article-label"
                    id="Level-of-Article"
                    value={LevelOfArticle}
                    label="Level of an Article"
                    onChange={(event) => {
                      setLevelOfArticle(event.target.value);
                    }}
                  >
                    <MenuItem value="Published">National</MenuItem>
                    <MenuItem value="Presented">International</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="IndexedAt"
                label="Indexed at"
                id="IndexedAt"
                onChange={(e) => setIndexedAt(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ISBN"
                label="ISBN Number"
                id="ISBN"
                onChange={(e) => setISBN(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ImpactFactor"
                label="Impact Factor"
                id="ImpactFactor"
                onChange={(e) => setImpactFactor(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of Publication"
                  fullWidth
                  value={PublicationDate}
                  minDate={new Date("2017-01-01")}
                  onChange={(newValue) => {
                    setPublicationDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ConferenceName"
                label="Name of Conference/Journal"
                name="ConferenceName"
                onChange={(e) => setConferenceName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <input
                accept=".pdf"
                style={{ display: "none" }}
                id="ResearchPaper"
                onChange={(e) => {
                  setResearchPaper(e.target.files[0]);
                }}
                type="file"
              />
              <InputLabel
                htmlFor="ResearchPaper"
                style={{
                  height: "55px",
                  border: "solid",
                  borderColor: "rgb(179 175 175 / 60%)",
                  borderRadius: "4px",
                  borderWidth: "thin",
                }}
              >
                <IconButton
                  color="primary"
                  component="span"
                  style={{ marginTop: "7px" }}
                >
                  <UploadIcon />
                  <span style={{ fontSize: "16px", marginLeft: "10px" }}>
                    Attach Research Paper
                  </span>
                </IconButton>
              </InputLabel>
              <p
                style={{
                  color: "red",
                  marginTop: "0px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Files Should in .pdf format
              </p>
            </Grid>

            <Grid item xs={12}>
              <input
                accept="image/*,.pdf"
                style={{ display: "none" }}
                id="Certificate"
                onChange={(e) => {
                  setCertificate(e.target.files[0]);
                }}
                type="file"
              />
              <InputLabel
                htmlFor="Certificate"
                style={{
                  height: "55px",
                  border: "solid",
                  borderColor: "rgb(179 175 175 / 60%)",
                  borderRadius: "4px",
                  borderWidth: "thin",
                }}
              >
                <IconButton
                  color="primary"
                  component="span"
                  style={{ marginTop: "7px" }}
                >
                  <UploadIcon />
                  <span style={{ fontSize: "16px", marginLeft: "10px" }}>
                    Attach Certificate
                  </span>
                </IconButton>
              </InputLabel>
              <p
                style={{
                  color: "red",
                  marginTop: "0px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Files Should in .jpg/.jpeg/.pdf format
              </p>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline
                maxRows={5}
                required
                fullWidth
                id="Outcomes"
                label="Outcome of the Event"
                name="Outcomes"
                onChange={(e) => setOutcomes(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline
                maxRows={5}
                required
                fullWidth
                id="Remarks"
                label="Other Important Remarks"
                name="Remarks"
                onChange={(e) => setRemarks(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            onClick={(e) => onSubmitHandler(e)}
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/signup" variant="body2">
                Any query than contact
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
