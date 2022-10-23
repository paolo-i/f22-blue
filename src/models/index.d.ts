import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Settings {
  readonly id: string;
  readonly Notification_Setting?: string | null;
  readonly Profile_Setting?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly settingsUserId?: string | null;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class User {
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
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Profile {
  readonly id: string;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly User?: User | null;
  readonly Settings?: Settings | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileUserId?: string | null;
  readonly profileSettingsId?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}