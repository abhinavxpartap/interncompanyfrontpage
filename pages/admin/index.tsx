import React from "react";
import PrivateLayout from "../../components/Layout/privateLayout";

const Admin: React.FC = () => {
    return<>
    <PrivateLayout title="Zuca - Admin">
        <div className="flex items-center justify-center text-center h-full">
            <div className="font-medium tracking-[1px] text-[25px]">
                Welcome To <span className="text-primary">Zuca</span> Admin Panel
            </div>
        </div>
    </PrivateLayout>
    </>
}

export default Admin;