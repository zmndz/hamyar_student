
export default async function({ store, redirect, route}) {

  let path = route.path;
  // let u  rType = localStorage.getItem("userType");
  // // let student = JSON.parse(localStorage.getItem('student'));
  // // let isStudentLoggedIn = student ? student.token : null;
  let registerLogin = localStorage.getItem("registerVerificationToken");
  let isUserLoggedInByRegister = (registerLogin) ? true : null;

  let Login = localStorage.getItem("loginVerificationToken");
  let isUserLoggedIn = (Login) ? true : false;

  if (path.startsWith('/user') && (!isUserLoggedInByRegister && !isUserLoggedIn)) {
    return redirect("/");
  }

  if (path == '/' && (isUserLoggedInByRegister || isUserLoggedIn)) {
    return redirect("/user");
  }

  
  // if (path.startsWith('/user') && !isUserLoggedIn) {
  //   return redirect("/");
  // }

  // if (path == "/" && (userType == 'admin') && isAdminLoggedIn) {
  //   return redirect("/manager");
  // } else if ((path.startsWith('/manager') && !isAdminLoggedIn)) {
  //   return redirect("/admin");
  // } else if ((path == '/admin' && isAdminLoggedIn)) {
  //   return redirect("/manager");
  // } else if ((path.startsWith('/student') && (userType == 'admin') && !isStudentLoggedIn)) {
  //   return redirect("/manager");
  // } else if ((path.startsWith('/student') && (userType == null))) {
  //   return redirect("/");
  // } else if ((path.startsWith('/student') && (userType == 'admin') && isAdminLoggedIn)) {
  //   return redirect("/");
  // }

}
