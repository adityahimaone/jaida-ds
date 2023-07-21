import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = "md", backgroundColor, label, ...props }) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (_jsx("button", { type: "button", className: [
            "storybook-button bg-blue-500 px-4 py-1 rounded-md",
            `text-${size}`,
            mode,
        ].join(" "), style: { backgroundColor }, ...props, children: label }));
};
