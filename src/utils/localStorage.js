import { toast } from "react-toastify";

// get item
export const loadInstalled = () => {
  try {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

//set item
export const updateList = (app) => {
  
  const installed = loadInstalled();

  try {
    const isDuplicate = installed.some((a) => a.id === app.id);
    // if (isDuplicate) return alert("already added");
    
    if (isDuplicate){
        return toast.error("App is already installed!");
    }
    
    const updateInstallList = [...installed, app];
    toast.success("App Installed Successfully!");
    localStorage.setItem("installed", JSON.stringify(updateInstallList));
  } catch (err) {
    console.log(err);
    toast.error("Failed to install app");
    return false;
  }
};

//uninstall item
export const uninstall = (id) => {
  const installed = loadInstalled();

  try {
    const updateInstallList = installed.filter((a) => a.id !== id);
    localStorage.setItem("installed", JSON.stringify(updateInstallList));
  } catch (err) {
    console.log(err);
  }
};
