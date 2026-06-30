// Code based from https://docs.astro.build/en/guides/markdown-content/#fetching-remote-markdown
import { marked } from 'marked';

interface RemoteMdProps {
    src: string;
}

// TODO: find a way to display/detect the headers for the table of contents sidebar
// TODO: parse out the # H1 header (since it is duplicate to the title property)
async function RemoteMd({ src }: RemoteMdProps) {
    const response = await fetch(src);
    const markdown = await response.text();
    const content = marked.parse(markdown);

    return (
        <article dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default RemoteMd;