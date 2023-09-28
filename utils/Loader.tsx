import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { LoaderContext } from "../context/LoaderContext";
const Loader: React.FC = () => {
    const { isLoading } = useContext(LoaderContext);
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 items-center justify-center z-[9999] ${isLoading ? 'flex' : 'hidden'}`}
            style={{ background: "rgba(0,0,0,.8)" }}>
            <ClipLoader color={"#007FBB"} loading={isLoading} size={100} className="border-[4px]"/>
        </div>
    );
};
export default Loader;