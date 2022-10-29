/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtwork = /* GraphQL */ `
  mutation CreateArtwork(
    $input: CreateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    createArtwork(input: $input, condition: $condition) {
      id
      Art_name
      Art_address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArtwork = /* GraphQL */ `
  mutation UpdateArtwork(
    $input: UpdateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    updateArtwork(input: $input, condition: $condition) {
      id
      Art_name
      Art_address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArtwork = /* GraphQL */ `
  mutation DeleteArtwork(
    $input: DeleteArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    deleteArtwork(input: $input, condition: $condition) {
      id
      Art_name
      Art_address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
      id
      Notification_Setting
      Profile_Setting
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      settingsUserId
    }
  }
`;
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
      id
      Notification_Setting
      Profile_Setting
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      settingsUserId
    }
  }
`;
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
      id
      Notification_Setting
      Profile_Setting
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      settingsUserId
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      Username
      Password
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      profileSettingsId
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      Username
      Password
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      profileSettingsId
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      Username
      Password
      User {
        id
        Fname
        Lname
        DOB
        Email
        Phone_number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSettingsId
        userProfileId
      }
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      profileSettingsId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Fname
      Lname
      DOB
      Email
      Phone_number
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      Profile {
        id
        Username
        Password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        profileSettingsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
      userProfileId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Fname
      Lname
      DOB
      Email
      Phone_number
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      Profile {
        id
        Username
        Password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        profileSettingsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
      userProfileId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Fname
      Lname
      DOB
      Email
      Phone_number
      Settings {
        id
        Notification_Setting
        Profile_Setting
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        settingsUserId
      }
      Profile {
        id
        Username
        Password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        profileSettingsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSettingsId
      userProfileId
    }
  }
`;
