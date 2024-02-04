type ChildernProps = {
    children: React.ReactNode;
};

const ClerkLayout = ({ children }: ChildernProps) => {
    return (
        <div className="h-full flex items-center justify-center bg-slate-200">
            {children}
        </div>
    );
};

export default ClerkLayout;
