/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtwork = /* GraphQL */ `
  subscription OnCreateArtwork {
    onCreateArtwork {
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
export const onUpdateArtwork = /* GraphQL */ `
  subscription OnUpdateArtwork {
    onUpdateArtwork {
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
export const onDeleteArtwork = /* GraphQL */ `
  subscription OnDeleteArtwork {
    onDeleteArtwork {
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
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings {
    onCreateSettings {
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
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings {
    onUpdateSettings {
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
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings {
    onDeleteSettings {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
