import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Search from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "#171717",
  boxShadow: 24,
  overflow: "scroll",
};

const SearchModel = () => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.Music);

  const filterSongs = songs.filter((item) =>
    item.song.toLowerCase().includes(search)
  );

  return (
    <div>
      <div
        onClick={handleOpen}
        className="p-3 rounded-full bg-rose-600 w-[300px] flex justify-between hover:bg-rose-900 duration-300 cursor-pointer
            "
      >
        <span className="text-white font-[poppins]">Search.....</span>
        <Search />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="p-3 flex justify-between items-center">
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search...."
                className="font-['Press_Start_2P'] w-full p-5 focus:outline-none bg-inherit text-white"
              />
              <div className="p-3 rounded-full bg-rose-600">
                <Search />
              </div>
            </div>
            <hr className="border-rose-600" />
            <div className="p-5">
              {search === "" || filterSongs.length < 1 ? (
                <div className=" w-full h-[300px] flex justify-center items-center">
                  <span className="text-white font-['Press_Start_2P']">
                    No Resualts
                  </span>
                </div>
              ) : (
                filterSongs.map((i) => (
                  <div className="flex items-center rounded-md gap-3 hover:bg-rose-600 duration-300 p-3">
                    <img
                      className="lg:w-[60px] lg:h-[60px] rounded-md object-cover"
                      src={i?.image}
                    />
                    <span className="text-white font-['poppins']">
                      {i?.song}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModel;
