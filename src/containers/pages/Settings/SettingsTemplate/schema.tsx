import { Button, Tag } from "antd";
import moment from "moment";
import React from "react";
import { FormItemSchema } from "../../../../schemas/form-schema";
import { LOLCSDK } from "../../../../sdk";
import { P } from "../../../atoms/typography";

export const SettingListViewColumnRenderFunctions = {
  STRING: (scheme: SettingsSchema_Field) => (text: string, record: any) => {
    if (typeof scheme.field === "function") {
      text = scheme.field(record);
    }
    text = scheme.mapFunction ? scheme.mapFunction(text) : text;
    return <P className="text-xs">{text}</P>;
  },
  TAG: (scheme: SettingsSchema_Field) => (tag: string, record: any) => {
    if (typeof scheme.field === "function") {
      tag = scheme.field(record);
    }
    tag = scheme.mapFunction ? scheme.mapFunction(tag) : tag;
    let color = "";
    color =
      tag === "ACTIVE" || tag === "INTERNAL" || tag === "ON"
        ? "green"
        : tag === "YES"
          ? "blue"
          : tag === "NO"
            ? "red"
            : "orange";

    return <Tag color={color}>{(tag || "").toUpperCase()}</Tag>;
  },
  DATE: (scheme: SettingsSchema_Field) => (dateString: string, record: any) => {
    if (typeof scheme.field === "function") {
      dateString = scheme.field(record);
    }
    dateString = scheme.mapFunction
      ? scheme.mapFunction(dateString)
      : dateString;
    return (
      <P className="text-xs">{moment(dateString).format(scheme.format)}</P>
    );
  },
  NUMBER: (scheme: SettingsSchema_Field) => (number: string, record: any) => {
    if (typeof scheme.field === "function") {
      number = scheme.field(record);
    }
    number = scheme.mapFunction ? scheme.mapFunction(number) : number;
    return <P className="text-xs">{number}</P>;
  },
  "YES-NO": (scheme: SettingsSchema_Field) => (value: boolean, record: any) => {
    if (typeof scheme.field === "function") {
      value = scheme.field(record);
    }
    value = scheme.mapFunction ? scheme.mapFunction(value) : value;
    return <P className="text-xs">{value ? "YES" : "NO"}</P>;
  },
  TAGS: (scheme: SettingsSchema_Field) => (tags: string[], record: any) => {
    if (typeof scheme.field === "function") {
      tags = scheme.field(record);
    }
    tags = scheme.mapFunction ? scheme.mapFunction(tags) : tags;
    return (
      <>
        {tags.map((tag, index) => (
          <Tag color={"green"} key={index.toString()}>
            {(tag || "").toUpperCase()}
          </Tag>
        ))}
      </>
    );
  },
  BUTTON: (scheme: SettingsSchema_Field) => (text: string, record: any) => {
    if (typeof scheme.field === "function") {
      text = scheme.field(record);
    }
    text = scheme.mapFunction ? scheme.mapFunction(text) : text;
    return <Button>{text}</Button>;
  },
};
export type SettingsListColTypes =
  | "STRING"
  | "TAG"
  | "DATE"
  | "NUMBER"
  | "YES-NO"
  | "TAGS";

export const SettingsForm_CollectionColumnRenderMap = {
  TEXT_STRING: SettingListViewColumnRenderFunctions.STRING,
  TEXTAREA: SettingListViewColumnRenderFunctions.STRING,
  SELECT: SettingListViewColumnRenderFunctions.STRING,
  NUMBER: SettingListViewColumnRenderFunctions.STRING,
  CHECKBOX: SettingListViewColumnRenderFunctions.STRING,
  REMOTE_SELECT: SettingListViewColumnRenderFunctions.STRING,
  TITLE: SettingListViewColumnRenderFunctions.STRING,
  DESCRIPTION: SettingListViewColumnRenderFunctions.STRING,
  RADIO: SettingListViewColumnRenderFunctions.STRING,
  CUSTOM_PHONE: SettingListViewColumnRenderFunctions.STRING
};

export type FormFieldTypes =
  | "TEXT_STRING"
  | "TEXTAREA"
  | "SELECT"
  | "NUMBER"
  | "CHECKBOX"
  | "REMOTE_SELECT"
  | "TITLE"
  | "DESCRIPTION"
  | "RADIO"
  | "CUSTOM_PHONE";

