/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtwork = /* GraphQL */ `
  query GetArtwork($id: ID!) {
    getArtwork(id: $id) {
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
export const listArtworks = /* GraphQL */ `
  query ListArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Art_name
        Art_address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArtworks = /* GraphQL */ `
  query SyncArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtworks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Art_name
        Art_address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSettings = /* GraphQL */ `
  query SyncSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
