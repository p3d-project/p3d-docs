import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
  storage: {
    kind: 'github',
    repo: 'p3d-project/p3d-website',
  },
  collections: {
    docs: collection({
      label: 'Docs',
      slugField: 'title',
      path: 'src/content/docs/docs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        tableOfContents: fields.checkbox({
          label: 'Table of Contents',
          defaultValue: true,
        }),
        // TODO: add starlight options?
        // https://github.com/withastro/starlight/blob/main/packages/starlight/schema.ts
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
          components: {
            GoogleDoc: block({
              label: 'Google Doc',
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
          },
        }),
      },
    }),
  },
});
