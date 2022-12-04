/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtwork = /* GraphQL */ `
  query GetArtwork($id: ID!) {
    getArtwork(id: $id) {
      id
      Art_name
      Art_address
      Whitelist_art
      User_ID
      token_ID
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
        Whitelist_art
        User_ID
        token_ID
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
        Whitelist_art
        User_ID
        token_ID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      blockchain
      contract_address
      file
      image_url
      marketplace
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blockchain
        contract_address
        file
        image_url
        marketplace
        user
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
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        blockchain
        contract_address
        file
        image_url
        marketplace
        user
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
