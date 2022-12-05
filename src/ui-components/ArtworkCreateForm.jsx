/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Artwork } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ArtworkCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Art_name: undefined,
    Art_address: undefined,
    Whitelist_art: false,
    User_ID: undefined,
    token_ID: undefined,
  };
  const [Art_name, setArt_name] = React.useState(initialValues.Art_name);
  const [Art_address, setArt_address] = React.useState(
    initialValues.Art_address
  );
  const [Whitelist_art, setWhitelist_art] = React.useState(
    initialValues.Whitelist_art
  );
  const [User_ID, setUser_ID] = React.useState(initialValues.User_ID);
  const [token_ID, setToken_ID] = React.useState(initialValues.token_ID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setArt_name(initialValues.Art_name);
    setArt_address(initialValues.Art_address);
    setWhitelist_art(initialValues.Whitelist_art);
    setUser_ID(initialValues.User_ID);
    setToken_ID(initialValues.token_ID);
    setErrors({});
  };
  const validations = {
    Art_name: [],
    Art_address: [],
    Whitelist_art: [],
    User_ID: [],
    token_ID: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Art_name,
          Art_address,
          Whitelist_art,
          User_ID,
          token_ID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Artwork(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ArtworkCreateForm")}
    >
      <TextField
        label="Art name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Art_name: value,
              Art_address,
              Whitelist_art,
              User_ID,
              token_ID,
            };
            const result = onChange(modelFields);
            value = result?.Art_name ?? value;
          }
          if (errors.Art_name?.hasError) {
            runValidationTasks("Art_name", value);
          }
          setArt_name(value);
        }}
        onBlur={() => runValidationTasks("Art_name", Art_name)}
        errorMessage={errors.Art_name?.errorMessage}
        hasError={errors.Art_name?.hasError}
        {...getOverrideProps(overrides, "Art_name")}
      ></TextField>
      <TextField
        label="Art address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Art_name,
              Art_address: value,
              Whitelist_art,
              User_ID,
              token_ID,
            };
            const result = onChange(modelFields);
            value = result?.Art_address ?? value;
          }
          if (errors.Art_address?.hasError) {
            runValidationTasks("Art_address", value);
          }
          setArt_address(value);
        }}
        onBlur={() => runValidationTasks("Art_address", Art_address)}
        errorMessage={errors.Art_address?.errorMessage}
        hasError={errors.Art_address?.hasError}
        {...getOverrideProps(overrides, "Art_address")}
      ></TextField>
      <SwitchField
        label="Whitelist art"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Whitelist_art}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Art_name,
              Art_address,
              Whitelist_art: value,
              User_ID,
              token_ID,
            };
            const result = onChange(modelFields);
            value = result?.Whitelist_art ?? value;
          }
          if (errors.Whitelist_art?.hasError) {
            runValidationTasks("Whitelist_art", value);
          }
          setWhitelist_art(value);
        }}
        onBlur={() => runValidationTasks("Whitelist_art", Whitelist_art)}
        errorMessage={errors.Whitelist_art?.errorMessage}
        hasError={errors.Whitelist_art?.hasError}
        {...getOverrideProps(overrides, "Whitelist_art")}
      ></SwitchField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Art_name,
              Art_address,
              Whitelist_art,
              User_ID: value,
              token_ID,
            };
            const result = onChange(modelFields);
            value = result?.User_ID ?? value;
          }
          if (errors.User_ID?.hasError) {
            runValidationTasks("User_ID", value);
          }
          setUser_ID(value);
        }}
        onBlur={() => runValidationTasks("User_ID", User_ID)}
        errorMessage={errors.User_ID?.errorMessage}
        hasError={errors.User_ID?.hasError}
        {...getOverrideProps(overrides, "User_ID")}
      ></TextField>
      <TextField
        label="Token id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Art_name,
              Art_address,
              Whitelist_art,
              User_ID,
              token_ID: value,
            };
            const result = onChange(modelFields);
            value = result?.token_ID ?? value;
          }
          if (errors.token_ID?.hasError) {
            runValidationTasks("token_ID", value);
          }
          setToken_ID(value);
        }}
        onBlur={() => runValidationTasks("token_ID", token_ID)}
        errorMessage={errors.token_ID?.errorMessage}
        hasError={errors.token_ID?.hasError}
        {...getOverrideProps(overrides, "token_ID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
