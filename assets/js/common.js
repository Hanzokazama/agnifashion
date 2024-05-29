let root = window.location.href.toLowerCase();
let webname = "agnifashion";
let env =[
  {
    environment: "production",
    url: webname + ".com",
    subfolderurl: "",
  },
  {
    environment: "uat",
    url: "surfersway.in/uat",
    subfolderurl: webname + "/app",
  },
  {
    environment: "testing",
    url: "surfersway.in/testing",
    subfolderurl: webname + "/app",
  },
  {
    environment: "development",
    url: "development.surfersway.in",
    subfolderurl: "app",
  },
  {
    environment: "local",
    url: "",
    subfolderurl: "",
  },
];
function getEnvUrl() {
  for (let e of env) {
    if (root.indexOf(e.url) >= 0) {
      return e;
    }
  }
}
function getSubFolder() {
  let subfolder = "/";
  if (
    root.indexOf(getEnvUrl().subfolderurl) >= 0 &&
    getEnvUrl().subfolderurl != ""
  ) {
    subfolder = "/" + getEnvUrl().subfolderurl + "/";
  }
  return subfolder;
}
function getBase(segment) {
  let url =
    window.location.origin + "/" + window.location.pathname.split("/")[1] + getSubFolder() + segment;
  return url;
}
