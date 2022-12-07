/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Settings } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingsUpdateFormInputValues = {
    Notification_Setting?: string;
    Profile_Setting?: string;
};
export declare type SettingsUpdateFormValidationValues = {
    Notification_Setting?: ValidationFunction<string>;
    Profile_Setting?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsUpdateFormOverridesProps = {
    SettingsUpdateFormGrid?: FormProps<GridProps>;
    Notification_Setting?: FormProps<TextFieldProps>;
    Profile_Setting?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    settings?: Settings;
    onSubmit?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onSuccess?: (fields: SettingsUpdateFormInputValues) => void;
    onError?: (fields: SettingsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onValidate?: SettingsUpdateFormValidationValues;
}>;
export default function SettingsUpdateForm(props: SettingsUpdateFormProps): React.ReactElement;
