import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { adminPath } from "../../route/admin.routes";
import { facultyPath } from "../../route/faculty.routes";
import { studentPaths } from "../../route/student.routes";
import { sidebarItemGenerators } from "../../utils/sidebarItemGenerators";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;

  switch (user!.role.toLocaleLowerCase()) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerators(adminPath, user!.role.toLocaleLowerCase());
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerators(facultyPath, user!.role.toLocaleLowerCase());
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerators(studentPaths, user!.role.toLocaleLowerCase());
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: "50px",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1>Ph University </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
