import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useSelector } from "react-redux";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#171717",
  boxShadow: 24,
  borderRadius: "5px",
};

const UploadModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState<any>(undefined);
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);

  const formData = new FormData();
  formData.append("file", image);

  const handleUpdateImage = () => {
    axios
      .patch(
        `${process.env.REACT_APP_LOCALHOST}users/create/image/${CurrentUser.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="p-5">
        <button
          onClick={handleOpen}
          className="p-4 font-[poppins] text-white bg-gray-700 bg-opacity-40 rounded-md w-[250px]"
        >
          UPLOAD IMAGE
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex justify-center p-5">
              <span className="text-slate-400 font-['poppins']">
                Upload Your Image
              </span>
            </div>
            <hr className="border-white mb-5" />
            <div className="p-5 flex justify-center">
              {CurrentUser.image === null ? (
                <img
                  className="w-[250px] h-[250px] bg-slate-700 rounded-full object-cover flex items-center justify-center"
                  src="https://img.freepik.com/free-icon/user_318-552176.jpg"
                />
              ) : (
                <img
                  className="w-[250px] h-[250px] rounded-full object-cover flex items-center justify-center"
                  src={`${process.env.REACT_APP_LOCALHOST}users/${CurrentUser?.image}`}
                />
              )}
            </div>
            <div className="p-5 mb-5">
              <div className="text-slate-500 font-[poppins]">
                Choose File
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    type="file"
                    onChange={(e: any) => setImage(e.target.files[0])}
                  />
                  <PhotoCamera />
                </IconButton>
              </div>
              <div className="font-[poppins] text-white">{image?.name}</div>
            </div>
            <button className="p-5 bg-rose-600 flex justify-center w-full hover:bg-rose-900 duration-300">
              <span className="font-[poppins]">Upload</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadModal;

/**  <div className="p-5 flex items-center">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          
        >
          <input
            hidden
            type="file"
            onChange={(e: any) => setImage(e.target.files[0])}
          />
          <PhotoCamera />
        </IconButton>
        <span className="text-white font-[poppins]">
          Upload Your Profile Image
        </span>
      </div> */
