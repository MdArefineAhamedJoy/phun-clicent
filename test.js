const adminPath2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "Dashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "Create Admin",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "Create Faculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "Create Student",
      },
    ],
  },
];

const creates = adminPath2.reduce((acc, item) => {
  if (item.element && item.path) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((item) => {
      return acc.push({
        path: item.path,
        element: item.element,
      });
    });
  }

  return acc;
}, []);

console.log(creates);
