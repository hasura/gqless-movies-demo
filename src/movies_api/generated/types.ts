import * as extensions from "../extensions";
import {
  TypeData,
  ScalarType,
  FieldsType,
  EnumType,
  FieldsTypeArg
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq: string | null;
  _gt: string | null;
  _gte: string | null;
  _ilike: string | null;
  _in: string[] | null;
  _is_null: boolean | null;
  _like: string | null;
  _lt: string | null;
  _lte: string | null;
  _neq: string | null;
  _nilike: string | null;
  _nin: string[] | null;
  _nlike: string | null;
  _nsimilar: string | null;
  _similar: string | null;
};

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    args: t___InputValue[];
    description: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "ARGUMENT_DEFINITION"
  | "ENUM"
  | "ENUM_VALUE"
  | "FIELD"
  | "FIELD_DEFINITION"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "INPUT_FIELD_DEFINITION"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "MUTATION"
  | "OBJECT"
  | "QUERY"
  | "SCALAR"
  | "SCHEMA"
  | "SUBSCRIPTION"
  | "UNION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    args: t___InputValue[];
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    defaultValue: t_String | null;
    description: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;
    directives: t___Directive[];
    mutationType: t___Type | null;
    queryType: t___Type;
    subscriptionType: t___Type | null;
    types: t___Type[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    description: t_String | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields: t___InputValue[] | null;
    interfaces: t___Type[] | null;
    kind: t___TypeKind;
    name: t_String | null;
    ofType: t___Type | null;
    possibleTypes: t___Type[] | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "ENUM"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "LIST"
  | "NON_NULL"
  | "OBJECT"
  | "SCALAR"
  | "UNION"
>;

/**
 * @name characters
 * @type OBJECT
 */
type t_characters = FieldsType<
  {
    __typename: t_String<"characters">;
    actor: t_String | null;
    id: t_uuid;
    image_url: t_String;

    /**
     * An object relationship
     */
    movie: t_movies | null;
    movie_id: t_uuid | null;
    name: t_String | null;
  },
  Extension<"characters">
>;

/**
 * @name characters_aggregate
 * @type OBJECT
 */
type t_characters_aggregate = FieldsType<
  {
    __typename: t_String<"characters_aggregate">;
    aggregate: t_characters_aggregate_fields | null;
    nodes: t_characters[];
  },
  Extension<"characters_aggregate">
>;

/**
 * @name characters_aggregate_fields
 * @type OBJECT
 */
type t_characters_aggregate_fields = FieldsType<
  {
    __typename: t_String<"characters_aggregate_fields">;
    count: FieldsTypeArg<
      {
        columns?: characters_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max: t_characters_max_fields | null;
    min: t_characters_min_fields | null;
  },
  Extension<"characters_aggregate_fields">
>;

/**
 * @name characters_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type characters_aggregate_order_by = {
  count: order_by | null;
  max: characters_max_order_by | null;
  min: characters_min_order_by | null;
};

/**
 * @name characters_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type characters_arr_rel_insert_input = {
  data: characters_insert_input[];
  on_conflict: characters_on_conflict | null;
};

/**
 * @name characters_bool_exp
 * @type INPUT_OBJECT
 */
export type characters_bool_exp = {
  _and: (characters_bool_exp | null)[] | null;
  _not: characters_bool_exp | null;
  _or: (characters_bool_exp | null)[] | null;
  actor: String_comparison_exp | null;
  id: uuid_comparison_exp | null;
  image_url: String_comparison_exp | null;
  movie: movies_bool_exp | null;
  movie_id: uuid_comparison_exp | null;
  name: String_comparison_exp | null;
};

/**
 * @name characters_constraint
 * @type ENUM
 */
type t_characters_constraint = EnumType<"characters_pkey">;

/**
 * @name characters_insert_input
 * @type INPUT_OBJECT
 */
export type characters_insert_input = {
  actor: string | null;
  id: any | null;
  image_url: string | null;
  movie: movies_obj_rel_insert_input | null;
  movie_id: any | null;
  name: string | null;
};

/**
 * @name characters_max_fields
 * @type OBJECT
 */
type t_characters_max_fields = FieldsType<
  {
    __typename: t_String<"characters_max_fields">;
    actor: t_String | null;
    id: t_uuid | null;
    image_url: t_String | null;
    movie_id: t_uuid | null;
    name: t_String | null;
  },
  Extension<"characters_max_fields">
>;

/**
 * @name characters_max_order_by
 * @type INPUT_OBJECT
 */
export type characters_max_order_by = {
  actor: order_by | null;
  id: order_by | null;
  image_url: order_by | null;
  movie_id: order_by | null;
  name: order_by | null;
};

/**
 * @name characters_min_fields
 * @type OBJECT
 */
type t_characters_min_fields = FieldsType<
  {
    __typename: t_String<"characters_min_fields">;
    actor: t_String | null;
    id: t_uuid | null;
    image_url: t_String | null;
    movie_id: t_uuid | null;
    name: t_String | null;
  },
  Extension<"characters_min_fields">
>;

/**
 * @name characters_min_order_by
 * @type INPUT_OBJECT
 */
export type characters_min_order_by = {
  actor: order_by | null;
  id: order_by | null;
  image_url: order_by | null;
  movie_id: order_by | null;
  name: order_by | null;
};

/**
 * @name characters_mutation_response
 * @type OBJECT
 */
type t_characters_mutation_response = FieldsType<
  {
    __typename: t_String<"characters_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_characters[];
  },
  Extension<"characters_mutation_response">
>;

/**
 * @name characters_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type characters_obj_rel_insert_input = {
  data: characters_insert_input;
  on_conflict: characters_on_conflict | null;
};

/**
 * @name characters_on_conflict
 * @type INPUT_OBJECT
 */
export type characters_on_conflict = {
  constraint: characters_constraint;
  update_columns: characters_update_column[];
  where: characters_bool_exp | null;
};

/**
 * @name characters_order_by
 * @type INPUT_OBJECT
 */
export type characters_order_by = {
  actor: order_by | null;
  id: order_by | null;
  image_url: order_by | null;
  movie: movies_order_by | null;
  movie_id: order_by | null;
  name: order_by | null;
};

/**
 * @name characters_pk_columns_input
 * @type INPUT_OBJECT
 */
export type characters_pk_columns_input = { id: any };

/**
 * @name characters_select_column
 * @type ENUM
 */
type t_characters_select_column = EnumType<
  "actor" | "id" | "image_url" | "movie_id" | "name"
>;

/**
 * @name characters_set_input
 * @type INPUT_OBJECT
 */
export type characters_set_input = {
  actor: string | null;
  id: any | null;
  image_url: string | null;
  movie_id: any | null;
  name: string | null;
};

/**
 * @name characters_update_column
 * @type ENUM
 */
type t_characters_update_column = EnumType<
  "actor" | "id" | "image_url" | "movie_id" | "name"
>;

/**
 * @name movies
 * @type OBJECT
 */
type t_movies = FieldsType<
  {
    __typename: t_String<"movies">;

    /**
     * An array relationship
     */
    characters: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters[]
    >;

    /**
     * An aggregated array relationship
     */
    characters_aggregate: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters_aggregate
    >;
    id: t_uuid;
    image_url: t_String | null;
    name: t_String;
  },
  Extension<"movies">
>;

/**
 * @name movies_aggregate
 * @type OBJECT
 */
type t_movies_aggregate = FieldsType<
  {
    __typename: t_String<"movies_aggregate">;
    aggregate: t_movies_aggregate_fields | null;
    nodes: t_movies[];
  },
  Extension<"movies_aggregate">
>;

/**
 * @name movies_aggregate_fields
 * @type OBJECT
 */
type t_movies_aggregate_fields = FieldsType<
  {
    __typename: t_String<"movies_aggregate_fields">;
    count: FieldsTypeArg<
      { columns?: movies_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max: t_movies_max_fields | null;
    min: t_movies_min_fields | null;
  },
  Extension<"movies_aggregate_fields">
>;

/**
 * @name movies_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type movies_aggregate_order_by = {
  count: order_by | null;
  max: movies_max_order_by | null;
  min: movies_min_order_by | null;
};

/**
 * @name movies_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type movies_arr_rel_insert_input = {
  data: movies_insert_input[];
  on_conflict: movies_on_conflict | null;
};

/**
 * @name movies_bool_exp
 * @type INPUT_OBJECT
 */
export type movies_bool_exp = {
  _and: (movies_bool_exp | null)[] | null;
  _not: movies_bool_exp | null;
  _or: (movies_bool_exp | null)[] | null;
  characters: characters_bool_exp | null;
  id: uuid_comparison_exp | null;
  image_url: String_comparison_exp | null;
  name: String_comparison_exp | null;
};

/**
 * @name movies_constraint
 * @type ENUM
 */
type t_movies_constraint = EnumType<"movies_pkey">;

/**
 * @name movies_insert_input
 * @type INPUT_OBJECT
 */
export type movies_insert_input = {
  characters: characters_arr_rel_insert_input | null;
  id: any | null;
  image_url: string | null;
  name: string | null;
};

/**
 * @name movies_max_fields
 * @type OBJECT
 */
type t_movies_max_fields = FieldsType<
  {
    __typename: t_String<"movies_max_fields">;
    id: t_uuid | null;
    image_url: t_String | null;
    name: t_String | null;
  },
  Extension<"movies_max_fields">
>;

/**
 * @name movies_max_order_by
 * @type INPUT_OBJECT
 */
export type movies_max_order_by = {
  id: order_by | null;
  image_url: order_by | null;
  name: order_by | null;
};

/**
 * @name movies_min_fields
 * @type OBJECT
 */
type t_movies_min_fields = FieldsType<
  {
    __typename: t_String<"movies_min_fields">;
    id: t_uuid | null;
    image_url: t_String | null;
    name: t_String | null;
  },
  Extension<"movies_min_fields">
>;

/**
 * @name movies_min_order_by
 * @type INPUT_OBJECT
 */
export type movies_min_order_by = {
  id: order_by | null;
  image_url: order_by | null;
  name: order_by | null;
};

/**
 * @name movies_mutation_response
 * @type OBJECT
 */
type t_movies_mutation_response = FieldsType<
  {
    __typename: t_String<"movies_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_movies[];
  },
  Extension<"movies_mutation_response">
>;

/**
 * @name movies_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type movies_obj_rel_insert_input = {
  data: movies_insert_input;
  on_conflict: movies_on_conflict | null;
};

/**
 * @name movies_on_conflict
 * @type INPUT_OBJECT
 */
export type movies_on_conflict = {
  constraint: movies_constraint;
  update_columns: movies_update_column[];
  where: movies_bool_exp | null;
};

/**
 * @name movies_order_by
 * @type INPUT_OBJECT
 */
export type movies_order_by = {
  characters_aggregate: characters_aggregate_order_by | null;
  id: order_by | null;
  image_url: order_by | null;
  name: order_by | null;
};

/**
 * @name movies_pk_columns_input
 * @type INPUT_OBJECT
 */
export type movies_pk_columns_input = { id: any };

/**
 * @name movies_select_column
 * @type ENUM
 */
type t_movies_select_column = EnumType<"id" | "image_url" | "name">;

/**
 * @name movies_set_input
 * @type INPUT_OBJECT
 */
export type movies_set_input = {
  id: any | null;
  image_url: string | null;
  name: string | null;
};

/**
 * @name movies_update_column
 * @type ENUM
 */
type t_movies_update_column = EnumType<"id" | "image_url" | "name">;

/**
 * @name mutation_root
 * @type OBJECT
 */
type t_mutation_root = FieldsType<
  {
    __typename: t_String<"mutation_root">;

    /**
     * delete data from the table: "characters"
     */
    delete_characters: FieldsTypeArg<
      { where: characters_bool_exp },
      t_characters_mutation_response | null
    >;

    /**
     * delete single row from the table: "characters"
     */
    delete_characters_by_pk: FieldsTypeArg<{ id: any }, t_characters | null>;

    /**
     * delete data from the table: "movies"
     */
    delete_movies: FieldsTypeArg<
      { where: movies_bool_exp },
      t_movies_mutation_response | null
    >;

    /**
     * delete single row from the table: "movies"
     */
    delete_movies_by_pk: FieldsTypeArg<{ id: any }, t_movies | null>;

    /**
     * insert data into the table: "characters"
     */
    insert_characters: FieldsTypeArg<
      {
        objects: characters_insert_input[];
        on_conflict?: characters_on_conflict | null;
      },
      t_characters_mutation_response | null
    >;

    /**
     * insert a single row into the table: "characters"
     */
    insert_characters_one: FieldsTypeArg<
      {
        object: characters_insert_input;
        on_conflict?: characters_on_conflict | null;
      },
      t_characters | null
    >;

    /**
     * insert data into the table: "movies"
     */
    insert_movies: FieldsTypeArg<
      {
        objects: movies_insert_input[];
        on_conflict?: movies_on_conflict | null;
      },
      t_movies_mutation_response | null
    >;

    /**
     * insert a single row into the table: "movies"
     */
    insert_movies_one: FieldsTypeArg<
      { object: movies_insert_input; on_conflict?: movies_on_conflict | null },
      t_movies | null
    >;

    /**
     * update data of the table: "characters"
     */
    update_characters: FieldsTypeArg<
      { _set?: characters_set_input | null; where: characters_bool_exp },
      t_characters_mutation_response | null
    >;

    /**
     * update single row of the table: "characters"
     */
    update_characters_by_pk: FieldsTypeArg<
      {
        _set?: characters_set_input | null;
        pk_columns: characters_pk_columns_input;
      },
      t_characters | null
    >;

    /**
     * update data of the table: "movies"
     */
    update_movies: FieldsTypeArg<
      { _set?: movies_set_input | null; where: movies_bool_exp },
      t_movies_mutation_response | null
    >;

    /**
     * update single row of the table: "movies"
     */
    update_movies_by_pk: FieldsTypeArg<
      { _set?: movies_set_input | null; pk_columns: movies_pk_columns_input },
      t_movies | null
    >;
  },
  Extension<"mutation_root">
>;

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<"query_root">;

    /**
     * fetch data from the table: "characters"
     */
    characters: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters[]
    >;

    /**
     * fetch aggregated fields from the table: "characters"
     */
    characters_aggregate: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters_aggregate
    >;

    /**
     * fetch data from the table: "characters" using primary key columns
     */
    characters_by_pk: FieldsTypeArg<{ id: any }, t_characters | null>;

    /**
     * fetch data from the table: "movies"
     */
    movies: FieldsTypeArg<
      {
        distinct_on?: movies_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: movies_order_by[] | null;
        where?: movies_bool_exp | null;
      },
      t_movies[]
    >;

    /**
     * fetch aggregated fields from the table: "movies"
     */
    movies_aggregate: FieldsTypeArg<
      {
        distinct_on?: movies_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: movies_order_by[] | null;
        where?: movies_bool_exp | null;
      },
      t_movies_aggregate
    >;

    /**
     * fetch data from the table: "movies" using primary key columns
     */
    movies_by_pk: FieldsTypeArg<{ id: any }, t_movies | null>;
  },
  Extension<"query_root">
>;

/**
 * @name subscription_root
 * @type OBJECT
 */
type t_subscription_root = FieldsType<
  {
    __typename: t_String<"subscription_root">;

    /**
     * fetch data from the table: "characters"
     */
    characters: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters[]
    >;

    /**
     * fetch aggregated fields from the table: "characters"
     */
    characters_aggregate: FieldsTypeArg<
      {
        distinct_on?: characters_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: characters_order_by[] | null;
        where?: characters_bool_exp | null;
      },
      t_characters_aggregate
    >;

    /**
     * fetch data from the table: "characters" using primary key columns
     */
    characters_by_pk: FieldsTypeArg<{ id: any }, t_characters | null>;

    /**
     * fetch data from the table: "movies"
     */
    movies: FieldsTypeArg<
      {
        distinct_on?: movies_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: movies_order_by[] | null;
        where?: movies_bool_exp | null;
      },
      t_movies[]
    >;

    /**
     * fetch aggregated fields from the table: "movies"
     */
    movies_aggregate: FieldsTypeArg<
      {
        distinct_on?: movies_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: movies_order_by[] | null;
        where?: movies_bool_exp | null;
      },
      t_movies_aggregate
    >;

    /**
     * fetch data from the table: "movies" using primary key columns
     */
    movies_by_pk: FieldsTypeArg<{ id: any }, t_movies | null>;
  },
  Extension<"subscription_root">
>;

/**
 * @name uuid
 * @type SCALAR
 */
type t_uuid<T extends any = any> = ScalarType<T, Extension<"uuid">>;

/**
 * @name uuid_comparison_exp
 * @type INPUT_OBJECT
 */
export type uuid_comparison_exp = {
  _eq: any | null;
  _gt: any | null;
  _gte: any | null;
  _in: any[] | null;
  _is_null: boolean | null;
  _lt: any | null;
  _lte: any | null;
  _neq: any | null;
  _nin: any[] | null;
};

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>;

/**
 * @name characters
 * @type OBJECT
 */
export type characters = TypeData<t_characters>;

/**
 * @name characters_aggregate
 * @type OBJECT
 */
export type characters_aggregate = TypeData<t_characters_aggregate>;

/**
 * @name characters_aggregate_fields
 * @type OBJECT
 */
export type characters_aggregate_fields = TypeData<
  t_characters_aggregate_fields
>;

/**
 * @name characters_constraint
 * @type ENUM
 */
export type characters_constraint = TypeData<t_characters_constraint>;

/**
 * @name characters_max_fields
 * @type OBJECT
 */
export type characters_max_fields = TypeData<t_characters_max_fields>;

/**
 * @name characters_min_fields
 * @type OBJECT
 */
export type characters_min_fields = TypeData<t_characters_min_fields>;

/**
 * @name characters_mutation_response
 * @type OBJECT
 */
export type characters_mutation_response = TypeData<
  t_characters_mutation_response
>;

/**
 * @name characters_select_column
 * @type ENUM
 */
export type characters_select_column = TypeData<t_characters_select_column>;

/**
 * @name characters_update_column
 * @type ENUM
 */
export type characters_update_column = TypeData<t_characters_update_column>;

/**
 * @name movies
 * @type OBJECT
 */
export type movies = TypeData<t_movies>;

/**
 * @name movies_aggregate
 * @type OBJECT
 */
export type movies_aggregate = TypeData<t_movies_aggregate>;

/**
 * @name movies_aggregate_fields
 * @type OBJECT
 */
export type movies_aggregate_fields = TypeData<t_movies_aggregate_fields>;

/**
 * @name movies_constraint
 * @type ENUM
 */
export type movies_constraint = TypeData<t_movies_constraint>;

/**
 * @name movies_max_fields
 * @type OBJECT
 */
export type movies_max_fields = TypeData<t_movies_max_fields>;

/**
 * @name movies_min_fields
 * @type OBJECT
 */
export type movies_min_fields = TypeData<t_movies_min_fields>;

/**
 * @name movies_mutation_response
 * @type OBJECT
 */
export type movies_mutation_response = TypeData<t_movies_mutation_response>;

/**
 * @name movies_select_column
 * @type ENUM
 */
export type movies_select_column = TypeData<t_movies_select_column>;

/**
 * @name movies_update_column
 * @type ENUM
 */
export type movies_update_column = TypeData<t_movies_update_column>;

/**
 * @name mutation_root
 * @type OBJECT
 */
export type mutation_root = TypeData<t_mutation_root>;

/**
 * @name order_by
 * @type ENUM
 */
export type order_by = TypeData<t_order_by>;

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;

/**
 * @name subscription_root
 * @type OBJECT
 */
export type subscription_root = TypeData<t_subscription_root>;

/**
 * @name uuid
 * @type SCALAR
 */
export type uuid = TypeData<t_uuid>;
