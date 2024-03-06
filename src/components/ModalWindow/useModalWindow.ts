import { useContext } from "react";
import { ModalWindowContext } from "./ModalWindowContext";

export const useModalWindow = () => useContext(ModalWindowContext);
