import _ from "lodash";
import { AuctionSchema } from "./schemas/Auction/schema";
import { CommonListItemSchema } from "./schemas/CommonList/schema";
import { SalesMethodSchema } from "./schemas/SalesMethod/schema";
import { TenderDefinitionSchema } from "./schemas/TenderDefinition/schema";
import { ValuationConditionSchema } from "./schemas/ValuationCondition/schema";
import { YardCreationSchema } from "./schemas/YardCreation/schema";
import { YardFeeChargeDetails } from "./schemas/YardFeeChargeDetails/Schema";
import { YardFeeTypeSchema } from "./schemas/YardFeeType/schema";
import { YardInCheckListItemsSchema } from "./schemas/YardInCheckListItems/schema";
import { YardInConditionSchema } from "./schemas/YardInConditions/schema";
import { YardlevelDefinitionSchema } from "./schemas/YardLevelDefinititon/schema";
import { YardReleaseTypeSchema } from "./schemas/YardReleaseType/schema";
import { iSettingSchema, iTypedSettingSchema } from "./SettingsTemplate/schema";








export const resolveSettingName = (path: string) => {
  // path Eg: /AnRkr/frequency-definition
  const routes = _.flatten(
    SettingsSchema.navigation.list.map((category) => category.children)
  );
  const route = _.find(routes, { path });
  return route?.key;
};

export const resolveSetting = (path: string) => {
  return (SettingsSchema.map as any)[resolveSettingName(path)!];
};

function registerSubSchemas(
  rootSchema: iSettingSchema,
  subSchemas: (iSettingSchema | iTypedSettingSchema<any, any, any>)[]
) {
  for (let schema of subSchemas) {
    //* Note: This function assumes that there would be only one parent node and one children in each schema
    const parentNode = _.find(rootSchema.navigation.list, {
      title: schema.navigation.list[0].title,
    });
    if (parentNode) {
      parentNode.children = [
        ...parentNode.children,
        ...schema.navigation.list[0].children,
      ];
    } else {
      rootSchema.navigation.list = [
        ...rootSchema.navigation.list,
        ...schema.navigation.list,
      ];
    }
    rootSchema.map = {
      ...rootSchema.map,
      ...schema.map,
    } as any;
  }
}

export const SettingsSchema: iSettingSchema = (() => {
  const schema: iSettingSchema = {
    navigation: {
      list: [],
    },
    map: {},
  };
  const subSchemaRegistry: (
    | iSettingSchema
    | iTypedSettingSchema<any, any, any>
  )[] = [
      // System Settings



      YardCreationSchema,
      ValuationConditionSchema,

      YardlevelDefinitionSchema,
      TenderDefinitionSchema,
      CommonListItemSchema,
      YardInConditionSchema,
      AuctionSchema,
      YardReleaseTypeSchema,
      YardInCheckListItemsSchema,

      YardFeeTypeSchema,
      SalesMethodSchema,
      YardFeeChargeDetails

    ];
  registerSubSchemas(schema, subSchemaRegistry);
  return schema;
})();

// Todos
// 1) Ensure the order
// 2) remove unwanted spaces
// 3) File Namins should be consistenet - use Pascal Case
