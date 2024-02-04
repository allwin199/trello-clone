import { ClerkProvider } from "@clerk/nextjs";

type ChildernProps = {
    children: React.ReactNode;
};

const PlatformLayout = ({ children }: ChildernProps) => {
    return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
