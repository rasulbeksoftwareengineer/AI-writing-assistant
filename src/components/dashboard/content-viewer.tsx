import { ClipboardIcon, ShareIcon, StarIcon } from 'lucide-react';
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import Markdown from 'react-markdown';
type ContentViewerProps = {
    content: string
}
export default function ContentViewer({ content }: ContentViewerProps) {
    return (
        <Card className="mt-4">
            <CardContent className="p-8">
                <div className="prose lg:prose-xl">
                    <Markdown>
                        {content}
                    </Markdown>
                </div>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
                <Button>
                    <ShareIcon className="h-4 w-4" />
                </Button>
                <Button>
                    <ClipboardIcon className="h-4 w-4" />
                </Button>
                <Button>
                    <StarIcon className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}