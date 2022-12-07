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
export declare type NotificationCreateFormInputValues = {
    blockchain?: string;
    contract_address?: string;
    file?: string;
    image_url?: string;
    marketplace?: string;
    user?: string;
};
export declare type NotificationCreateFormValidationValues = {
    blockchain?: ValidationFunction<string>;
    contract_address?: ValidationFunction<string>;
    file?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    marketplace?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationCreateFormOverridesProps = {
    NotificationCreateFormGrid?: FormProps<GridProps>;
    blockchain?: FormProps<TextFieldProps>;
    contract_address?: FormProps<TextFieldProps>;
    file?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
    marketplace?: FormProps<TextFieldProps>;
    user?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationCreateFormInputValues) => NotificationCreateFormInputValues;
    onSuccess?: (fields: NotificationCreateFormInputValues) => void;
    onError?: (fields: NotificationCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NotificationCreateFormInputValues) => NotificationCreateFormInputValues;
    onValidate?: NotificationCreateFormValidationValues;
}>;
export default function NotificationCreateForm(props: NotificationCreateFormProps): React.ReactElement;
