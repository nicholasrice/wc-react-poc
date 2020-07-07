declare namespace JSX {
    interface IntrinsicElements {
        "todo-item": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            content: string;
            id: string;
            completed: boolean;
            events?: {
                completed?: (e: CustomEvent) => void,
                removed?: (e: CustomEvent) => void
            }
        };

        "fast-design-system-provider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            "use-defaults"?: boolean;
        };

        "fast-text-field": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            name?: string;
        };

        "fast-button": React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        };
    }
}

declare module '@skatejs/val';