import { FASTDesignSystemProvider } from "@microsoft/fast-components";

/**
 * This file needs to exist to augment the existing typings from FASTDesignSystemProvider
 * See https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare module "@microsoft/fast-components" {
    interface FASTDesignSystemProvider extends React.Component<{
        "use-defaults"?: boolean
    } & React.HTMLAttributes<HTMLElement>> {}
}