export const isAuthenticated = (user: any) => {
  console.log(!!user?.access_token, "isAuthenticated")
  return user ? !!user?.access_token : true;
};
