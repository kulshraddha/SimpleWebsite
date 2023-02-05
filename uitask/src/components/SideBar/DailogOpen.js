import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Context from "../BodyDetails/Context"
import SideBar from "./SideBar";
const AddEditUser = () => {
    const { open,handleDrawerClose } = useContext(Context);
    return (
        <Dialog open={open}onClose={handleDrawerClose} >
            <DialogContent>
                <SideBar />
            </DialogContent>
        </Dialog>
    );
};

export default AddEditUser;