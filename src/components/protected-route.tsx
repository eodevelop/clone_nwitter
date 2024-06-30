import {Navigate} from "react-router-dom";
import {auth} from "../firebase";

// ProtectedRoute 컴포넌트는 사용자가 로그인하지 않은 경우 로그인 페이지로 리다이렉트한다.
export default function ProtectedRoute({
   children,
}: {
children: React.ReactNode;
}) {
    const user = auth.currentUser;
    if (user === null) {
        return <Navigate to="/login" />;
    }

    return children;
}