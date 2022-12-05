/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Artwork } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArtworkUpdateFormInputValues = {
    Art_name?: string;
    Art_address?: string;
    Whitelist_art?: boolean;
    User_ID?: string;
    token_ID?: string;
};
export declare type ArtworkUpdateFormValidationValues = {
    Art_name?: ValidationFunction<string>;
    Art_address?: ValidationFunction<string>;
    Whitelist_art?: ValidationFunction<boolean>;
    User_ID?: ValidationFunction<string>;
    token_ID?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtworkUpdateFormOverridesProps = {
    ArtworkUpdateFormGrid?: FormProps<GridProps>;
    Art_name?: FormProps<TextFieldProps>;
    Art_address?: FormProps<TextFieldProps>;
    Whitelist_art?: FormProps<SwitchFieldProps>;
    User_ID?: FormProps<TextFieldProps>;
    token_ID?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArtworkUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArtworkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    artwork?: Artwork;
    onSubmit?: (fields: ArtworkUpdateFormInputValues) => ArtworkUpdateFormInputValues;
    onSuccess?: (fields: ArtworkUpdateFormInputValues) => void;
    onError?: (fields: ArtworkUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ArtworkUpdateFormInputValues) => ArtworkUpdateFormInputValues;
    onValidate?: ArtworkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArtworkUpdateForm(props: ArtworkUpdateFormProps): React.ReactElement;
