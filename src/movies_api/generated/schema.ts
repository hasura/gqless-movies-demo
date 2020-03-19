// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ScalarNode,
  InputNode,
  InputNodeField,
  ArrayNode,
  ObjectNode,
  FieldNode,
  EnumNode,
  Arguments,
  ArgumentsField
} from "gqless";

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "String_comparison_exp" }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get characters() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, false);
        },
        get movie() {
          return new FieldNode(schema.movies, undefined, true);
        },
        get movie_id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "characters", extension: ((extensions as any) || {}).characters }
    );
  },
  get characters_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.characters_aggregate_fields,
            undefined,
            true
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.characters, false),
            undefined,
            false
          );
        }
      },
      {
        name: "characters_aggregate",
        extension: ((extensions as any) || {}).characters_aggregate
      }
    );
  },
  get characters_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.characters_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.characters_min_fields, undefined, true);
        }
      },
      {
        name: "characters_aggregate_fields",
        extension: ((extensions as any) || {}).characters_aggregate_fields
      }
    );
  },
  get characters_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.characters_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.characters_min_order_by, true);
        }
      },
      { name: "characters_aggregate_order_by" }
    );
  },
  get characters_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.characters_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.characters_on_conflict, true);
        }
      },
      { name: "characters_arr_rel_insert_input" }
    );
  },
  get characters_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.characters_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.characters_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.characters_bool_exp, true),
            true
          );
        },
        get actor() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get image_url() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get movie() {
          return new InputNodeField(schema.movies_bool_exp, true);
        },
        get movie_id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "characters_bool_exp" }
    );
  },
  get characters_constraint() {
    return new EnumNode({ name: "characters_constraint" });
  },
  get characters_insert_input() {
    return new InputNode(
      {
        get actor() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get image_url() {
          return new InputNodeField(schema.String, true);
        },
        get movie() {
          return new InputNodeField(schema.movies_obj_rel_insert_input, true);
        },
        get movie_id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "characters_insert_input" }
    );
  },
  get characters_max_fields() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get movie_id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "characters_max_fields",
        extension: ((extensions as any) || {}).characters_max_fields
      }
    );
  },
  get characters_max_order_by() {
    return new InputNode(
      {
        get actor() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get movie_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "characters_max_order_by" }
    );
  },
  get characters_min_fields() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get movie_id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "characters_min_fields",
        extension: ((extensions as any) || {}).characters_min_fields
      }
    );
  },
  get characters_min_order_by() {
    return new InputNode(
      {
        get actor() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get movie_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "characters_min_order_by" }
    );
  },
  get characters_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.characters, false),
            undefined,
            false
          );
        }
      },
      {
        name: "characters_mutation_response",
        extension: ((extensions as any) || {}).characters_mutation_response
      }
    );
  },
  get characters_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.characters_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.characters_on_conflict, true);
        }
      },
      { name: "characters_obj_rel_insert_input" }
    );
  },
  get characters_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.characters_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.characters_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.characters_bool_exp, true);
        }
      },
      { name: "characters_on_conflict" }
    );
  },
  get characters_order_by() {
    return new InputNode(
      {
        get actor() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get movie() {
          return new InputNodeField(schema.movies_order_by, true);
        },
        get movie_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "characters_order_by" }
    );
  },
  get characters_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "characters_pk_columns_input" }
    );
  },
  get characters_select_column() {
    return new EnumNode({ name: "characters_select_column" });
  },
  get characters_set_input() {
    return new InputNode(
      {
        get actor() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get image_url() {
          return new InputNodeField(schema.String, true);
        },
        get movie_id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "characters_set_input" }
    );
  },
  get characters_update_column() {
    return new EnumNode({ name: "characters_update_column" });
  },
  get movies() {
    return new ObjectNode(
      {
        get characters() {
          return new FieldNode(
            new ArrayNode(schema.characters, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get characters_aggregate() {
          return new FieldNode(
            schema.characters_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "movies", extension: ((extensions as any) || {}).movies }
    );
  },
  get movies_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.movies_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.movies, false),
            undefined,
            false
          );
        }
      },
      {
        name: "movies_aggregate",
        extension: ((extensions as any) || {}).movies_aggregate
      }
    );
  },
  get movies_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.movies_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.movies_min_fields, undefined, true);
        }
      },
      {
        name: "movies_aggregate_fields",
        extension: ((extensions as any) || {}).movies_aggregate_fields
      }
    );
  },
  get movies_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.movies_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.movies_min_order_by, true);
        }
      },
      { name: "movies_aggregate_order_by" }
    );
  },
  get movies_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.movies_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.movies_on_conflict, true);
        }
      },
      { name: "movies_arr_rel_insert_input" }
    );
  },
  get movies_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.movies_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.movies_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.movies_bool_exp, true),
            true
          );
        },
        get characters() {
          return new InputNodeField(schema.characters_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get image_url() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "movies_bool_exp" }
    );
  },
  get movies_constraint() {
    return new EnumNode({ name: "movies_constraint" });
  },
  get movies_insert_input() {
    return new InputNode(
      {
        get characters() {
          return new InputNodeField(
            schema.characters_arr_rel_insert_input,
            true
          );
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get image_url() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "movies_insert_input" }
    );
  },
  get movies_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "movies_max_fields",
        extension: ((extensions as any) || {}).movies_max_fields
      }
    );
  },
  get movies_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "movies_max_order_by" }
    );
  },
  get movies_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get image_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "movies_min_fields",
        extension: ((extensions as any) || {}).movies_min_fields
      }
    );
  },
  get movies_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "movies_min_order_by" }
    );
  },
  get movies_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.movies, false),
            undefined,
            false
          );
        }
      },
      {
        name: "movies_mutation_response",
        extension: ((extensions as any) || {}).movies_mutation_response
      }
    );
  },
  get movies_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.movies_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.movies_on_conflict, true);
        }
      },
      { name: "movies_obj_rel_insert_input" }
    );
  },
  get movies_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.movies_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.movies_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.movies_bool_exp, true);
        }
      },
      { name: "movies_on_conflict" }
    );
  },
  get movies_order_by() {
    return new InputNode(
      {
        get characters_aggregate() {
          return new InputNodeField(schema.characters_aggregate_order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get image_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "movies_order_by" }
    );
  },
  get movies_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "movies_pk_columns_input" }
    );
  },
  get movies_select_column() {
    return new EnumNode({ name: "movies_select_column" });
  },
  get movies_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get image_url() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "movies_set_input" }
    );
  },
  get movies_update_column() {
    return new EnumNode({ name: "movies_update_column" });
  },
  get mutation_root() {
    return new ObjectNode(
      {
        get delete_characters() {
          return new FieldNode(
            schema.characters_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.characters_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_characters_by_pk() {
          return new FieldNode(
            schema.characters,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_movies() {
          return new FieldNode(
            schema.movies_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.movies_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_movies_by_pk() {
          return new FieldNode(
            schema.movies,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get insert_characters() {
          return new FieldNode(
            schema.characters_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.characters_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_characters_one() {
          return new FieldNode(
            schema.characters,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.characters_insert_input,
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.characters_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_movies() {
          return new FieldNode(
            schema.movies_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.movies_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_movies_one() {
          return new FieldNode(
            schema.movies,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.movies_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.movies_on_conflict, true);
              }
            }),
            true
          );
        },
        get update_characters() {
          return new FieldNode(
            schema.characters_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.characters_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_characters_by_pk() {
          return new FieldNode(
            schema.characters,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.characters_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.characters_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        },
        get update_movies() {
          return new FieldNode(
            schema.movies_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.movies_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.movies_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_movies_by_pk() {
          return new FieldNode(
            schema.movies,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.movies_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.movies_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        }
      },
      {
        name: "mutation_root",
        extension: ((extensions as any) || {}).mutation_root
      }
    );
  },
  get order_by() {
    return new EnumNode({ name: "order_by" });
  },
  get query_root() {
    return new ObjectNode(
      {
        get characters() {
          return new FieldNode(
            new ArrayNode(schema.characters, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get characters_aggregate() {
          return new FieldNode(
            schema.characters_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get characters_by_pk() {
          return new FieldNode(
            schema.characters,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get movies() {
          return new FieldNode(
            new ArrayNode(schema.movies, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.movies_bool_exp, true);
              }
            }),
            false
          );
        },
        get movies_aggregate() {
          return new FieldNode(
            schema.movies_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.movies_bool_exp, true);
              }
            }),
            false
          );
        },
        get movies_by_pk() {
          return new FieldNode(
            schema.movies,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "query_root", extension: ((extensions as any) || {}).query_root }
    );
  },
  get subscription_root() {
    return new ObjectNode(
      {
        get characters() {
          return new FieldNode(
            new ArrayNode(schema.characters, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get characters_aggregate() {
          return new FieldNode(
            schema.characters_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.characters_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.characters_bool_exp, true);
              }
            }),
            false
          );
        },
        get characters_by_pk() {
          return new FieldNode(
            schema.characters,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get movies() {
          return new FieldNode(
            new ArrayNode(schema.movies, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.movies_bool_exp, true);
              }
            }),
            false
          );
        },
        get movies_aggregate() {
          return new FieldNode(
            schema.movies_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.movies_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.movies_bool_exp, true);
              }
            }),
            false
          );
        },
        get movies_by_pk() {
          return new FieldNode(
            schema.movies,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      {
        name: "subscription_root",
        extension: ((extensions as any) || {}).subscription_root
      }
    );
  },
  get uuid() {
    return new ScalarNode({
      name: "uuid",
      extension: ((extensions as any) || {}).uuid
    });
  },
  get uuid_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _lte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _neq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        }
      },
      { name: "uuid_comparison_exp" }
    );
  }
};

lazyGetters(schema);