export interface SettingsSchema_AvailableSearchField {
  field: string;
  label: string;
}

export interface SettingsSchema_Field {
  id: string;
  label: string;
  field: string | Function;
  type: SettingsListColTypes;
  format?: string;
  mapFunction?: (field: any) => any;
}

export interface iTypedSettingSchema<Record, CreateReq, UpdateReq> {
  navigation: {
    list: {
      title: string;
      children: {
        name: string;
        key: string;
        path: string;
      }[];
    }[];
  };
  map: {
    [key: string]: {
      id: string;
      title: string;
      description: string;
      listView: {
        availableSearchFields: {
          field: string;
          label: string;
        }[];
      };
      createView: {
        steps: SettingSchema_Step[];
        sideBar: {
          title: string;
          cards: {
            title: string;
            body: string;
          }[];
        };
      };
      apis: {
        list?: (SDK: LOLCSDK) => () => Promise<Record[]>;
        getById?: (SDK: LOLCSDK) => (id: any) => Promise<Record>;
        update?: (SDK: LOLCSDK) => (id: any, data: UpdateReq) => Promise<any>;
        create?: (SDK: LOLCSDK) => (data: CreateReq) => Promise<any>;
        [apiKey: string]:
        | ((SDK: LOLCSDK) => (...args: any[]) => Promise<any>)
        | undefined;
      };
      fields: iSettingSchemaField<Record, any>[];
    };
  };
}

export interface iSettingSchemaField<Record, Field extends unknown> {
  id: string;
  label: string;
  field: (record: Record) => Field;
  type: keyof typeof SettingListViewColumnRenderFunctions;
  format?: "DD-MM-YYYY";
  mapFunction?: (field: Field) => any;
}

export interface iSettingSchema {
  navigation: {
    list: {
      title: string;
      children: {
        name: string;
        key: string;
        path: string;
        description?: string;//
        tooltip?: string;//
      }[];
    }[];
  };
  map: {
    [key: string]: iSettingConfig;
  };
}

export interface iSettingConfig {
  id: string;
  title: string;
  description: string;
  customIdMapping?: { //
    listViewId?: string;
    updateView?: string;
  };
  listView: {
    availableSearchFields: {
      field: string;
      label: string;
      type?: "DATE" | "STRING";//
      format?: string;//
    }[];
    hasNotes?: boolean;//
    showViewAction?: boolean;
    additionalViewFields?: CreateViewField[];
    useServerPagination?: boolean;
    disableCreate?: boolean;
    disableCreateCondition?: (data: any[]) => boolean;
  };
  createView: {
    steps: SettingSchema_Step[];
    sideBar: {
      title: string;
      cards: {
        title: string;
        body: string;
      }[];
    };
    nonEditableFields?: string[];
    isRecordsNonEditable?: boolean;
  };
  apis: {
    [apiKey: string]: any;
    // "ACTIVE" | "INACTIVE"
    // list?: (SDK: LOLCSDK) => (status: any) => Promise<any[]>,
    // getById?: (SDK: LOLCSDK) => (id: any) => Promise<any>,
    // update?: (SDK: LOLCSDK) => (id: any, data: any) => Promise<any>,
    // create?: (SDK: LOLCSDK) => (data: any) => Promise<any>;
  };
  fields: CreateViewField[];
  oneToManyMappings?: OneToManyMapSchema[];
}

export interface OneToManyMapSchema {
  label: string;
  createCard: SettingSchema_Card;
  listView: {
    fields: CreateViewField[];
  };
  apis: {
    [apiKey: string]: any;
  };
  oneToManyMappings?: OneToManyMapSchema[];
}

export interface CreateViewField {
  id: string;
  label: string;
  field: string | Function;
  type: SettingsListColTypes;
  format?: string;
  mapFunction?: (field: any) => any;
  actionOnClick?: (sdk: LOLCSDK) => (field: any, mainEntityId: any) => any;
  width?: number;
}

export interface SettingSchema_Step {
  title: string;
  description: string;
  subSteps: SettingSchema_SubStep[];
}

export interface SettingSchema_SubStep {
  title: string;
  hiddenActionButtons?: ("SAVE" | "RESET" | "BACK")[];
  cards: SettingSchema_Card[];
}

export interface SettingSchema_Card {
  title: string;
  description: string;
  fields: FormItemSchema[];
}

export interface SettingSchema_SideBarCard {
  title: string;
  body: string;
}
