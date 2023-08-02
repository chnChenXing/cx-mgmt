const mockMenu: {
  id: number;
  path: string;
  needAuth?: boolean;
  authRoles?: string;
}[] = [
  {
    id: 1,
    path: "/dashbord",
    needAuth: true,
    authRoles: "1111111",
  },
];
export const getMenu = () => {
  return new Promise<{}[]>((resolve) => {
    resolve(mockMenu);
  });
};
