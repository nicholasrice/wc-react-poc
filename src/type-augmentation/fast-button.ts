import { FASTButton } from "@microsoft/fast-components";

/**
 * This file needs to exist to augment the existing typings from FASTButton
 * See https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare module "@microsoft/fast-components" {
    interface FASTButton extends React.Component<{
        type?: string;
        appearance?: string;
    } & React.HTMLAttributes<FASTButton>> {}
}