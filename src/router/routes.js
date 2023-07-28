import CreatePage from "../pages/CreatePage";
import LinkLayout from "../layout/LinkLayot";
import MainPage from "../pages/MainPage";

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
            }
        ]}
]

export default routes