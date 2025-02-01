import axios from "axios";

const refreshAccessToken = async () => {
    const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/refresh-access-token`;
    const token = localStorage.getItem("accessToken");
    console.log(`inside users refreshaccesstoken`);
    if (!token) {
        console.error("Access token not found");
        return;
    }

    try {
        const response = await axios.get(
            BACKEND_URL,
            { withCredentials: true }
        );
        console.log("response tokenn", response.data.data.accessToken);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        console.log("Access token refreshed successfully");
        return response.data.data.accessToken;
    } catch (error) {
        console.error("Error refreshing access token:", error);
    }
};


export default refreshAccessToken;