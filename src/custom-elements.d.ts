declare namespace JSX {
    interface IntrinsicElements {
        "todo-item": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            foo: string;
        };

        "fast-design-system-provider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            "use-defaults"?: boolean;
        }
    }
}
