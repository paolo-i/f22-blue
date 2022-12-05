import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ArtworkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Artwork {
  readonly id: string;
  readonly Art_name?: string | null;
  readonly Art_address?: string | null;
  readonly Whitelist_art?: boolean | null;
  readonly User_ID?: string | null;
  readonly token_ID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Artwork, ArtworkMetaData>);
  static copyOf(source: Artwork, mutator: (draft: MutableModel<Artwork, ArtworkMetaData>) => MutableModel<Artwork, ArtworkMetaData> | void): Artwork;
}

export declare class Settings {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class Notification {
  readonly id: string;
  readonly blockchain?: string | null;
  readonly contract_address?: string | null;
  readonly file?: string | null;
  readonly image_url?: string | null;
  readonly marketplace?: string | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Notification, NotificationMetaData>);
  static copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}