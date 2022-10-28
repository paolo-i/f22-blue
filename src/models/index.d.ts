import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSettings = {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly settingsUserId?: string | null;
}

type LazySettings = {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly settingsUserId?: string | null;
}

export declare type Settings = LazyLoading extends LazyLoadingDisabled ? EagerSettings : LazySettings

export declare const Settings: (new (init: ModelInit<Settings, SettingsMetaData>) => Settings) & {
  copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

type EagerUser = {
  readonly id: string;
  readonly Fname?: string | null;
  readonly Lname?: string | null;
  readonly DOB?: string | null;
  readonly Email?: string | null;
  readonly Phone_number?: string | null;
  readonly Settings?: Settings | null;
  readonly Profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly Fname?: string | null;
  readonly Lname?: string | null;
  readonly DOB?: string | null;
  readonly Email?: string | null;
  readonly Phone_number?: string | null;
  readonly Settings: AsyncItem<Settings | undefined>;
  readonly Profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerProfile = {
  readonly id: string;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly User?: User | null;
  readonly Settings?: Settings | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileUserId?: string | null;
  readonly profileSettingsId?: string | null;
}

type LazyProfile = {
  readonly id: string;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly Settings: AsyncItem<Settings | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileUserId?: string | null;
  readonly profileSettingsId?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile, ProfileMetaData>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}