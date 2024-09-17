import { Box } from "@mui/material";

const ConfirmationModal = ({ closeModal, confirmAction, title }) => {
  const handleYesClick = () => {
    confirmAction();
    closeModal();
  };

  const handleNoClick = () => {
    closeModal();
  };

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
      className="modal-overlay"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="modal-overlay"
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            padding: "16px 32px 24px",
            width: "400px",
            borderRadius: "25px",
          }}
          className="modal-content"
        >
          <div className="p-3">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {title}
            </p>{" "}
            <div className="modal-buttons mt-3">
              <button
                className="text-white"
                style={{
                  width: "50px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                  padding: "5px",
                }}
                onClick={handleNoClick}
              >
                No
              </button>
              <button
                className="text-white"
                style={{
                  width: "50px",
                  marginLeft: "10px",
                  backgroundColor: "grey",
                  borderRadius: "10px",
                  padding: "5px",
                }}
                onClick={handleYesClick}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ConfirmationModal;
