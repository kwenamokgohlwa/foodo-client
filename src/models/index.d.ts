import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerFoodie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foodie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly owner: string;
  readonly foodo?: Foodo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodieFoodoId?: string | null;
}

type LazyFoodie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foodie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly owner: string;
  readonly foodo: AsyncItem<Foodo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodieFoodoId?: string | null;
}

export declare type Foodie = LazyLoading extends LazyLoadingDisabled ? EagerFoodie : LazyFoodie

export declare const Foodie: (new (init: ModelInit<Foodie>) => Foodie) & {
  copyOf(source: Foodie, mutator: (draft: MutableModel<Foodie>) => MutableModel<Foodie> | void): Foodie;
}

type EagerFoodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foodo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipe?: Food[] | null;
  readonly description?: string | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foodo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipe: AsyncCollection<Food>;
  readonly description?: string | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Foodo = LazyLoading extends LazyLoadingDisabled ? EagerFoodo : LazyFoodo

export declare const Foodo: (new (init: ModelInit<Foodo>) => Foodo) & {
  copyOf(source: Foodo, mutator: (draft: MutableModel<Foodo>) => MutableModel<Foodo> | void): Foodo;
}

type EagerFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredient: string;
  readonly added?: boolean | null;
  readonly recipe: string;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredient: string;
  readonly added?: boolean | null;
  readonly recipe: string;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Food = LazyLoading extends LazyLoadingDisabled ? EagerFood : LazyFood

export declare const Food: (new (init: ModelInit<Food>) => Food) & {
  copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
}