import {
  collection,
  config,
  fields,
  singleton,
  type ComponentSchema,
} from '@keystatic/core';
import {
  block,
  type ContentComponent,
} from '@keystatic/core/content-components';

const baseComponents = {
  GoogleDoc: block({
    label: 'Google Document',
    schema: {
      src: fields.url({ label: 'Source' }),
      isEditable: fields.checkbox({
        label: 'Is Editable',
        defaultValue: true,
      }),
    },
  }),
  RemoteMd: block({
    label: 'Remote Markdown',
    schema: {
      src: fields.url({ label: 'Source' }),
    },
  }),
} satisfies Record<string, ContentComponent>;

const baseSchema = {
  tableOfContents: fields.checkbox({
    label: 'Table of Contents',
    defaultValue: true,
  }),
  content: fields.markdoc({
    label: 'Content',
    components: baseComponents,
    options: {
      image: {
        directory: 'src/assets/docs/images',
        publicPath: '@assets/docs/images',
      },
    },
  }),
} satisfies Record<string, ComponentSchema>;

const singletonSchema = {
  title: fields.text({
    label: 'Title',
  }),
  ...baseSchema,
} satisfies Record<string, ComponentSchema>;

const collectionSchema = {
  title: fields.slug({
    name: { label: 'Title' },
  }),
  ...baseSchema,
} satisfies Record<string, ComponentSchema>;

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'p3d-project',
      name: 'p3d-website',
    },
  },
  singletons: {
    roadmap: singleton({
      label: 'Roadmap',
      path: 'src/content/docs/docs/roadmap',
      format: { contentField: 'content' },
      schema: singletonSchema,
    }),
    credits: singleton({
      label: 'Credits',
      path: 'src/content/docs/docs/credits',
      format: { contentField: 'content' },
      schema: singletonSchema,
    }),
  },
  collections: {
    getting_started: collection({
      label: 'Getting Started',
      slugField: 'title',
      path: 'src/content/docs/docs/getting-started/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
    milestones: collection({
      label: 'Milestones',
      slugField: 'title',
      path: 'src/content/docs/docs/milestones/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
    p3d_amicitia: collection({
      label: 'P3D-Amicitia',
      slugField: 'title',
      path: 'src/content/docs/docs/p3d-amicitia/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
    p3d_game: collection({
      label: 'P3D-Game',
      slugField: 'title',
      path: 'src/content/docs/docs/p3d-game/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
    p3d_website: collection({
      label: 'P3D-Website',
      slugField: 'title',
      path: 'src/content/docs/docs/p3d-website/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
    references: collection({
      label: 'References',
      slugField: 'title',
      path: 'src/content/docs/docs/references/**',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
  },
});
