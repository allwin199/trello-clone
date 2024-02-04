import OrgControl from "./_components/org-control";

type ChildernProps = {
    children: React.ReactNode;
};

const OrganizationIdLayout = ({ children }: ChildernProps) => {
    return (
        <>
            <OrgControl />
            {children}
        </>
    );
};

export default OrganizationIdLayout;
