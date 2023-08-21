import { ReactNode } from "react";
type TList = {
    id: string;
    link: ReactNode;
    slug?: string;
    icon?: ReactNode;
    hasNotification?: boolean;
    child?: TList[];
    badge?: {
        state: "success" | "warning" | "danger" | "info";
        overrideClassName?: string;
        label: string;
    };
    onClick?: () => void;
};
type Props = {
    className?: string;
    lists: TList[];
};
export default function VerticalMenu({ lists, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
