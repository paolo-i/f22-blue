import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TestModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TestModel {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestModel, TestModelMetaData>);
  static copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel, TestModelMetaData>) => MutableModel<TestModel, TestModelMetaData> | void): TestModel;
}