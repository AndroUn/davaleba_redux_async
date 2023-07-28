import CreatePage from "../pages/CreatePage";
import LinkLayout from "../layout/LinkLayot";
import MainPage from "../pages/MainPage";
import DoneTaskPage from "../pages/doneTaskPage";

const routes = [
    {
        element: <LinkLayout />,
        path: "/",
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                element: <CreatePage />,
                path: '/create',
            },
            {
                element: <DoneTaskPage />,
                path: '/done',
            }
        ]}
]

export default routes