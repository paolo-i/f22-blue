/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Settings } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SettingsCreateForm(props) {
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
    Notification_Setting: undefined,
    Profile_Setting: undefined,
  };
  const [Notification_Setting, setNotification_Setting] = React.useState(
    initialValues.Notification_Setting
  );
  const [Profile_Setting, setProfile_Setting] = React.useState(
    initialValues.Profile_Setting
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNotification_Setting(initialValues.Notification_Setting);
    setProfile_Setting(initialValues.Profile_Setting);
    setErrors({});
  };
  const validations = {
    Notification_Setting: [],
    Profile_Setting: [],
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
          Notification_Setting,
          Profile_Setting,
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
          await DataStore.save(new Settings(modelFields));
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
      {...getOverrideProps(overrides, "SettingsCreateForm")}
    >
      <TextField
        label="Notification setting"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Notification_Setting: value,
              Profile_Setting,
            };
            const result = onChange(modelFields);
            value = result?.Notification_Setting ?? value;
          }
          if (errors.Notification_Setting?.hasError) {
            runValidationTasks("Notification_Setting", value);
          }
          setNotification_Setting(value);
        }}
        onBlur={() =>
          runValidationTasks("Notification_Setting", Notification_Setting)
        }
        errorMessage={errors.Notification_Setting?.errorMessage}
        hasError={errors.Notification_Setting?.hasError}
        {...getOverrideProps(overrides, "Notification_Setting")}
      ></TextField>
      <TextField
        label="Profile setting"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Notification_Setting,
              Profile_Setting: value,
            };
            const result = onChange(modelFields);
            value = result?.Profile_Setting ?? value;
          }
          if (errors.Profile_Setting?.hasError) {
            runValidationTasks("Profile_Setting", value);
          }
          setProfile_Setting(value);
        }}
        onBlur={() => runValidationTasks("Profile_Setting", Profile_Setting)}
        errorMessage={errors.Profile_Setting?.errorMessage}
        hasError={errors.Profile_Setting?.hasError}
        {...getOverrideProps(overrides, "Profile_Setting")}
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
