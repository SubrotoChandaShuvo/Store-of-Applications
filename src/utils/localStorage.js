
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
    if (isDuplicate) return alert("already added");
    const updateInstallList = [...installed, app];
    localStorage.setItem("installed", JSON.stringify(updateInstallList));
  } catch (err) {
    console.log(err);
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
