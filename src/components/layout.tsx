import { Outlet } from "react-router-dom";

export default function Layout() {
    // Outlet 컴포넌트는 라우트 컴포넌트의 하위 라우트를 렌더링하는데 사용된다.
    return (
        <>
            <h2>layout</h2> {/* h2 layout으로 되있는 부분은 추후 navigation 으로 변경될 예정 */}
            <Outlet />
        </>
    )
}