import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ResidentNav from "../Components/residentNav";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { MaintenanceRequest } from "../reduxStore/residentSlice";

const ResidentDashboard = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      requesterName: "",
      requesterEmail: "",
      unitNumber: "",
      serviceType: "",
      extraDetails: "",
    },
    validationSchema: Yup.object({
      requesterName: Yup.string().required("Required"),
      requesterEmail: Yup.string().email("Invalid email").required("Required"),
      unitNumber: Yup.string().required("Required"),
      serviceType: Yup.string().required("Required"),
      extraDetails: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await dispatch(MaintenanceRequest(values));
        if (response.payload.status === 200) {
          toast.success(response.payload.data.msg);
        } else {
          toast.error(response.payload.data.msg);
        }
      } catch (error) {
        toast.error("Something went wrong to Send Maintenance Request");
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <ResidentNav />
      <Box sx={{ margin: "50px" }}>
        <Typography variant="h4" component="div" gutterBottom align="center">
          CREATE MAINTENANCE REQUEST
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              mt: 2,
            }}
          >
            <TextField
              label="Name"
              id="requesterName"
              name="requesterName"
              type="text"
              sx={{ m: 1, width: "40ch" }}
              error={
                formik.touched.requesterName &&
                Boolean(formik.errors.requesterName)
              }
              helperText={
                formik.touched.requesterName && formik.errors.requesterName
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextField
              label="Email"
              id="requesterEmail"
              type="email"
              name="requesterEmail"
              sx={{ m: 1, width: "40ch" }}
              error={
                formik.touched.requesterEmail &&
                Boolean(formik.errors.requesterEmail)
              }
              helperText={
                formik.touched.requesterEmail && formik.errors.requesterEmail
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              mt: 2,
            }}
          >
            <TextField
              label="Unit Number"
              id="unitNumber"
              name="unitNumber"
              type="text"
              sx={{ m: 1, width: "40ch" }}
              error={
                formik.touched.unitNumber && Boolean(formik.errors.unitNumber)
              }
              helperText={formik.touched.unitNumber && formik.errors.unitNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextField
              label="Service Type"
              id="serviceType"
              name="serviceType"
              type="text"
              sx={{ m: 1, width: "40ch" }}
              error={
                formik.touched.serviceType && Boolean(formik.errors.serviceType)
              }
              helperText={
                formik.touched.serviceType && formik.errors.serviceType
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <TextField
              label="Extra Details"
              id="extraDetails"
              name="extraDetails"
              type="text"
              sx={{
                m: 1,
                width: {
                  xs: "40ch",
                  sm: "82ch",
                },
              }}
              error={
                formik.touched.extraDetails &&
                Boolean(formik.errors.extraDetails)
              }
              helperText={
                formik.touched.extraDetails && formik.errors.extraDetails
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Button
              sx={{
                m: 1,
                width: {
                  xs: "40ch",
                  sm: "82ch",
                },
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              CREATE
            </Button>
          </Container>
        </form>
      </Box>
      <ToastContainer />
    </>
  );
};

export default ResidentDashboard;
