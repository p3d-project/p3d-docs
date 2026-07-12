import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
    GoogleDoc: {
      render: component('./src/components/GoogleDoc.tsx'),
      attributes: {
        src: { type: String, required: true },
        isEditable: { type: Boolean },
      },
    },
    RemoteMd: {
      render: component('./src/components/RemoteMd.tsx'),
      attributes: {
        src: { type: String, required: true },
      },
    },
  },
});
