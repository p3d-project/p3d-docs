// View Google Doc embeds
interface GoogleDocProps {
  src: string;
  isEditable: boolean;
}

function GoogleDoc({ src, isEditable = true }: GoogleDocProps) {
  let editLink = null;

  if (isEditable) {
    editLink = <a href={src}>Edit this document</a>;
  }

  return (
    <div>
      {editLink}
      <iframe
        id={'googleDoc-' + src}
        className="min-h-[100vh] w-full"
        src={src + '/preview?rm=minimal'}
      ></iframe>
    </div>
  );
}

export default GoogleDoc;
