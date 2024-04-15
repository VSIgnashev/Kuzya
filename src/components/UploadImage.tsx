import { Button } from "@mui/material";
import React, { useId, useRef, useState } from "react";

import { UploadFile } from "@mui/icons-material";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  getImage,
  handleUploadImage,
  removeImage,
} from "../store/uploadImageSlice";
import useAppSelector from "../hooks/useAppSelector";
import "./../utilities/uploadImageSt.scss";
import { BASE_URL } from "../api/axios";

const DOWNLOAD_IMAGE_URL = "/files";

function UploadImage() {
  const dispatch = useAppDispatch();
  const { imagePreview } = useAppSelector((state) => state.uploadImage);

  const id = useId();

  const [ani, setAni] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target?.files?.[0]) {
      dispatch(getImage(e.target.files[0]));
    }
  };

  return (
    <>
      <div className="mt-[50px]">
        UploadImage
        <label id={id}>
          <input
            ref={ref}
            type="file"
            name=""
            id={id}
            onChange={handleChange}
            accept="image/*"
          />
        </label>
        <div className="w-[200px] h-[150px]">
          <img
            src={
              imagePreview ? imagePreview : "./src/assets/placeholder-image.jpg"
            }
            alt=""
          />
        </div>
        <Button onClick={() => dispatch(removeImage())}>delete</Button>
        <Button onClick={handleUploadImage}> Upload</Button>
        <UploadFile
          className={
            ani
              ? "opacity-0 transition-opacity"
              : "opacity-80 transition-opacity"
          }
        />
        <div className="">asssdsds</div>
        <img
          // className={ani ? "first-icon-visible" : "first-icon-invisible"}
          src={BASE_URL + DOWNLOAD_IMAGE_URL + "/1"}
        />
        <Button onClick={() => setAni(!ani)}> Puj</Button>
        {/* <div
            className={
              ani
                ? "w-5 h-5 bg-slate-500 opacity-0 transition-all"
                : "w-10 h-10 bg-red-500 opacity-100  transition-all"
            }
          ></div> */}
        <div
        // className={
        //   (ani
        //     ? " opacity-20  transition duration-1000"
        //     : " opacity-100 transition duration-1000") + " h-48 bg-black"
        // }
        >
          <UploadFile
            sx={
              ani
                ? { opacity: 20, transitionDuration: 1000 }
                : { opacity: 90, transitionDuration: 1000 }
            }
            className={
              ani
                ? " opacity-20  transition duration-1000"
                : " opacity-100 transition duration-1000"
            }
          />
        </div>
        {/* <div className="absolute">
            <div
              className={
                (ani
                  ? " opacity-0 transition duration-500"
                  : " opacity-100 transition duration-500") + " absolute "
              }
            >
              <UploadFile />
            </div>
            <div
              className={
                (ani
                  ? "opacity-100 transition duration-500 "
                  : " opacity-0 transition duration-5 00 ") + "absolute"
              }
            >
              <DownloadDone />
            </div>
            <Button onClick={() => dispatch(handleUploadImage())}>aaaa</Button>
          </div> */}
        <div className="h-40 w-40 bg-slate-500 relative">
          <div></div>
          <UploadFile
            className={ani ? "first-icon-visible" : "first-icon-invisible"}
          />
          <img
            // className={ani ? "first-icon-visible" : "first-icon-invisible"}
            src="./src/assets/file_download_done_black_24dp.svg"
          />
        </div>
      </div>
      <img
        // className={ani ? "first-icon-visible" : "first-icon-invisible"}
        src="./src/assets/file_download_done_black_24dp.svg"
      />

      <div className="h-[200px] w-[300px] bg-gray-500 mt-10 relative">
        <img
          className={ani ? "first-icon-visible" : "first-icon-invisible"}
          src="./src/assets/file_download_done_black_24dp.svg"
        />
      </div>
      <Button onClick={() => setAni(!ani)}>Change</Button>
    </>
  );
}

export default UploadImage;
