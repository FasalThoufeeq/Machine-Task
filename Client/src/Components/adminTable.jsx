import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { GetRequests, SolvedRequest } from "../reduxStore/adminSlice";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ConfirmationModal from "../Modal/confirmationModal";

export default function AdminTable() {
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reqId, setReqId] = useState();
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await dispatch(GetRequests());
      if (response?.payload?.status === 200) {
        setRequests(response?.payload?.data?.Requests);
      }
    };
    fetchRequests();
  }, [refresh]);
  const RequestSolved = async () => {
    const response = await dispatch(SolvedRequest(reqId));
    if (response?.payload?.status === 200) {
      setRefresh(!refresh);
    }
  };
  const openModal = (userId) => {
    setReqId(userId);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Box sx={{ margin: "50px" }}>
        <Typography variant="h4" component="div" gutterBottom align="center">
          MAINTENANCE REQUESTS
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ marginTop: "10px", marginBottom: "20px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>REQUESTER NAME</TableCell>
                <TableCell align="right">REQUESTER EMAIL</TableCell>
                <TableCell align="right">UNIT NUMBER</TableCell>
                <TableCell align="right">SERVICE TYPE</TableCell>
                <TableCell align="right">EXTRA DETAILS</TableCell>
                <TableCell align="right">SOLVED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests.map((request) => (
                <TableRow
                  key={request._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {request?.requesterName}
                  </TableCell>
                  <TableCell align="right">{request?.requesterEmail}</TableCell>
                  <TableCell align="right">{request?.unitNumber}</TableCell>
                  <TableCell align="right">{request?.serviceType}</TableCell>
                  <TableCell align="right">{request?.extraDetails}</TableCell>
                  <TableCell align="right">
                    {request?.solved ? (
                      <>
                        <Button style={{ color: "green", fontWeight: "bold" }}>
                          YES
                        </Button>
                        <TaskAltIcon
                          style={{ color: "green", fontWeight: "bold" }}
                        />
                      </>
                    ) : (
                      <>
                        <Button
                          style={{ backgroundColor: "blue", color: "white" }}
                          onClick={() => openModal(request?._id)}
                        >
                          SOLVED
                        </Button>
                        <Button style={{ color: "red", fontWeight: "bold" }}>
                          NO
                        </Button>
                        <CloseIcon
                          style={{ color: "red", fontWeight: "bold" }}
                        />
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {showModal && (
        <ConfirmationModal
          closeModal={closeModal}
          confirmAction={RequestSolved}
          title={
            <>
              <p className="dark:text-black text-sm font-bold text-navy-700">
                Warning!
              </p>
              <p className="dark:text-black text-sm font-bold text-navy-700">
                Are you sure, Maintenance finished?
              </p>
            </>
          }
        />
      )}
    </>
  );
}
