import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool, 
  projectUsersWidget,
  projectInfoWidget} from "@sanity/dashboard";
  import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
  import {media, mediaAssetSource} from 'sanity-plugin-media'
  import { catsWidget } from "sanity-plugin-dashboard-widget-cats";


  export default defineConfig({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    dashboardTool({ 
    widgets: [ 
      documentListWidget({title: 'Last edited page', order: '_updatedAt desc'}),
      catsWidget({layout: 'medium'}),
      projectInfoWidget({layout: 'large'}),
      projectUsersWidget({layout: 'medium'}),
    ]
    }), deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([...S.documentTypeListItems().reverse()]),
    }), visionTool(), media()],
    form: {
      // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
      file: {
        assetSources: previousAssetSources => {
          return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
        }
      }
    },
  schema: {
    types: schemaTypes,
  },
})
