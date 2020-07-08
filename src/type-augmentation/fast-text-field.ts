import { FASTTextField } from "@microsoft/fast-components";

/**
 * This file needs to exist to augment the existing typings from FASTTextField
 * See https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare module "@microsoft/fast-components" {
    interface FASTTextField extends React.Component<{} & React.InputHTMLAttributes<FASTTextField>> {}
}