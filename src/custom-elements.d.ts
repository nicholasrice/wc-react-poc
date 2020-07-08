declare namespace JSX {
    /**
     * In order for custom elements to be written as HTML elements (not React components) in TypeScript,
     * the element name along with the attributes, properties, and events it supports will need to be
     * captured in the IntrinsicElements interface.
     * 
     * Note that this example does not leverage the tags themselves, instead using the constructor as JSX. See
     * "src/type-augmentation/*.ts" for details on that implementation
     */
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

/**
 * Satisfy TypeScript  importing modules without typings
 */
declare module '@skatejs/val';
declare module 'pretty';
declare module 'uuid';