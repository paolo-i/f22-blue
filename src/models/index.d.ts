import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ArtworkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerArtwork = {
  readonly id: string;
  readonly Art_name?: string | null;
  readonly Art_address?: string | null;
  readonly Whitelist_art?: boolean | null;
  readonly User_ID?: string | null;
  readonly token_ID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArtwork = {
  readonly id: string;
  readonly Art_name?: string | null;
  readonly Art_address?: string | null;
  readonly Whitelist_art?: boolean | null;
  readonly User_ID?: string | null;
  readonly token_ID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Artwork = LazyLoading extends LazyLoadingDisabled ? EagerArtwork : LazyArtwork

export declare const Artwork: (new (init: ModelInit<Artwork, ArtworkMetaData>) => Artwork) & {
  copyOf(source: Artwork, mutator: (draft: MutableModel<Artwork, ArtworkMetaData>) => MutableModel<Artwork, ArtworkMetaData> | void): Artwork;
}

type EagerSettings = {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySettings = {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Settings = LazyLoading extends LazyLoadingDisabled ? EagerSettings : LazySettings

export declare const Settings: (new (init: ModelInit<Settings, SettingsMetaData>) => Settings) & {
  copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}