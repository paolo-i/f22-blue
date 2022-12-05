/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Notification } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NotificationCreateForm(props) {
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
    blockchain: undefined,
    contract_address: undefined,
    file: undefined,
    image_url: undefined,
    marketplace: undefined,
    user: undefined,
  };
  const [blockchain, setBlockchain] = React.useState(initialValues.blockchain);
  const [contract_address, setContract_address] = React.useState(
    initialValues.contract_address
  );
  const [file, setFile] = React.useState(initialValues.file);
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [marketplace, setMarketplace] = React.useState(
    initialValues.marketplace
  );
  const [user, setUser] = React.useState(initialValues.user);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBlockchain(initialValues.blockchain);
    setContract_address(initialValues.contract_address);
    setFile(initialValues.file);
    setImage_url(initialValues.image_url);
    setMarketplace(initialValues.marketplace);
    setUser(initialValues.user);
    setErrors({});
  };
  const validations = {
    blockchain: [],
    contract_address: [],
    file: [],
    image_url: [],
    marketplace: [],
    user: [],
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
          blockchain,
          contract_address,
          file,
          image_url,
          marketplace,
          user,
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
          await DataStore.save(new Notification(modelFields));
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
      {...getOverrideProps(overrides, "NotificationCreateForm")}
    >
      <TextField
        label="Blockchain"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain: value,
              contract_address,
              file,
              image_url,
              marketplace,
              user,
            };
            const result = onChange(modelFields);
            value = result?.blockchain ?? value;
          }
          if (errors.blockchain?.hasError) {
            runValidationTasks("blockchain", value);
          }
          setBlockchain(value);
        }}
        onBlur={() => runValidationTasks("blockchain", blockchain)}
        errorMessage={errors.blockchain?.errorMessage}
        hasError={errors.blockchain?.hasError}
        {...getOverrideProps(overrides, "blockchain")}
      ></TextField>
      <TextField
        label="Contract address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain,
              contract_address: value,
              file,
              image_url,
              marketplace,
              user,
            };
            const result = onChange(modelFields);
            value = result?.contract_address ?? value;
          }
          if (errors.contract_address?.hasError) {
            runValidationTasks("contract_address", value);
          }
          setContract_address(value);
        }}
        onBlur={() => runValidationTasks("contract_address", contract_address)}
        errorMessage={errors.contract_address?.errorMessage}
        hasError={errors.contract_address?.hasError}
        {...getOverrideProps(overrides, "contract_address")}
      ></TextField>
      <TextField
        label="File"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain,
              contract_address,
              file: value,
              image_url,
              marketplace,
              user,
            };
            const result = onChange(modelFields);
            value = result?.file ?? value;
          }
          if (errors.file?.hasError) {
            runValidationTasks("file", value);
          }
          setFile(value);
        }}
        onBlur={() => runValidationTasks("file", file)}
        errorMessage={errors.file?.errorMessage}
        hasError={errors.file?.hasError}
        {...getOverrideProps(overrides, "file")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain,
              contract_address,
              file,
              image_url: value,
              marketplace,
              user,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
      ></TextField>
      <TextField
        label="Marketplace"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain,
              contract_address,
              file,
              image_url,
              marketplace: value,
              user,
            };
            const result = onChange(modelFields);
            value = result?.marketplace ?? value;
          }
          if (errors.marketplace?.hasError) {
            runValidationTasks("marketplace", value);
          }
          setMarketplace(value);
        }}
        onBlur={() => runValidationTasks("marketplace", marketplace)}
        errorMessage={errors.marketplace?.errorMessage}
        hasError={errors.marketplace?.hasError}
        {...getOverrideProps(overrides, "marketplace")}
      ></TextField>
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              blockchain,
              contract_address,
              file,
              image_url,
              marketplace,
              user: value,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
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
