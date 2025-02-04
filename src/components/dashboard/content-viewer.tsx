import { ClipboardIcon, ShareIcon, StarIcon } from 'lucide-react';
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import Markdown from 'react-markdown';
import toast from 'react-hot-toast';
type ContentViewerProps = {
    content: string
}
export default function ContentViewer({ content }: ContentViewerProps) {

    const handleCopy = async () => {
        try {
            
            await navigator.clipboard.writeText(content);
            
            toast.success('Copy')
        }

        catch (e) {
            console.error('[Error] failed to copy clipboard', e);
            toast.error('No Copy')
        }
    }

    return (

        <Card className="mt-4">

            <CardContent className="p-8">``

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

                <Button  onClick={handleCopy}>

                    <ClipboardIcon className="h-4 w-4"/>

                </Button>

                <Button>

                    <StarIcon className="h-4 w-4" />


                </Button>

            </CardFooter>

        </Card>

    )
}