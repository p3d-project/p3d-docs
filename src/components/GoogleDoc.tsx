// View Google Doc embeds
interface GoogleDocProps {
    src: string;
}

function GoogleDoc({ src }: GoogleDocProps) {
    return (
        <div>
            <a href={src}>Edit this document</a>
            <iframe
                id={'googleDoc-' + src}
                className="w-full min-h-[100vh]"
                src={src + "/preview?rm=minimal"}>
            </iframe>
        </div>
    )
}

export default GoogleDoc;
