import { customElement, FASTElement, attr, html, css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { FASTCheckbox, FASTButton, neutralOutlineRestBehavior } from "@microsoft/fast-components";

/* eslint-disable */
FASTCheckbox;
FASTButton;
/* eslint-enable */

const template = html<TodoItem>`
    <fast-checkbox @change=${(x, c) => x.handleSelected(c.event)} :checked=${x => x.completed}></fast-checkbox>
    <p>
        ${x => x.content}
    </p>
    <fast-button appearance="stealth" @click=${(x, c) => x.handleRemoved(c.event)}>X</fast-button>
`;

const styles = css`
    ${display("flex")}
    :host {
        contain: content;
        align-items: center;
        border: 1px solid ${neutralOutlineRestBehavior.var};
        border-radius: calc(var(--corner-radius) * 1px);
        margin: calc(var(--design-unit) * 1px) 0;
    }

    p {
        flex-grow: 1;
        margin: 0;
    }

    fast-checkbox {
        margin-inline-end: calc(var(--design-unit) * 2px);
        margin-inline-start: calc(var(--design-unit) * 2px);
    }

    fast-button {
        margin-inline-start: calc(var(--design-unit) * 2px);
    }
    
    :host([completed]) {
        opacity: .5;
    }
`.withBehaviors(neutralOutlineRestBehavior)

@customElement({
    name: "todo-item",
    template,
    styles
})
export class TodoItem extends FASTElement {
    @attr
    public content: string = "";

    @attr
    public id: string = "";

    @attr({mode: "boolean"})
    public completed: boolean = false;

    public handleSelected(e: Event) {
        e.preventDefault();
        e.stopPropagation();

        this.$emit("completed")
    }

    public handleRemoved(e: Event) {
        e.preventDefault();
        e.stopPropagation();

        this.$emit("removed")
    }
}

/**
 * Note: The TodoItem needs to be declared as a React Component
 * to be used in JSX as <TodoItem />
 */
export interface TodoItem extends React.Component<{
    content: string;
    completed?: boolean;
    events?: {
        completed?: (e: CustomEvent) => void;
        removed?: (e: CustomEvent) => void;
    }
} & React.HTMLAttributes<TodoItem>> {}