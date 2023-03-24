import { isStaff } from "../../../db/access";
import type { CollectionConfig } from "payload/types";

export const Materials: CollectionConfig = {
   slug: "materials-lKJ16E5IhH",
   labels: { singular: "Material", plural: "Materials" },
   admin: { group: "Custom", useAsTitle:  "name", },

   access: {
      create: isStaff, //udpate in future to allow site admins as well
      read: () => true,
      update: isStaff, //udpate in future to allow site admins as well
      delete: isStaff, //udpate in future to allow site admins as well
   },
   fields: [
      {
         name: "entry",
         type: "relationship",
         relationTo: "entries",
         hasMany: false,
         required: true,
         filterOptions: () => {
            return {
               collectionEntity: { equals: "materials-lKJ16E5IhH" },
            };
         },
      },
      {
         name: "id",
         type: "text",
      },
      {
         name: "data_key",
         type: "text",
      },
      {
         name: "name",
         type: "text",
      },
      {
         name: "description",
         type: "text",
      },
      {
         name: "bg_description",
         type: "text",
      },
      {
         name: "itemtype",
         type: "relationship",
         relationTo: "_itemType-lKJ16E5IhH",
         hasMany: false,
         required: false,
      },
      {
         name: "rarity",
         type: "relationship",
         relationTo: "_rarity-lKJ16E5IhH",
         hasMany: false,
         required: false,
      },
      {
         name: "icon_name",
         type: "text",
      },
      {
         name: "max_limit",
         type: "number",
      },
      {
         name: "purpose_type",
         type: "number",
      },
      {
         name: "checksum",
         type: "text",
      },
   ],
};
