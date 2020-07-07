import { customElement, FASTElement, attr, html, css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { FASTCheckbox } from "@microsoft/fast-components";

/* eslint-disable */
FASTCheckbox;
/* eslint-enable */

const template = html<TodoItem>`
    <p>
        ${x => x.foo}
    </p>
`;

const styles = css`
    ${display("block")}
    :host {
        contain: content;
    }
`

@customElement({
    name: "todo-item",
    template,
    styles
})
export class TodoItem extends FASTElement {
    @attr
    public foo: string = "";
}