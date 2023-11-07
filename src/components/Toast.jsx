import { toast } from "react-toastify";

const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const toaster = {
  success: (msg) => {
    toast.success(msg, options);
  },
  error: (msg) => {
    toast.error(msg, options);
  },
  warning: (msg) => {
    toast.warning(msg, options);
  },
  info: (msg) => {
    toast.info(msg, options);
  },
};

export default toaster;
