import Navbar from "./_components/navbar";

type ChildernProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: ChildernProps) => {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;
