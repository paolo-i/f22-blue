/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingsCreateFormInputValues = {
    Notification_Setting?: string;
    Profile_Setting?: string;
};
export declare type SettingsCreateFormValidationValues = {
    Notification_Setting?: ValidationFunction<string>;
    Profile_Setting?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsCreateFormOverridesProps = {
    SettingsCreateFormGrid?: FormProps<GridProps>;
    Notification_Setting?: FormProps<TextFieldProps>;
    Profile_Setting?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: SettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SettingsCreateFormInputValues) => SettingsCreateFormInputValues;
    onSuccess?: (fields: SettingsCreateFormInputValues) => void;
    onError?: (fields: SettingsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SettingsCreateFormInputValues) => SettingsCreateFormInputValues;
    onValidate?: SettingsCreateFormValidationValues;
}>;
export default function SettingsCreateForm(props: SettingsCreateFormProps): React.ReactElement;
